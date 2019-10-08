const express = require("express");
const { testValidator} = require("../validator");
const { createData, fetchAll, deleteData } = require("../controller");

const router = express.Router();

router.post( "/create", testValidator, createData );
router.get( "/test", fetchAll );
router.delete("/delete/:type", deleteData);

module.exports = router;