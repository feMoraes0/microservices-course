const express = require("express");
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const port = 4000;
const posts = {};
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/post', async (req, res) => {
  const { title } = req.body;
  const id = randomBytes(4).toString('hex');

  posts[id] = {
    id, title
  };

  await axios.post('http://localhost:4005/events', {
    type: 'PostCreated',
    data: posts[id],
  }).catch(
    error => console.log(error.message)
  );

  res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
  console.log('Received Event: ', req.body.type);
  res.status(204);
});

app.listen(port, () => {
  console.log(`Posts::Listening on ${port}`)
});

