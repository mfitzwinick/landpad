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

// api/posts/favorites
router.route("/favorites")
  .get(postController.findAll)


module.exports = router;
