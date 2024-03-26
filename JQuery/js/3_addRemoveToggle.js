$(document).ready(function(){
    // *case.1
    toggleCheck();
    // *case.2
    toggleTodo();
    // *case.3
    tabUI();
});
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false;
    $checkLabel.click(function(){
      checkStatus = !checkStatus;
      console.log(checkStatus);

    // js에서 toggle이라는걸 만들 때 필요한 함수 -> var checkStatus = false;
    // ex) 리모콘 on/off버튼이 toggle / 버튼이 하나인데 값이 교차되어야 하니까 true or false.
        if(checkStatus == true){
            $checkTarget.text("check_box");
        /*
            ? target.text(); : text 불러와. / target.text("blah"); : text를 blah로 교체해.
        */
        }else{
            $checkTarget.text("check_box_outline_black");
        }
    });
}

// todo.
/* 
    * 1. 눈 켜진 상태 text를 찾아야지 -> material에서..
    * 2. type='password' -> 'text' 변경방법 -> target.attr("type","text") = type을 text로 변경해라.
*/
function toggleTodo(){
    var $toggleTarget = $(".material-icons.toggleVisible");
    var $toggleInput = $("#userPW");
    var toggleStatus = false;

    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text("visibility");
            $toggleInput.attr("type","text");
        }else{
            $toggleTarget.text("visibility_off");
            $toggleInput.attr("type","password");
        }
    });
}

function tabUI(){
    $(".tabMenu li").click(function(){
        // 익명함수쓴 것. 분리 가능함
        var activeTab = "#"+$(this).attr("data-tabNumb");
        // console.log(activeTab); 
        // ? this : (event handler) 이벤트가 일어난 당사자를 구하는 것, 클릭 or 휠 등 다 걸리는 것(만능키)
        $(".tabMenu li").removeClass("activated");
        // ? removeClass :  $(".tabMenu li") 얘네 class activated를 제거한다. 
        $(this).addClass("activated");
        $("tabPage").removeClass("activated");
        $(activeTab).addClass("activated");
    });
}



