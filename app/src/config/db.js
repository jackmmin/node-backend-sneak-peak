const mysql = require("mysql");

// process.env는 nodejs의 시스템 정보 관련으로 약속되어 있다.
// 따라서 app의 root 폴더에 .env 파일을 만들면 process.env로 접근할 수 있다.
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect();

module.exports = db;