"use strict";

const app = require("../app");
const logger = require("../src/config/logger");
// process.env 을 사용하면 현재 어플리케이션의 .env 파일로 접근이 가능하다.
// process.env 에서 PORT를 찾으면 그 값을, 없으면 3000을 대입
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});