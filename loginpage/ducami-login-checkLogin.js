const loginForm =document.querySelector('.ducami-login-login-input');
// 아이디, 비밀번호의 값
const currentId = document.getElementsByName('login_id').value;
const currentPassword = document.getElementsByName('login_password').value;
// 비교 후 형식에 맞으면 1, 안 맞으면 0
let loginId =0;
let loginPassword =0;
//비밀번호와 아이디의 정규식
//5 ~ 20 자리 사이
const disId = /^[A-za-z]{5,20}/g;
//8 ~ 15자리 사이, 숫자나 특수문자 하나이상
const disPassword = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;


// 전체의 상태가 어떤지
function checkAllLogin(){
    checkCurrentId();
    checkCurrentPassword();

    if (loginId == 0 || loginPassword == 0){ // 로그인 형식이 안 맞을 때
        loginForm.querySelector('.makeIssue').style.display = 'block';
        return false;
    }
    else{
        loginForm.querySelector('.makeIssue').style.display = 'none';
        return true;
    }

}

// 아이디 검사
function checkCurrentId(){
    console.log(currentId)
    if (disId.test(currentId)){
        loginId = 1;
        console.log("아이디형식에맞음");
    }
    // else{
        // }
}

function checkCurrentPassword(){
    console.log(currentPassword);
    if (disPassword.test(currentPassword)){
        loginPassword = 1;
        console.log("비번형식에맞음");
    }
    // else{
    // }
}
