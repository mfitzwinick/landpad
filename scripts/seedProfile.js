let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb+srv://jesscru:password1234@cluster0.gbtqi.mongodb.net/landpad?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let profileSeed = [{

    firstName: "Michele",
    lastName: "Winick",
    userName: "@fitzy",
    password: "password",
    city: "Los Angeles",
    area: "Studio City",
    agree: true,
    profileImage: "image here"
},
{
    firstName: "Jessica",
    lastName: "Crump",
    userName: "@jesscru",
    password: "password",
    city: null,
    area: null,
    agree: true,
    profileImage: "../client/src/images/xs-profile-jc.JPG"
}]



db.Profiles.deleteMany()
    .then(() => db.Profiles.create(profileSeed))
    .then(data => {
        console.log(" New profile received!");

    })
    .catch(err => {
        console.error(err);

    });
