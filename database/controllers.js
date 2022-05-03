const Character = require('./index');

exports.createCharacter = (req, res) => {
  console.log(req.body);
  Character.create(req.body)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err);
      res.send('this is failing');
    })
}

exports.getAll =(req, res) => {
  Character.find({})
    .then((data) => {
      res.send(data);
    })
}

