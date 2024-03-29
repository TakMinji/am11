//  ? setInterval(function,interval);
var $circle = null;
var railWidth = 0;
var runStop = 10;
var timerID = 0; // ? setInterval을 담을 변수.

$(document).ready(function(){
    init();
    initEvent();
});
function init(){
    $circle = $("#circle");
    railWidth = $("#rail").width();
}
function initEvent(){
    $("#btn_start").click(moveStart);
    $("#btn_stop").click(moveStop);
}
function moveStart(){
    if(timerID == 0){
        timerID = setInterval(moveCircle,1); 
    }
}
function moveCircle(){
    var xpos = $circle.position().left; // ? 현재 position left 구하기.- js에선 left,top 기준으로만 함 bottom,right X
    xpos += runStop;
    $circle.css({
        left : xpos
    });
    // todo. 집나간 원 잡아오기 - 오른쪽으로 가다가? rail 끝에 위치하면 반대로- 반대편 끝에 위치하면? 또 반대로.
    if(xpos >= railWidth || xpos <= 0){
        runStop *= -1;
    }
}
function moveStop(){
    clearInterval(timerID); // ? float: left; -> clear: left;
    timerID = 0;
}
// 이미 실행되서 돌아가고있는 함수를 가져올 수는 없음
// 그러나 변수는 어느 함수든지 다 가져올 수 있음.