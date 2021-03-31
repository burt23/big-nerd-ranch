const { Sequelize, Model, DataTypes } = require("sequelize");
const DATABASE_URL = require("../config");
const users = require("../data/users");

const sequelize = new Sequelize(DATABASE_URL);

const languages = [
  "node.js",
  "Python",
  "Go",
  "Flask",
  "Rust",
  "Ruby",
  "Elixer",
  "C",
  "Haskell",
  "Lisp",
];

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Must be a valid email address",
        },
      },
    },
    expertise: {
      type: DataTypes.ENUM(languages),
      allowNull: false,
    },
  },
  { sequelize, modelName: "user" }
);

module.exports = User;

// seeds db with mock users
sequelize
  .sync()
  .then(() => {
    users.forEach(async (user) => {
      console.log("creating user...", user);
      await User.create(user);
      console.log("created user!");
    });
  })
  .catch(console.error);
