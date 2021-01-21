const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const isAuthenticated = require("../middlewear/isAuthenticated");

// API Routes
router.use("/api", apiRoutes);

router.get("/test", isAuthenticated, (req,res) => {
  res.json("You've arrived at the secret")
})
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
