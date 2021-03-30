const { Sequelize, Model, DataTypes } = require("sequelize");
const DATABASE_URL = require("../config");

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
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Must be a valid email address",
        },
      },
      expertise: DataTypes.ENUM(languages),
    },
  },
  { sequelize, modelName: "user" }
);

console.log("usermodel", User === sequelize.models.User); // true

module.exports = User;
// (async () => {
//   await sequelize.sync();
//   const jane = await User.create({
//     username: "janedoe",
//     birthday: new Date(1980, 6, 20),
//   });
// })();
