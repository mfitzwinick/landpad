let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/landpad", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let userSeed =
{
    firstName: "Michele",
    lastName: "Winick",
    userName: "@fitzy",
    password: "password",
    image: "image here",
    userId: 1
}

db.User.deleteMany()
    .then(() => db.User.create(userSeed))
    .then(data => {
        console.log(" user input received!");

    })
    .catch(err => {
        console.error(err);

    });
