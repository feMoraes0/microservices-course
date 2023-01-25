const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 4002;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  console.log('Received Event: ', req.body.type);
  const { type, data } = req.body;

  if(type === 'PostCreated') {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] }
  } else if(type === 'CommentCreated') {
    const { id, content, postId } = data;
    posts[postId].comments.push({ id, content });
  }

  res.status(204);
});

app.listen(port, () => {
  console.log(`Query::Listening on ${port}`);
});
