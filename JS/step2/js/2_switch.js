/*
    ? switch
    switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
    ( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// *case.1 문법 - 홀,짝 구분
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라'));
    switch (input % 2) {
        case 0:
            alert('짝수입니다.');
            break;
        case 1:
            alert('홀수입니다.');
            break;
        default:
            alert('숫자가 아닙니다.');
            break;
        }
}
    // if는 esle, else if..이지만 switch는 if처럼 선행,후행 다중으로 쓰지않고 switch 하나임.
    // case가 걸리게끔 해야하는데 case를 걸리게 하는 애가 key값.
    // switch는 case by case로 값을 찾아내서 default가 있을 수도, 없을 수도 있음.
    // 맞는 케이스가 나올 때까지 다 찍으면서 내려오기때문에 break를 무조건 다 달고다님.

    // break가 무조건 switch 안에서만 쓰는 애는 아님(서로의 조건 관계가 맞을뿐). 
    // >> 만나는 즉시 자기가 소속된 logic(switch안에 들어있으면 switch, if안에 있으면 if)을 중단시킴. 


//  *case.2 Lotto과제를 switch로 변경
function lotto(){
    var numbValue = prompt("입력하실 번호는?");
    switch (numbValue) {
        case "1":
            alert("1등 15억!");
            break;
        case "2":
            alert("2등 5천만원!");
            break;
        case "3":
            alert("3등 3백만원!");
            break;
        default:
            alert("낙첨되었습니다.");
            break;
    }
}