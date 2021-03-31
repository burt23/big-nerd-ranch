const { Model, DataTypes } = require("sequelize");
const client = require("../db");

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

module.exports = User;
