"use strict";

const app = require("../app");
// process.env 을 사용하면 현재 어플리케이션의 .env 파일로 접근이 가능하다.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
});