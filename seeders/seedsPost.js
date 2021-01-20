let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/landpad", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let postSeed = [{

    // id: 2000,
    userName: "@fitzy",
    type: "Real Estate Agent",
    message: "Look at my great new listing!",
    like: false,
    image: "image here"
},
{
    // id: 2000,
    userName: "@jesscru",
    type: "Aspiring Homewner",
    message: "Check out this architecture!",
    like: true,
    image: "image here"

}]

db.Post.deleteMany()
    .then(() => db.Post.create(postSeed))
    .then(data => {
        console.log(" Post Created!");

    })
    .catch(err => {
        console.error(err);

    });