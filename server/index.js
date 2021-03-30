const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT: ${PORT}`);
});
