const express = require("express");
const router = express.Router();

const { storeUser } = require('../controller/usersController');

router.post("/register", storeUser);

module.exports = router;