const express = require("express");
const { dataValidator} = require("../validator");
const { createData, deleteData } = require("../controller");

const router = express.Router();

router.post("/create", dataValidator, createData);
router.delete("/delete/:type", deleteData);

module.exports = router;