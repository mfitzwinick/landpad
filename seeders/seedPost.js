let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/landpad", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let postSeed = [{

    id: 1000,
    userName: "@fitzy",
    title: "Real Estate Agent",
    message: "Look at my great new listing!",
    like: false,
    image: "image here"
},
{
    id: 2000,
    userName: "@jesscru",
    title: "Aspiring Homewner",
    message: "Check out this architecture!",
    like: true,
    image: "image here"

}, 
{
    id: 3000,
    userName: "@franz",
    title: "Commercial Real-estate Investor",
    message: "Just bought this mall!",
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