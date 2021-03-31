// seeds db with mock users and posts
const users = require("../data/users");
const posts = require("../data/posts");
const client = require("./index");

const seedDb = () =>
  client
    .sync()
    .then(() => {
      users.forEach(async (user) => {
        console.log("creating user...", user);
        await User.create(user);
        console.log("created user!");
      });
      posts.forEach(async (post) => {
        console.log("creating post...", post);
        await Post.create(post);
        console.log("created post!");
      });
    })
    .catch(console.error);

module.exports = seedDb;
