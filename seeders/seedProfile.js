let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/landpad", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let profileSeed = [{

    firstName: "Michele",
    lastName: "Winick",
    userName: "@fitzy",
    password: "password",
    california: true,
    city: "Los Angeles",
    area: "Studio City",
    agree: true,
    image: "image here"
}, 
{
    firstName: "Jessica",
    lastName: "Crump",
    userName: "@jesscru",
    password: "password",
    california: false,
    city: null,
    area: null,
    agree: true,
    image: "../client/src/images/xs-profile-jc.JPG"
}]



db.Profiles.deleteMany()
    .then(() => db.Profiles.create(profileSeed))
    .then(data => {
        console.log(" New profile received!");

    })
    .catch(err => {
        console.error(err);

    });
