const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    userId: { type: Number, required: true, unique: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;