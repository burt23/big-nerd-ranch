const { Client } = require("pg");

const client = new Client({
  user: "ylosjnofgcrrof",
  password: "072ec37f72671bf5e6e30d1a662bdd3333b53e3a1b50c0525a6a021424abcd97",
  database: "da7jnpbrfjqqoi",
  port: 5432,
  ssl: true,
  rejectUnauthorized: false,
  host: "ec2-3-91-127-228.compute-1.amazonaws.com",
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
