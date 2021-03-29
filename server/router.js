const express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/user", async (req, res) => {
  try {
    const newUser = new User(req.body);
    console.log("new user", { newUser });
    await newUser.save();
    res.json({ user: newUser }); // Returns the new user that is created in the database
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

module.exports = router;
