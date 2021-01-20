const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First Name is Required"
    },
    lastName: {
        type: String,
        trim: true
    },
    userName: {
        type: String,
        trim: true,
        required: "User Name is Required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },
    california: {
        type: Boolean
    },
    city: {
        type: String
    },
    area: {
        type: String,
        trim: true
    },
    agree: {
        type: Boolean
    },
    image: {
        type: String
    }
});



const Profiles = mongoose.model("Profiles", profileSchema);

module.exports = Profiles