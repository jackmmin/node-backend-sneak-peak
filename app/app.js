"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 웹 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json()); // bodyParser를 위한 미들 웨어 등록
app.use(bodyParser.urlencoded({extended: true})); // bodyParser를 위한 미들 웨어 등록

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드

module.exports = app;