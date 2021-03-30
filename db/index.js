const { Client } = require("pg");
const DATABASE_URL = require("../config");

const client = new Client({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

try {
  client.connect();
} catch (error) {
  throw new Error("Unable to connect to db... \nError: ", error);
}

client.query(
  "SELECT table_schema,table_name FROM information_schema.tables;",
  (err, res) => {
    try {
      if (err) throw err;
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
      }
      client.end();
    } catch (error) {
      console.error("Error querying postgres client:", error);
      throw new Error(error);
    }
  }
);

module.exports = client;
