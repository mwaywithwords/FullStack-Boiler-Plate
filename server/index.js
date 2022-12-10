require("dotenv").config();
const express = require('express');
const app = express();
const path = require("path");
// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, '../public')));

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});