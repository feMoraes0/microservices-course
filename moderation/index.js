const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const port = 4003;
const app = express();

app.use(bodyParser.json());

app.post('/events', (req, res) => {

});

app.listen(port, () => {
  console.log(`Moderation::Listening on ${port}`);
});
