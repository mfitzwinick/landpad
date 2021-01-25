const router = require("express").Router();
const savingsController = require("../../controllers/savingsController");
const passport = require('../../configs/passport');

// Matches with "/api/users"
router.route("/savings")
    // .get(profileController.findAll)
    .post(savingsController.create);


router.post("/", () => { console.log("hit me baby one more time") })
// Matches with "/api/users/:username"
// router
//   .route("/:username")
//   .get(profileController.findByUsername)
//   .put(profileController.update)
//   .delete(profileController.remove);

// // Matches with "/api/users/:id"
//   router
//   .route("/:id")
//   .get(profileController.findById)
//   .put(profileController.update)
//   .delete(profileController.remove);

router
    .route("/login")
    .post(passport.authenticate("local"), profileController.login)

router
    .route("/logout")
    .get(profileController.logout)

module.exports = router;