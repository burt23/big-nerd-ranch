const express = require("express");
const { client } = require("../db");
const User = require("../db");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/user", async (req, res) => {
  try {
    const { body } = req;
    console.log("saving user", body);
    const user = new User(body);
    console.log("new user", { user });
    await user.save();
    console.log("saved user");
    res.json({ user }); // Returns the new user that is created in the database
  } catch (error) {
    console.error(error);
  }
});

router.get("/user/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findAll({
      where: {
        id: userId,
      },
    });
    res.json({ user });
  } catch (error) {
    console.error(error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    const users = client.query(query);
    console.log("retrieving users", { users });
    res.json({ users }); // Returns the new user that is created in the database
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
