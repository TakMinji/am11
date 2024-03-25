/* <과제 푼 것 - html파일 따로 보관중>
function containerChange(){
    $("#container").css({
        "width" : "500px",
        "height" : "500px",
        "border" : "1px solid black",
        "margin" : "0 auto",
        "position" : "relative"
    });
}
function circleChange(){
    $("#circle").css({
        "width" : "50px",
        "height" : "50px",
        "background-color" : "black",
        "border-radius" : "25px",
        "position" : "absolute",
        "left" : "0",
        "top" : "0",
        "transition" : "all 0.25s linear"
    });
}

function btnChange(){
    $("#container > #btnMove").css({
        "position" : "absolute",
        "bottom" : "0",
        "left" : "45%"
    });
}
// css 끝


$(document).ready(function(){
    $('#btnMove').click(move);
});

function move(){
    var circle = $('#container #circle');
    var go = window.prompt('0부터 380이하의 숫자만 입력하세요.');
    go = parseInt(go);
    if(go>=0 && go<=380){
        circle.css('left',go);
    }else{
        alert('잘못된 수치입니다.');
    }
    }
*/

/* 선생님 풀이 */
$(document).ready(function(){
    // *case. 1 x Axis 원 움직이기
    $("#btnMoveCircle").click(moveCircle);
    // *case. 2 x,y Axis 원 움직이기 - 구조분리형
    detailMoveCircleExt();
    // todo. 아래 실행구문으로 작동되게 만들기.
    $("#btnDetailMove").click(detailMoveCircle);
    // *case.3 x,y Axis + keyControl.
    keyControl();
});

// *case, 1
function moveCircle(){
    var $circle = $(".circle");
    var xpos = prompt("0부터 380이하의 숫자만 입력하세요");
    // ! prompt -> string 전달.
    xpos = parseInt(xpos);
    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }
}

// todo. 아래 실행구문으로 작동되게 만들기.
function detailMoveCircle(){

}
// *case.2
function detailMoveCircleExt(){
    var $circle = null;
    circleInit();
    // Init을 사용함으로써 null에 $(".circleDetail"); 함수 넣기 성공.
    $("#btnDetailMove").click(circleEvent);
}
function circleInit(){
    $circle = $(".circleDetail");
}
function circleEvent(){
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    // > input:text -> dataType : string.
    /* 
        ? val() - 값 : value -> val. 
        * 1. target.val(); = target의 값을 가져와라.
        * 2. target.val(swap) = target의 값을 swap으로 변경해라.  
    */
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    // console.log("xpos =" + typeof(xpos) + xpos + "/" + "ypos = " + typeof(xpos) + ypos);
    // >> 잘 넘어오는지 확인 완료.
    circleMovCommand(xpos,ypos);
    // 함수 안에서 사용되는 이름은 무조건 똑같아야 함 = xpos
}
function circleMovCommand(xpos,ypos){
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){ // todo. 예외조건 성립시키기
        alert("잘못된 수치입니다. 0 ~ 380이내로 입력하시오.");
    }else{
        // todo. 움직이는 css 함수처리
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}

// doubleEffenct : 기존 선점하고있는 event에 같은 event가 추가되었을 때.

// *case.3
function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    // range = 한번 눌렀을 때 움직일 수 있는 수치
    var currentXpos = 0; //? 현재 위치 정보를 저장할 변수.
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log("입력한 키의 code : " + typeof(e.keyCode) + e.keyCode);

        // keydown -> 키 입력할 때 감지할 함수(눌렸을 때 상황만 감지.)
        // 눌렸다는 상황 e 매개변수로 받는 것. (입력한 key가 들어온 것)
        // * w : 87(Ypos-) 위, d : 68(Xpos+) 아래, s: 83(Ypos+), a: 65(Xpos-)
        switch(e.keyCode){
            case 87:
                currentYpos -= range;
                break;
            case 68:
                currentXpos += range;
                break;
            case 83: 
                currentYpos += range;
                break;
            case 65:
                cureentXpos -= range;
                break;
        }
        // todo. 돌아다니는 원을 frame안에 가둬오기. 
        $circle.css("left",currentXpos);
        $circle.css("top",currentYpos);    
    });  //? compareFunction : 비교함수 - key 자체가 100개가 넘음. - 무엇이 눌린지는 모름
}
