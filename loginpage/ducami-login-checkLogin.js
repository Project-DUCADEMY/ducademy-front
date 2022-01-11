const loginForm =document.querySelector('.ducami-login-login-input');

// 아이디, 비밀번호의 값
const loginCurrentId = document.getElementsByName('login_id')[0];
const loginCurrentPassword = document.getElementsByName('login_password')[0];

// 비교 후 형식에 맞으면 1, 안 맞으면 0
let loginId =0;
let loginPassword =0;

//비밀번호와 아이디의 정규식
//5 ~ 20 자리 사이, 시작은 문자로
const loginDisId =  /^[a-z]+[a-z0-9]{5,20}$/g;
//8 ~ 15자리 사이, 숫자나 특수문자 하나이상
const loginDisPassword = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,15}$/;


// 전체의 상태가 어떤지
function checkAllLogin(){
    // 비교 함수 실행
    checkCurrentId();
    checkCurrentPassword();
    // 로그인은 한 번에 issue를 알려주기 때문에 한번에 출력
    if (loginId == 1 && loginPassword == 1){ // 로그인 형식에 맞을 때
        document.querySelector('.issue1').style.display = 'none';
        return true;
    }
    else{
        document.querySelector('.issue1').style.display = 'block';
        return false; 
    }
}

// 아이디 검사
function checkCurrentId(){
    console.log(loginCurrentId.value)
    if (loginDisId.test(loginCurrentId.value)){
        loginId = 1;
        console.log("아이디형식에맞음");
    }
    else{
        loginId = 0;
    }
}

function checkCurrentPassword(){
    console.log(loginCurrentPassword.value);
    if (loginDisPassword.test(loginCurrentPassword.value)){
        loginPassword = 1;
        console.log("비번형식에맞음");
    }
    else{
        loginPassword = 0;
    }
}
