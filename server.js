const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const route = require("./routes/api/studentRoute");
const app = express();

//middleware bodyparser
app.use(bodyParser.json());


//router
app.use("/api/student", route);

//connect

app.listen(5000, () => console.log("Running at port: " + 5000));
