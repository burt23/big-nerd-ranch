const express = require("express");
const { User } = require("../models/user");
const { router } = require("../models/user");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/user", async (req, res) => {
  try {
    const newUser = new User(req.body);
    console.log("new user", { newUser });

    await newUser.save();

    res.json({ user: newUser }); // Returns the new user that is created in the database
  } catch (error) {
    console.error(error);
  }
});

app.get("/user/:userId", async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT: ${PORT}`);
});
