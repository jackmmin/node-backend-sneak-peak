"use strict";

class UserStorage{
    // static은 따로 new로 생성하지 않아도 접근할 수 있도록 해준다.
    // 하지만 그렇게 되면 바로 데이터에 접근할 수 있기 때문에 #(은닉화)을 사용하여 undefined로 출력되게 하고
    // 따로 출력함수를 만들어 은닉화된 데이터를 사용할 수 있게 해준다.
    static #users = { // #은 은닉화를 의미.
        id: ["jongmin", "sungjin", "bumyoung"],
        password: ["1234", "1234", "123456"],
        name: ["종민", "성진", "범영"]
    }

    // 은닉화된 데이터에 접근하기 위한 함수
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;