const jwt = require("jsonwebtoken");
require("dotenv").config();
console.log(process.env.SECRET)
module.exports = {
  sign: payload => jwt.sign(payload, process.env.SECRET)
};