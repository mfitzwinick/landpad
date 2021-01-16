const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    userName: { type: String, required: true },
    type: { type: String, required: true },
    message: { type: String },
    like: { type: Boolean },
    image: { type: String, required: true },
});
const Post = mongoose.model("Post", postSchema);

module.exports = Post;