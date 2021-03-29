const express = require("express");
const Sequelize = require("sequelize");
const { User } = require("../models/user");

const app = express();
const port = 8888;

const USER = process.env.DBUSER || "dashurpa";
// const PASSWORD = process.env.DBPASS;

const sequelize = new Sequelize(`postgres://${USER}@localhost:5432/test`);

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

app.listen(port, () => {
  console.log(`SERVER RUNNING ON PORT: ${port}`);
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
