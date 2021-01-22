const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  sign: payload => jwt.sign(payload, process.env.SECRET)
};