const { Client } = require("pg");
const DATABASE_URL = require("../config");

const client = new Client({
  connectionString: DATABASE_URL,
  rejectUnauthorized: false,
});

try {
  client.connect();
} catch (error) {
  throw new Error("Unable to connect to db... \nError: ", error);
}

const query = "SELECT table_schema, table_name FROM information_schema.tables;";

client.query(query, (err, res) => {
  try {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  } catch (error) {
    console.error("Error querying postgres client:", error);
    res.status(404).send(error);
  }
});

module.exports = client;
