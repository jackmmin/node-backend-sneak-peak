"use strict"; // ES 준수하겠다는

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.show.hello);
router.get("/login", ctrl.show.login);
router.get("/register", ctrl.show.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router; // 외부에서 사용하기 위해 내보내기