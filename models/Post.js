const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    id: { type: Number, required: true },
    username: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String },
    likes: { type: Number },
    image: { type: String, required: true },
});
const Post = mongoose.model("Post", postSchema);

module.exports = Post;