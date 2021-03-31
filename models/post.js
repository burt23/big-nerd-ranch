const { Sequelize, Model, DataTypes } = require("sequelize");
const DATABASE_URL = require("../config");

const sequelize = new Sequelize(DATABASE_URL);

class Post extends Model {}

Post.init(
  {
    userId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "post" }
);

module.exports = Post;
