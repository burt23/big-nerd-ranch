const client = require("../db");
const User = require("../models/user");

const addUser = async (req, res) => {
  try {
    const { query } = req;
    const user = new User(query);
    await user.save();
    res.json({ user }); // Returns the new user that is created in the database
  } catch (error) {
    console.error(error);
    const formattedError = `Unable to create new user\n 
      incoming query: ${JSON.stringify(req.query)} \n 
      error: ${JSON.stringify(error)}`;
    res.status(404).send(formattedError);
  }
};

const getUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await client.findAll({
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
};

const getUsers = async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    const users = await User.findAll({ query });
    res.json(users); // Returns the new user that is created in the database
  } catch (error) {
    console.error(error);
    const formattedError = `Unable to select * users\n 
      error: ${error}`;
    res.status(404).send(formattedError);
  }
};

module.exports = { addUser, getUser, getUsers };
