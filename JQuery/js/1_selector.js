$(document).ready(function(){
        // .ready JQuery함수 - 화면이 브라우저에 출력됬을 때 이 안에 있는 익명함수(function()를 실행하는 것
    
    // ! ▼ 잘못된 방식 - 실행되는 조건이 없이 바로 실행됨
    // ? JQuery - css selector 모두 사용 가능.
    var $divs = $("div");
    // '$가 붙어있으면 JQurery 변수'라는 조건을 선생님께서 그냥 별도로 만든 것. 안써도 무방.
    $divs.css("color","red");
    // ? propName : propValue; ex> font-size : 14px;

    // *case.2
    $("#btnCheck").click(sayHello);

    // *case.3
    $("#btnAddBorder").click(addBorder);

    // todo
    $("#btnTextChange").click(addAll);
});
// *case.2
function sayHello(){
    alert('hello');
}

// *case.3
function addBorder(){
    $("#panel").css("border","5px solid black");
    // border 관련 넣기 css처럼 ) width style color 순서로
}

// todo.
function addAll(){
    // $("#panel2").css("font-size","25px");
    // $("#panel2").css("color","green");
    // $("#panel2").css("font-weight","bold");

    // ? 적용 대상의 범위가 넓은 함수일 경우에는 object type 지원.
    $("#panel2").css({
        "font-size" : "25px", "color" : "green", "font-weight" : "bold"
        // css 문법과는 다르게 "" 감싸주기 / ,(콤마) 사용 / 마지막에 끝날때 구분해주는 ,(콤마) 쓰면 안됨
    });
}

// todo. 움직이기
// (if문(prompt)으로 움직이기 박스사이즈, 원의 사이즈도 구해야함(css position,transition 사용)
function move(){
    
}