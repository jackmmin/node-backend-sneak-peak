"use strict"; // ES 준수하겠다는

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home/index");
});
router.get("/login", (req, res) => {
    res.render("home/login");
});

module.exports = router; // 외부에서 사용하기 위해 내보내기