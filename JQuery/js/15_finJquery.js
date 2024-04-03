var $fishList = null;
var timerID = -1;
var $info = null;
var goalLine = 0;
var $fishWidth = 0;

$(function(){
    init();
    fishStarPosition();
    initEvent();
});

function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    goalLine = $("#bar").position().left - $fishWidth;
    console.log("1. 대상선언완료.");
}

function fishStarPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left : 0,
            top: 100 + (i * 150)
        });
    }
    console.log("2. 초기위치설정완료.");
}
function initEvent(){
    $("#start").click(startGame);
}
function startGame(){
    if(timerID == -1){
        timerID - setInterval(function(){
            updateFishPosition(); // ? 물고기 움직임
            displayFishPositionInfo(); // ? 움직인 위치 표시
            checkGoalFish(); // ? 결승선 도달 감지
        },200);
        console.log("3. 게임 정상 시작.");
    }
}
function updateFishPosition(){
    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*30);
        // 30까지의 random을 뽑아내는 공식
        var newLeft = $fish.position().left + step;
        $fish.css("left", newLeft);
    }
    console.log("4. 물고기 움직임 정상");
}
function displayFishPositionInfo(){
    var info ="";
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i + "번 물고기 : " + $fish.position().left + "px <br>";
    }
    $info.html(info);
    console.log("5. 물고기 위치 표시 정상");
}
function checkGoalFish(){
    var winnerList = [];
    for(var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                index: (i), position: fishCurrentPosition
            });
            // winnerList - 빈배열에 / push - 밀어넣는다.
            // 저장함수 : push(서버에 밀어넣는다.서버가 없어도 쓸 수 있음) 
            // pull(데이터를 당긴다.서버가 있어야만 쓸 수 있음)
            console.log("6.  데이터 저장 성공");
        }
    }
    if(winnerList.length>0){
        winnerList.sort(function(a,b){
            return b.position - a.position // ? position 값 기준 내림차순 정렬. -> 0번방에 가장 큰 값이 들어감.
        }); // ? 비교함수(comparefunction)를 인자로 활용하는 정렬함수.
        console.log("7. 우승 물고기 선별 완료.");
        endGame();
        alert("우승!" + winnerList[0].index+"번 물고기!");
    }
}
function endGame(){
    clearInterval(timerID);
    timerID = -1;
    console.log("8. 게임종료.");
}