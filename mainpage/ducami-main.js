// 채팅 이미지를 hover하면 색변경을 위한 부분,
// 알람에 over돼도 색변경(filter를 사용하기 때문에) 
// 시키기 위해 js에서 전체적으로 처리
const chattingAlarm = document.querySelector('.ducami-main-chatting-alarm');
const chattingImg = document.querySelector('.ducami-main-chatting > img');


chattingImg.addEventListener('mouseover',markupChatting);
chattingAlarm.addEventListener('mouseover',markupChatting);

// 채팅 아이콘을 마크업
function markupChatting(){
    chattingImg.style.filter = "invert(92%) sepia(10%) saturate(1434%) hue-rotate(53deg) brightness(84%) contrast(85%)";
    this.addEventListener('mouseout',markdownChatting);
}
// 채팅 아이콘을 마크다운
function markdownChatting(){
    chattingImg.style.filter = "none";
}




// 메뉴의 밑줄 생기게 하기
const underLine = document.querySelector('.ducami-main-underline');
const menu = document.querySelectorAll('.menu');

// 리스트의 가각의 요소들을 가지고 반복
menu.forEach((i) => i.addEventListener("mouseover", (e) => makeUnderLine(e)))

function makeUnderLine(e) {
    // 아이템의 넓이만큼
    underLine.style.left = e.currentTarget.offsetLeft + "px";
    underLine.style.width = e.currentTarget.offsetWidth + "px";
    // underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
    underLine.style.top = "115px";  
}