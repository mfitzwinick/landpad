const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const apiRoutes = require("./routes");
const { cloudinary } = require('./utils/cloudinary')
require("dotenv").config();




const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/landpad", { useNewUrlParser: true });

app.post('/api/upload', async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'dev_setups'
    })
    console.log(uploadedResponse)
    res.json({ msg: "Woohoo!" })

  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Something went wrong" })
  }

});

app.get('/api/images', async (req, res) => {
  const { resources } = await cloudinary.search.expression('folder:dev_setups')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();
  const publicIds = resources.map(file => file.public_id)
  res.send(publicIds)
})

app.use("/", apiRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
