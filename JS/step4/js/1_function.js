/*
    ? function (함수)
    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.
*/

// document.write("안녕? 방가와!"); 
// document.write("안녕? 방가와!");
// document.write("안녕? 방가와!");

// *case. 1 매개변수(Parameter)가 있는 함수 만들기
// ? 매개변수 or 인자, parameter -> paramVal...
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 것을 해결하기 위함.
function helloExp(loopCount){
    var comment = "안녕? 방가와!";
    for(var i = 0; i < loopCount; i++){
        document.write(comment,"<br>");
    }
}

// *case.2 간단한 예 - 두개의 매개변수를 설정
function sumParam(num1,num2){
    var result = num1 + num2;
    alert("두 수의 합은 ?" + result);
}

// *case.3 매개변수의 자리가 없어도 있는것처럼 - arguments(가변인자함수)
// 가- 가능하다 변- 변화가 / 변화가 가능한 함수, 위에서 매개변수는 변할 수가 없어서 불편함이 있지만 가변인자함수는 변하는게 가능해서 해결가능.
// 갯수 제한없고 내가 쓰는만큼 얼마든지 사용가능
/* ? arguments 
   * arguments 객체(object)는 모든 함수 안에서 사용하는 지역 변수.
   * arguments를 이용해서 함수내 인수들을 참조할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
   * 단, argumens는 array와 비슷해보이지만 length 산출 등을 제외하고는 array와 다르다.
   * 필요에 따라 array로 추가 변환하여 사용할 수는 있다.
*/
function sumAll(){
    console.log(typeof(arguments) + " : " + arguments.length);
    var willReturn = 0;
    for(var i = 0; i<arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}

// *case.4 "자신의 이름" 의 나이는 "자신의 나이"세 입니다. 를 arguments를 이용해 출력.
function showInfo(){
    console.log("[0] = " + arguments[0]);
    console.log("[1] = " + arguments[1]);
    alert(arguments[0] + "의 나이는" + arguments[1] + "세 입니다.");
}


/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를 함수 외부로 전달하기 위해 사용하는 출력 부.
    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
        function f(x) { return x * x; }
        alert(f(3));
    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        alert('기존매개변수', '추가매개변수');
        prompt('기존매개변수');
*/