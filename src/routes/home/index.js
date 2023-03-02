"use strict"; // ES 준수하겠다는

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/login", ctrl.login);

module.exports = router; // 외부에서 사용하기 위해 내보내기