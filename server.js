const express = require("express");
const bodyParser = require("body-parser");

const route = require("./routes/api/studentRoute");
const app = express();

//middleware bodyparser
app.use(bodyParser.json());

mongoose.connect(config.get(mongoURI));
//router
app.use("/api/student", route);



app.listen(5000, () => console.log("Running at port: " + 5000));
