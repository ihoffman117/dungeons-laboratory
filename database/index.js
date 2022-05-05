const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dungeon-labs');

const characterSchema = new mongoose.Schema({
  name: String,
  race: String,
  class: String,
  ac: Number,
  maxHp: Number,
  hp: Number,
});

const Character = mongoose.model('Character', characterSchema);

const encounterSchema = new mongoose.Schema({
  encounterName: String,
  monsters: Array,
  characters: Array,
});

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports.Character = Character;
module.exports.Encounter = Encounter;
