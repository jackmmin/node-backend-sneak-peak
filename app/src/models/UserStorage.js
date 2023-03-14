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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // [id, password, name]
        const userInfo = usersKeys.reduce((newUser, key) => {
            newUser[key] = users[key][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {success: true};
    }
}

module.exports = UserStorage;