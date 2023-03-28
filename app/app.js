"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
// 어떤 os에서 개발하더라도 디 동일하게 등록하고 가져올 수 있도록 하는 모듈
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();
// config 안에 .env 파일path를 임의로 등록할 수도 있다.
dotenv.config();

const accessLogStream = require("./src/config/log");
// 라우팅
const home = require("./src/routes/home");

// 웹 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json()); // bodyParser를 위한 미들 웨어 등록
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않기 때문에 추가
app.use(bodyParser.urlencoded({extended: true})); // bodyParser를 위한 미들 웨어 등록
// app.use(morgan("combined"));
// app.use(morgan("tiny"));
app.use(morgan("dev"));
app.use(morgan("common", {stream: accessLogStream}));

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드

module.exports = app;