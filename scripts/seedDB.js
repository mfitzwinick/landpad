let mongoose = require("mongoose");
let db = require("../models");
const Post = require("../models/Post");

mongoose.connect("mongodb://localhost/landpad", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let postSeed = [{

    username: "fitzy",
    title: "Real Estate Agent",
    content: "Look at my great new listing!",
    likes: 3,
    liked: true, 
    profileImage: "https://res.cloudinary.com/landpad/image/upload/v1611644091/cnjmsdbtq7htgvm2xg6s.jpg",
    favorited: true,
    image: "https://res.cloudinary.com/landpad/image/upload/v1611644680/kcafy0yzzrlvpejg9bhj.jpg"
},
{
    username: "yess.samuels",
    title: "Checkout my New Home!",
    content: "@fitzy sold me this house! She's the best. Definitely recommend her when you're buying your next home!",
    likes: 6,
    liked: true, 
    profileImage: "https://res.cloudinary.com/landpad/image/upload/v1611615715/x35ho50spts0nt4qws4t.jpg",
    favorited: false,
    image: "https://res.cloudinary.com/landpad/image/upload/v1611643784/hhcdkhsgcpiueaoojhke.jpg"

}, 
{
    username: "franz",
    title: "Checkout this listing!",
    content: "This home is in a cozy neighborhood in a great school district! Pool in the backyard too!",
    likes: 0,
    liked: false, 
    profileImage: "https://res.cloudinary.com/landpad/image/upload/v1611644752/gemzjaphhlcgwsouksau.jpg",
    favorited: false,
    image: "https://res.cloudinary.com/landpad/image/upload/v1611644804/xubkh42kpwjbc0dfyptd.jpg"

},
{
    username: "superBachelor44",
    title: "Looking for Interior Designer",
    content: "I'd love my living room to look a bit more like this. Are there any interior designers out there who can help?",
    likes: 0,
    liked: false, 
    profileImage: "https://res.cloudinary.com/landpad/image/upload/v1611644899/qp9zhbkoitutxlqve3kn.jpg",
    favorited: true,
    image: "https://res.cloudinary.com/landpad/image/upload/v1611644961/kbdsseeqkxyfnsc96791.jpg"

},
{
    username: "Rockey_Dib",
    title: "Looking for a Contractor!",
    content: "I'd love a home similar to this one. Would like a contractor who is willing to work together on the design. Please reach me at rockydib@fake.com.",
    likes: 5,
    liked: true, 
    profileImage: "https://res.cloudinary.com/landpad/image/upload/v1611644440/k46tqe2hgxucppqzaz1g.jpg",
    favorited: false,
    image: "https://res.cloudinary.com/landpad/image/upload/v1611644542/lticgeirznmlcyyxgvyn.jpg"

},  
{
    username: "AgentGreen",
    title: "Just sold this space!",
    content: "Congrats to @jesscru on her new condo!",
    likes: 0,
    liked: false, 
    profileImage: "https://res.cloudinary.com/landpad/image/upload/v1611645029/hyih9izlptlavgmwkioj.jpg",
    favorited: true,
    image: "https://res.cloudinary.com/landpad/image/upload/v1611645070/oywikiokjasza5gi1mqp.jpg"

}];

db.Post.deleteMany()
    .then(() => db.Post.create(postSeed))
    .then(data => {
        console.log(" Post Created!");
        console.log(data);

    })
    .catch(err => {
        console.error(err);

    });