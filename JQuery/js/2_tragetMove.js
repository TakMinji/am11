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