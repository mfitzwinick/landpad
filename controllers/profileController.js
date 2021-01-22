const db = require("../models");
const jwt = require("../configs/jwt");

module.exports = {
    // findAll: function (req, res) {
    //     db.Profiles
    //         .find(req.query)
    //         .sort({ date: -1 })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // findById: function (req, res) {
    //     db.Profiles
    //         .findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // findByUsername: function(req, res) {
    //     db.Profiles
    //       .findByUsername({_username: req.params.username })
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   },
    create: function (req, res) {
        const { firstName, lastName, userName, password } = req.body
        try {
            // Error handling
            if (!firstName || !lastName || !userName || !password ) {
                return res.status(400).send("Please fill out all fields");
            }
            db.Profiles.findOne({ userName }).then(user => {
                if(user === null) {
                    db.Profiles.create(req.body)
                    return res.status(200).json("User created")
                }
                if (userName === user.userName) {
                    return res.status(400).send("Username already exists. Please use a different username.");
                };
            })
        } catch (err){
            console.error(err);
            return res.status(500).json("Internal server error");
        }
    },
    login: (req, res) => {
        try {
            const { id } = req.user
            res.status(200).json({ token: jwt.sign(id), token_type: "Bearer" });
        } catch (err) {
            console.error(err)
            return res.status(500).send("Server Error, cannot login")
        }
    },
    logout: (req,res) => {
        try {
            if(req.user) {
                req.session.destroy(err => {
                    if(err) throw err;
                    res.send({ message: "User logged out"})
                })
            } else {
                res.send({ message: "no user to log out"})
            }
        } catch (err) {
            return res.status(500).send(err)
        }
    },
    update: function (req, res) {
        db.Profiles
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Profiles
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
