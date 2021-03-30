const express = require("express");
const client = require("../db");
const User = require("../models/user");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/user", async (req, res) => {
  try {
    const { query } = req;
    const user = new User(query);
    await user.save();
    res.json({ user }); // Returns the new user that is created in the database
  } catch (error) {
    console.error(error);
    const formattedError = `Unable to create new user\n 
      incoming query: ${query} \n 
      error: ${error}`;
    res.status(404).send(formattedError);
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
    const formattedError = `Unable to get new user\n 
      incoming userId: ${userId} \n 
      error: ${error}`;
    res.status(404).send(formattedError);
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
    const formattedError = `Unable to select * users\n 
      error: ${error}`;
    res.status(404).send(formattedError);
  }
});

module.exports = router;
