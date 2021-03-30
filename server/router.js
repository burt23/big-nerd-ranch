const express = require("express");
const { addUser, getUser, getUsers } = require("../controllers/user");

var router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/user", addUser);

router.get("/user/:userId", getUser);

router.get("/users", getUsers);

module.exports = router;
