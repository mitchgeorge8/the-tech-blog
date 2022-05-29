const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

// post & comment | one-to-many
Post.hasMany(Comment, {
  foreignKey: "post_id",
});
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

// user & comment | one-to-many
User.hasMany(Comment, {
  foreignKey: "user_id",
});
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// user & post | one-to-many
User.hasMany(Post, {
  foreignKey: "user_id",
});
Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { Comment, Post, User };
