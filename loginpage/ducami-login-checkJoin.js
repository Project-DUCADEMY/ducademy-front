const joinForm = document.querySelector('.ducami-login-join-input');

// 회원가입 input들의 요소
const JoinCurrentName = document.getElementsByName('join_name')[0];
const JoinCurrentBirthday = document.getElementsByName('join_birthday')[0];
const JoinCurrentEmail = document.getElementsByName('join_email')[0];
const JoinCurrentId = document.getElementsByName('join_id')[0];
const JoinCurrentPw = document.getElementsByName('join_password')[0];
const JoinCurrentPwCheck = document.getElementsByName('join_passwordcheck')[0];

// 비교 후 형식에 맞으면 1, 안 맞으면 0
let joinName = 0;
let joinBirthday =0;
let joinEmail =0;
let joinId =0;
let joinPassWord = 0;
let joinPassWordCheck = 0;

const joinDisName = /^[가-힣]{2,4}$/;
const joinDisBirthday = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/
const joinDisEmail = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/
const joinDisId = /^[a-z]+[a-z0-9]{5,20}$/g;
const joinDisPassword = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,15}$/;


// 전체적인 것들이 형식에 맞는지 비교
function checkAllJoin(){
    if (joinName == 1 && joinBirthday == 1 && joinEmail == 1 && joinId == 1 && joinPassWord == 1){ // 올바른 형식
        return true;
    }
    checkPwCheck();
    checkPw();
    checkId();
    checkEmail();
    checkBirthday();
    checkName();
    return false;
}



//이름형식 비교
function checkName(){
    console.log(JoinCurrentName.value)
    if (joinDisName.test(JoinCurrentName.value)){
        joinName = 1;
        console.log('이름 형식에 맞음')
        document.querySelector('.issue2').style.display = "none";
    }
    else{
        // 포커스 되도록
        joinName = 0;
        document.querySelector('.issue2').style.display = "block";
        JoinCurrentName.focus();
    }
}

// 생일형식 비교
function checkBirthday(){
    console.log(JoinCurrentBirthday.value)
    if (joinDisBirthday.test(JoinCurrentBirthday.value)){
        joinBirthday = 1;
        console.log('생년월일 형식에 맞음')
        document.querySelector('.issue3').style.display = "none";
    }
    else{
        joinBirthday = 0;
        document.querySelector('.issue3').style.display = "block";
        JoinCurrentBirthday.focus
    }
}

// 이메일 형식 비교
function checkEmail(){
    console.log(JoinCurrentEmail.value)
    if (joinDisEmail.test(JoinCurrentEmail.value)){
        joinEmail = 1;
        console.log('이메일 형식에 맞음')
        document.querySelector('.issue4').style.display = "none";
    }
    else{
        joinEmail = 0;
        document.querySelector('.issue4').style.display = "block";
        JoinCurrentEmail.focus();
    }
}

function checkId(){
    console.log(JoinCurrentId.value)
    if (joinDisId.test(JoinCurrentId.value)){
        joinId = 1;
        console.log('아이디 형식에 맞음');
        document.querySelector('.issue5').style.display = "none";
    }
    else{
        joinId = 0;
        document.querySelector('.issue5').style.display = "block";
        JoinCurrentId.focus();
    }
}
    
function checkPw(){
    console.log(JoinCurrentPw.value)
    if (joinDisPassword.test(JoinCurrentPw.value)){
        joinPassWord = 1;
        console.log('비밀번호 형식에 맞음')
        document.querySelector('.issue6').style.display = "none";
    }
    else{
        joinPassWord = 0
        document.querySelector('.issue6').style.display = "block";
        JoinCurrentPw.focus();
    }
}

function checkPwCheck(){
    console.log(JoinCurrentPw.value)
    console.log(JoinCurrentPwCheck.value)
    if (JoinCurrentPw.value == JoinCurrentPwCheck.value && JoinCurrentPwCheck.value != 0){ // 두 개가 같을 때
        joinPassWordCheck = 1;
        document.querySelector('.issue7').style.display = "none";
        console.log("비밀번호 두 개가 같음")
    }
    else{ // 두 개가 다를 때
        joinPassWordCheck = 0;
        document.querySelector('.issue7').style.display = "block";
        JoinCurrentPwCheck.focus();
    }
}


// 틀린거 다시 포커싱
// ~.focus()