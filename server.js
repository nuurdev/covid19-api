const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(
  cors({
    origin: ["https://localhost:3000", "http://yourapp.com"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("Welcome to our restful API");
});

app.get("/global", (req, res) => {
  res.header("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "data/global.json"));
});

const server = app.listen(process.env.PORT || 3001, () => {
  console.log("listening on port %s...", server.address().port);
});
