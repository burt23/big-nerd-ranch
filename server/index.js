const express = require("express");
const Sequelize = require("sequelize");
const { User } = require("../models/user");
const { Client } = require("pg");

const app = express();
const PORT = 3333;

const DB_URL = process.env.DB_URL || "";

const client = new Client({
  connectionString: DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

client.query(
  "SELECT table_schema,table_name FROM information_schema.tables;",
  (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  }
);

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
