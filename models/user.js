const { Sequelize, Model, DataTypes } = require("sequelize");

const USER = process.env.DBUSER || "dashurpa";

const sequelize = new Sequelize(`postgres://${USER}@localhost:5432/test`);

class User extends Model {}

User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  { sequelize, modelName: "user" }
);

console.log("usermodel", User === sequelize.models.User); // true

module.exports = { User };
// (async () => {
//   await sequelize.sync();
//   const jane = await User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });

// module.exports = () => {
//   console.log("inside of the user model");
//   console.log({ sequelize, dataTypes });
//   const User = sequelize.define(
//     "user",
//     {
//       // attributes
//       name: {
//         type: dataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: dataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//           isEmail: {
//             msg: "Must be a valid email address",
//           },
//         },
//       },
//     },
//     {
//       // options
//     }
//   );
//   console.log("attempting to create this user", User);
//   return User;
// };
