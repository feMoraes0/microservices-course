const express = require("express");
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const port = 4000;
const posts = {};
const app = express();

app.use(bodyParser.json());

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/post', (req, res) => {
  const { title } = req.body;
  const id = randomBytes(4).toString('hex');

  posts[id] = {
    id, title
  };

  res.status(201).send(send[id]);
});

app.listen(port, () => {
  console.log(`Posts::Listening on ${port}`)
});

