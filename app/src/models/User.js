"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }

    // 로그인
    async login(){
        const client = this.body;
        try{
            const user = await UserStorage.getUserInfo(client.id);
            
            if(user){ // id가 존재하면
                if(user.id === client.id && user.password === client.password){ // id가 일치하고 password가 일치하면
                    return {success: true};
                } // password가 일치하지 않으면
                return {success: false, msg: "비밀번호가 틀렸습니다."};
            } // id가 존재하지 않으면
            return {success: false, msg: "존재하지 않는 아이디입니다."};
        } catch(err){
            return {success: false, err};
        }
    }
    
    // 회원가입
    async register(){
        const client = this.body;

        try{
            const response = await UserStorage.save(client);
            return response;
        } catch(err){
            return {success: false, err};
        }
    }
}

module.exports = User;