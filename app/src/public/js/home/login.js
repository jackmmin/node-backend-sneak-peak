"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");
const registerBtn = document.querySelector("#registerBtn");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        password: password.value
    };
    
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/";
        }else{
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("로그인 중 에러 발생");
    });
}