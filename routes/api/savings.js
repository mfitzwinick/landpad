const router = require("express").Router();
const savingsController = require("../../controllers/savingsController");


// Matches with "/api/users"
router.route("/create").post(savingsController.create);
router.route("/:id").get(savingsController.findById);


module.exports = router;