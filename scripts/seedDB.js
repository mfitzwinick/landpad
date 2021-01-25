let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/landpad", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let postSeed = [{

    id: 1000,
    username: "@fitzy",
    title: "Real Estate Agent",
    content: "Look at my great new listing!",
    likes: false,
    image: "image here"
},
{
    id: 2000,
    username: "@jesscru",
    title: "Aspiring Homewner",
    content: "Check out this architecture!",
    likes: true,
    image: "image here"

}, 
{
    id: 3000,
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