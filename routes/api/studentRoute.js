const express = require("express");
const router = express.Router();

const Student = require("../../model/Student");

router.get("/", (req, res) => {
  Student.find().then(data => res.json(data));
});

module.exports = router;
