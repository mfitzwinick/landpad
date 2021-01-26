const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "api/share/create"
router.route("/share/create")
  .post(postController.create);

// matches with api/posts/share
router.route("/share")
  .get(postController.findAll)

// api/posts/addlike
router.route("/addlike/:id")
  .get(postController.addlike)

// api/posts/removelike
router.route("/removelike/:id")
  .get(postController.removelike)

// api/posts/addfavorite
router.route("/addfavorite/:id")
.get(postController.addFavorite)

// api/posts/removefavorite
router.route("/removefavorite/:id")
.get(postController.removeFavorite)

// Matches with "/share/:username"
// router
//   .route("share/:username")
//   .get(postController.findByUsername)
//   .put(postController.update)
//   .delete(postController.remove);

// // Matches with "/share/:id"
//   router
//   .route("share/:id")
//   .get(postController.findById)
//   .put(postController.update)
//   .delete(postController.remove);


module.exports = router;
