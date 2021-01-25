const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const apiRoutes = require("./routes/api");
require("dotenv").config();

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/landpad", { useNewUrlParser: true, useUnifiedTopology: true });


app.use("/", apiRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
