const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const port = 4003;
const app = express();

app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const { type, data } = req.body;
  const blockedWord = 'orange';

  if(type === 'CommentCreated') {
    const status = data.content.includes(blockedWord) ? 'rejected' : 'approved';
    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        ...data,
        status,
      }
    }).catch(error => console.log(error.message));
  }

  return res.status(204);
});

app.listen(port, () => {
  console.log(`Moderation::Listening on ${port}`);
});
