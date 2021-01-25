let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/landpad", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let postSeed = [{

    username: "@fitzy",
    title: "Real Estate Agent",
    content: "Look at my great new listing!",
    likes: false,
    image: "image here"
},
{
    username: "@jesscru",
    title: "Aspiring Homewner",
    content: "Check out this architecture!",
    likes: true,
    image: "image here"

}, 
{
    username: "@franz",
    title: "Commercial Real-estate Investor",
    message: "Just bought this mall!",
    likes: true,
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