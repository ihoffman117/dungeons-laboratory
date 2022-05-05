const { Character, Encounter } = require('./index');

exports.createCharacter = (req, res) => {
  Character.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send('this is failing');
    });
};

exports.getAllCharacters = (req, res) => {
  Character.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send('there was an error');
    });
};

exports.deleteCharacter = (req, res) => {
  console.log(req.query.id);
  Character.deleteOne({ _id: req.query.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send('there was an error');
    });
};

// Encounter controllers

exports.createEncounter = (req, res) => {
  Encounter.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send('there was an error');
    });
};

exports.getEncounters = (req, res) => {
  Encounter.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send('there was an error');
    });
};

exports.deleteEncounter = (req, res) => {
  console.log(req.query.id);
  Encounter.deleteOne({ _id: req.query.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send('there was an error');
    });
};

exports.addToEncounter = (req, res) => {
  console.log(req.body);
  if (req.body.index) {
    Encounter.find({ _id: req.body.encounterId }).then((data) => {
      const arr = [];
      const { monsters } = data[0];

      if (monsters) {
        monsters.forEach((monster) => {
          arr.push(monster);
        });
      }

      arr.push(req.body.index);
      Encounter.findByIdAndUpdate(req.body.encounterId, { monsters: arr }).then(
        () => {
          res.send('added');
        }
      );
    });
  }

  if (req.body.id) {
    Encounter.find({ _id: req.body.encounterId }).then((data) => {
      const arr = [];
      const { characters } = data[0];

      if (characters) {
        characters.forEach((character) => {
          arr.push(character);
        });
      }

      arr.push(req.body.id);
      Encounter.findByIdAndUpdate(req.body.encounterId, {
        characters: arr,
      }).then(() => {
        res.send('added');
      });
    });
  }
};
