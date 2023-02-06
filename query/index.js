const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const port = 4002;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
  if(type === 'PostCreated') {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] }
  } else if(type === 'CommentCreated') {
    const { id, content, postId, status } = data;
    posts[postId].comments.push({ id, content, status });
  } else if(type === 'CommentUpdated') {
    const { id, content, postId, status } = data;
    const comments = posts[postId].comments;
    const comment = comments.find(comment => comment.id === id);
    comment.status = status;
    comment.content = content;
  }
}

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  console.log('Received Event: ', req.body.type);
  const { type, data } = req.body;
  handleEvent(type, data);
  res.status(204);
});

app.listen(port, async () => {
  console.log(`Query::Listening on ${port}`);
  try {
    const events = await axios.get('http://localhost:4005/events');
    events.data.map((event) => {
      const { type, data } = event;
      handleEvent(type, data);
    });
  } catch(error) {
    console.log(error.message);
  }
});
