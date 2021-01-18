const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  password: {
      type: String,
      trim: true,
      required: "Password is Required",
      validate: [({ length }) => length >= 6, "Password should be longer."]
    }, 
    // // we might want to add these fields later, just going to leave them commented out for now
    // email: {
    //     type: String,
    //     unique: true,
    //     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    //   },
    
    //   userCreated: {
    //     type: Date,
    //     default: Date.now
    //   }
});

const AuthUser = mongoose.model("Users", UserSchema);

module.exports = AuthUser;
