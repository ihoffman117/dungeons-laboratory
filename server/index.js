const express = require('express');
const path = require('path');
const axios = require('axios');
const controllers = require ('../database/controllers')

const app = express();
const api = 'https://www.dnd5eapi.co/api'


const port = 1337;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/characters', (req, res) => {
  controllers.getAll(req, res);
});

app.post('/characters', (req, res) => {
  controllers.createCharacter(req, res);
});

app.get('/monsters', (req, res) => {
  axios.get(`${api}/monsters`)
    .then((response) => {
      res.send(response.data.results);
    })
    .catch((err) => {
      res.send(err);
    })
})

app.get('/monsters/:index', (req, res) => {
  const monster = req.params.index
  axios.get(`${api}/monsters/${monster}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    })
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
