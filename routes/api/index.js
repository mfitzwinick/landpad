const router = require("express").Router();
const postRoute = require("./posts");
const profileRoute = require("./profile");
const savingsRoute = require("./savings")

router.use("/posts", postRoute);
router.use("/profile", profileRoute)
router.use("/savings", savingsRoute)

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;