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




// login과 join시 enter키 입력시 바로 로그인
