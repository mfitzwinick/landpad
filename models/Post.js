const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    id: { type: Number},
    username: { type: String },
    title: { type: String },
    content: { type: String },
    likes: { type: Number },
    liked: { type: Boolean },
    favorited: { type: Boolean },
    image: { type: String },
    profileImage: { type: String }
});
const Post = mongoose.model("Post", postSchema);

module.exports = Post;