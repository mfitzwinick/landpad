const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Post
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Post
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUsername: function(req, res) {
    db.Post
      .findByUsername({_username: req.params.username })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    req.body.likes = 0;
    req.body.favorited = false;
    req.body.liked = false;
    console.log(req.body);
    // req.body.favorited = false;
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Post
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  },
  addlike: function(req, res) {
    console.log(req.params.id)
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, { $inc: { likes: 1 }}, { useFindAndModify: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removelike: function(req, res) {    
    console.log(req.params.id)
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, { $inc: { likes: -1 }}, { useFindAndModify: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addFavorite: function(req, res) {
    console.log(req.params.id)
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, { $set: { favorited: true }}, { useFindAndModify: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeFavorite: function(req, res) {    
    console.log(req.params.id)
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, { $set: { favorited: false }}, { useFindAndModify: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addLiked: function(req, res) {
    console.log(req.params.id)
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, { $set: { liked: true }}, { useFindAndModify: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeLiked: function(req, res) {    
    console.log(req.params.id);
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, { $set: { liked: false }}, { useFindAndModify: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addPosterProfile: function(req, res) {
    console.log(req.params.id);
    console.log(req.body);
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, { $set: { profileImage: req.body.profileImage }}, { useFindAndModify: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addPosterUsername: function(req, res) {    
    console.log(req.params.id);
    console.log(req.body);
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, { $set: { username: req.body.username }}, { useFindAndModify: false })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }


};


