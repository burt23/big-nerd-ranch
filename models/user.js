const { Model, DataTypes } = require("sequelize");
const client = require("../db");
const users = require("../data/users");

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
  { sequelize: client, modelName: "user" }
);

User.sync()
  .then(() => {
    users.forEach(async (user) => {
      console.log("creating user...", user);
      await User.create(user);
      console.log("created user!");
    });
  })
  .catch((error) => console.error("unable to seed users into db...", error));

module.exports = User;
