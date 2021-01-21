const router = require("express").Router();
const postRoute = require("./posts");
const profileRoute = require("./profile");

router.use("/posts", postRoute);
router.use("/profile", profileRoute)