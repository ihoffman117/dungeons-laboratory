const express = require('express');
const path = require('path');
const axios = require('axios');
const controllers = require('../database/controllers');

const app = express();
const api = 'https://www.dnd5eapi.co/api';

const port = 1337;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/characters', (req, res) => {
  controllers.getAllCharacters(req, res);
});

app.post('/characters', (req, res) => {
  controllers.createCharacter(req, res);
});

app.delete('/characters', (req, res) => {
  controllers.deleteCharacter(req, res);
});

app.get('/monsters', (req, res) => {

  axios
    .get(`${api}/monsters`)
    .then((response) => {
      const monsters = []
      const {page} = req.query
      for (let i = page * 20 - 20; i <  page * 20; i += 1){
        monsters.push(response.data.results[i])
      }
      res.send(monsters)
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/monsters/:index', (req, res) => {
  const monster = req.params.index;
  axios
    .get(`${api}/monsters/${monster}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/encounters', (req, res) => {
  controllers.getEncounters(req, res);
});

app.post('/encounters', (req, res) => {
  controllers.createEncounter(req, res);
});

app.delete('/encounters', (req, res) => {
  controllers.deleteEncounter(req, res);
});

app.patch('/encounters', (req, res) => {
  controllers.addToEncounter(req, res);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

/*



*/
