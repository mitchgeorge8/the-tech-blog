const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all comments
router.get("/", (req, res) => {
  Comment.findAll({})
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create new comment
router.post("/", (req, res) => {
  /* req.body should look like this...
    {
      "comment_text": "This is a test comment.",
      "user_id": 1,
      "post_id": 1
    }
  */
  if (req.session) {
    Comment.create(req.body)
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// Delete comment
router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment found with this id" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
