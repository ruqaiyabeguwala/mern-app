const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const route = require("./routes/api/studentRoute");
const app = express();

//middleware bodyparser
app.use(bodyParser.json());

//connect to db
var con = mongoose
  .connect("mongodb://localhost/Student", {
    useNewUrlParser: true
  })
  .then(() => console.log("Mongodb running"));

//router
app.use("/api/student", route);

//connect
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Running at port: " + port));
