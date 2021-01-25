const router = require("express").Router();
const postRoute = require("./posts");
const profileRoute = require("./profile");
const savingsRoute = require("./savings")

router.use("/posts", postRoute);
router.use("/profile", profileRoute)
router.use("/savings", savingsRoute)


module.exports = router;