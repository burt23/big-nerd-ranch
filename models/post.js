const { Model, DataTypes } = require("sequelize");
const client = require("../db");

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
  { sequelize: client, modelName: "post" }
);

module.exports = Post;
