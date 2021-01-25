const router = require("express").Router();
const savingsController = require("../../controllers/savingsController");


// Matches with "/api/users"
router.route("/create").post(savingsController.create);


module.exports = router;