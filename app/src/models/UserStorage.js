"use strict";

const db = require("../config/db");

class UserStorage{
    // static은 따로 new로 생성하지 않아도 접근할 수 있도록 해준다.
    // 하지만 그렇게 되면 바로 데이터에 접근할 수 있기 때문에 #(은닉화)을 사용하여 undefined로 출력되게 하고
    // 따로 출력함수를 만들어 은닉화된 데이터를 사용할 수 있게 해준다.
    // 개발 문화로, 은닉화를 사용하는 함수를 가장 위에 위치하도록 하는 게 좋다.

    // static #getUsers(data, isAll, fields) {
    //     const users = JSON.parse(data);
    //     if (isAll) return users;

    //     const newUsers = fields.reduce((newUsers, field) => {
    //         if(users.hasOwnProperty(field)){
    //             newUsers[field] = users[field];
    //         }
    //         return newUsers;
    //     }, {});
    //     return newUsers;
    // }
    
    // 은닉화(#)된 데이터에 접근하기 위한 함수
    // static getUsers(isAll, ...fields){
    // }
    
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // [id, password, name]
        const userInfo = usersKeys.reduce((newUser, key) => {
            newUser[key] = users[key][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    // 사용자 정보 가져오기
    static getUserInfo(id){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM abc WHERE id = ?;";
            db.query(query, [id],  (err, data) => {
                if(err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }

    // 사용자 정보 저장( 회원가입 )
    static async save(userInfo){
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO abc(id, name, password) VALUES(?, ?, ?);";
            db.query(
                query,
                [userInfo.id, userInfo.name, userInfo.password],
                (err) => {
                    if(err) reject(`${err}`);
                    else resolve({success: true});
                }
            );
        });
    }
}

module.exports = UserStorage;