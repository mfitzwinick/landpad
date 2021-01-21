const router = require("express").Router();
const profileController = require("../../controllers/profileController");
const passport = require('../../configs/passport');

// Matches with "/api/users"
router.route("/")
  .get(profileController.findAll)
  .post(profileController.create);

// Matches with "/api/users/:username"
router
  .route("/:username")
  .get(profileController.findByUsername)
  .put(profileController.update)
  .delete(profileController.remove);

// Matches with "/api/users/:id"
  router
  .route("/:id")
  .get(profileController.findById)
  .put(profileController.update)
  .delete(profileController.remove);

  router
    .route("/login")
    .post(passport.authenticate("local"), profileController.login)

  router
    .route("/logout")
    .post(profileController.logout)

module.exports = router;