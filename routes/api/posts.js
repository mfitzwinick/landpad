const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "api/posts/share/create"
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

// api/posts/favorites
router.route("/favorites")
  .get(postController.findAll)

// api/posts/addliked
router.route("/addliked/:id")
  .get(postController.addLiked)

// api/posts/removeliked
router.route("/removeliked/:id")
  .get(postController.removeLiked)

// api/posts/username
router.route("/username/:id")
  .post(postController.addPosterUsername)

// api/posts/profile
router.route("/profile/:id")
  .post(postController.addPosterProfile)

module.exports = router;
