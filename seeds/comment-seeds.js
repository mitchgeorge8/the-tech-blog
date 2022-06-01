const { Comment } = require("../models");

const commentData = [
  {
    comment_text:
      "Donec feugiat velit in magna placerat, et dapibus ligula commodo.",
    user_id: 1,
    post_id: 3,
  },
  {
    comment_text: "Vestibulum at tellus quis libero fermentum blandit.",
    user_id: 2,
    post_id: 4,
  },
  {
    comment_text: "Sed lacinia ligula quis tincidunt varius.",
    user_id: 3,
    post_id: 5,
  },
  {
    comment_text: "Donec at elit ut nisl vulputate fringilla.",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "Maecenas vestibulum risus vel efficitur tincidunt.",
    user_id: 5,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
