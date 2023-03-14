"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        const {id, password} = await UserStorage.getUserInfo(client.id);
        
        if(id){ // id가 존재하면
            if(id === client.id && password === client.password){ // id가 일치하고 password가 일치하면
                return {success: true};
            } // password가 일치하지 않으면
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        } // id가 존재하지 않으면
        return {success: false, msg: "존재하지 않는 아이디입니다."};
    }
    
    register(){
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;