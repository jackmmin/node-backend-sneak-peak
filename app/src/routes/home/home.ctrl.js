"use strict";

const show = {
    hello: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => {
        console.log(req.body);
    },
}

module.exports = {
    show,
    process
};