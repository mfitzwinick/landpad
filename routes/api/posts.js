const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "api/post/create"
router.route("/post/create")
  .post(postController.create);

// matches with api/post
router.route("/post")
  .get(postController.findAll)

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
