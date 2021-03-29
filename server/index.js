const express = require("express");
const { User } = require("../models/user");
const router = require("./router");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(router);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT: ${PORT}`);
});
