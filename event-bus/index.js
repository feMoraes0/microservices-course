const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const port = 4005;
const app = express();

app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post('http://localhost:4000/events', event).catch(error => console.log(error.message));
  axios.post('http://localhost:4001/events', event).catch(error => console.log(error.message));
  axios.post('http://localhost:4002/events', event).catch(error => console.log(error.message));
  axios.post('http://localhost:4003/events', event).catch(error => console.log(error.message));

  res.status(200).send({ status: 'ok' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(port, () => {
  console.log(`EventBus::Listening on ${port}`)
});
