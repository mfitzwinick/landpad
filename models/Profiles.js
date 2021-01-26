const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const profileSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true
    },
    userName: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
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
    profileImage: {
        type: String
    }
});

profileSchema.pre("save", function () {
    if (!this.isModified("password")) {
      return Promise.resolve();
    }

    if (this.password.length < 6) {
      return Promise.reject(
        new Error("Password must have at least 6 characters")
      );
    }
    return bcrypt.hash(this.password, SALT_ROUNDS).then(hash => {
      this.password = hash;
    });
  });
  
  profileSchema.methods.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };


const Profiles = mongoose.model("Profiles", profileSchema);

module.exports = Profiles