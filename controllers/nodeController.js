const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.TestData
        .find(req.query)
        .sort({ name: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
},
findById: function (req, res) {
    db.TestData
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
},
create: function (req, res) {
    db.TestData
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
},
update: function (req, res) {
    db.TestData
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
},
remove: function (req, res) {
    db.TestData
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
}
}