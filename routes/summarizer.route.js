const express = require("express");
const router = express.Router();
const { summarizeText } = require("../controllers/summarize.controller");

router.post("/summarize", summarizeText);

module.exports = router;