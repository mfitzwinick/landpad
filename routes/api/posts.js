const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/post"
router.route("/post")
  .get(postController.findAll)
  .post(postController.create);

// Matches with "/post/:username"
// router
//   .route("post/:username")
//   .get(postController.findByUsername)
//   .put(postController.update)
//   .delete(postController.remove);

// // Matches with "/post/:id"
//   router
//   .route("post/:id")
//   .get(postController.findById)
//   .put(postController.update)
//   .delete(postController.remove);


module.exports = router;
