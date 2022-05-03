const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dungeon-labs');

const characterSchema = new mongoose.Schema({
  name: String,
  race: String,
  class: String,
  ac: Number,
  maxHp: Number,
  hp: Number
})

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;