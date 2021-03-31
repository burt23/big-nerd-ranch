const { Sequelize } = require("sequelize");
const DATABASE_URL = require("../config");
const seedDb = require("./seedDb");

const client = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: true,
  },
});

client
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// seedDb();
module.exports = client;
