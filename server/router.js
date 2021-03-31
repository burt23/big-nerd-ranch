const express = require("express");
const { addUser, getUser, getUsers } = require("../controllers/users");
const { addPost, getPost, getPosts } = require("../controllers/posts");

var router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Big Nerd Ranch Hiring Test!");
});

router.post("/user", addUser);

router.get("/user/:userId", getUser);

router.get("/users", getUsers);

router.post("/post", addPost);

router.get("/post/:postId", getPost);

router.get("/posts", getPosts);

module.exports = router;
