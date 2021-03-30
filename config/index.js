const localConnectionString = "postgresql://dashurpa@localhost:5432:test";
const DEV_MODE = process.env.DEV_MODE === true;

const DATABASE_URL = DEV_MODE
  ? localConnectionString
  : process.env.DATABASE_URL;

module.exports = DATABASE_URL;
