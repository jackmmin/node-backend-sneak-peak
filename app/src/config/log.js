const fs = require("fs");
const rfs = require("rotating-file-stream");
const appRoot = require("app-root-path");

// const accessLogStream = fs.createWriteStream(
//     `${appRoot}/log/access.log`,
//     { flags: 'a' }
// );

const accessLogStream = rfs.createStream(
    `${appRoot}/${process.env.LOG_DIR}`, {
        interval: "1d",
        size: "50M"
    }
);


module.exports = accessLogStream;