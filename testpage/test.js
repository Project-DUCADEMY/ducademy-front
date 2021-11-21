'use strict';

//마우스의 이벤트에따라 login,join을 보여주고 숨기는 기능
const loginarea = document.querySelectorAll('.ducami-js-left');
const joinarea = document.querySelectorAll('.ducami-js-right');
const loginComment = document.querySelector('.ducami-login-comment-login');
const joinComment = document.querySelector('.ducami-login-comment-join');
const focusId = document.querySelector('#ducami-login-login-id');
const focusPw = document.querySelector('#ducami-login-join-name');

function blindLogin(){
    document.querySelector('.ducami-login-login').style.display = "none";
}
function blindJoin(){
    document.querySelector('.ducami-login-join').style.display = "none";
}

function CABLogin1(){
    for(let i=0;i<loginarea.length;i++){
        loginarea[i].addEventListener("mouseout",blindLogin);
    }
}
function CABJoin1(){
    for (let i =0;i<joinarea.length;i++){
        joinarea[i].addEventListener("mouseout",blindJoin);
    }
}

function CABLogin2(){
    loginComment.addEventListener("mouseout",blindLogin);
}
function CABJoin2(){
    joinComment.addEventListener("mouseout",blindJoin);
}

function showLogin(){
    document.querySelector('.ducami-login-login').style.display = "block";
    CABLogin1();
}
function showJoin(){
    document.querySelector('.ducami-login-join').style.display = "block";
    CABJoin1();
}

function clickLogin(){
    document.querySelector('.ducami-login-login').style.display = "block";
    // 커서 움직이기
    focusId.focus();
    CABLogin2();
}
function clickJoin(){
    document.querySelector('.ducami-login-join').style.display = "block";
    focusPw.focus();
    CABJoin2();
}

function getEvent(){
    for(let i = 0; i< loginarea.length; i++){
        loginarea[i].addEventListener("mouseover", showLogin)
    }
    for(let i = 0;i<joinarea.length;i++){
        joinarea[i].addEventListener("mouseover",showJoin);
    }

    
    loginComment.addEventListener("click",clickLogin)
    joinComment.addEventListener("click",clickJoin)
}

function init(){
    getEvent();
}

init();


// 로그인 비밀번호 보이게, 안보이게
// type을 알아내기 위한 비밀번호 input태그
const passwordInput =document.querySelectorAll(".ducami-login-nextEye");
// 비밀번호 input보이게,안보이게하는 버튼
const showPassword = document.querySelectorAll(".ducami-login-eye");

for(let i=0;i<passwordInput.length;i++){
showPassword[i].addEventListener("click", changeInputState);
// showPassword.onclick = changeInputState;
}

function changeInputState(){
    // 글씨의 타입을 바꿔줌, 사진변경
    if (this.parentNode.children[0].getAttribute('type') == 'password'){
        this.parentNode.children[0].setAttribute('type', 'text');
    // if (this.previousSibling.getAttribute('type') == 'password'){
        
        // console.log(this.parentNode.children[0])

        this.children[0].src = "../imgs/eye.png";
        //스타일 변경
        this.children[0].style.height = "115%";
        this.children[0].style.weight = "115%";
    }
    else{ // text -> password = closeeye
        this.parentNode.children[0].setAttribute('type','password');
        // 현제를 기준으로 파일 위치를 설정해서 파일이 변경되면 변경해야됨!
        this.children[0].src = "../imgs/closeeye.png";
        this.children[0].style.height = "70%";
        this.children[0].style.weight = "70%";
        //스타일 변경
    }
}


// // login과 join시 enter키 입력시 바로 로그인
// const loginInputs= document.querySelectorAll(".ducami-login-login-input input");
// const joinInputs= document.querySelectorAll(".ducami-login-join-input input");
// const certifiedInput = document.querySelector("#ducami-login-join-certified");


// // login input들 enter 받기
// function makeLogin(){
//     if (this.keyCode == 13){
//         console.log("됨");
//     }
//     console.log("hi");
// }

// for (let i = 0;i<loginInputs.length;i++){
//     loginInputs[i].addEventListener("onkeyup",makeLogin);
// }
// // join input들 enter 받기

// //인증은 enter일 때 인증되도록 하기



// 비밀번호 유효성 검사





// 비밀번호 검사



