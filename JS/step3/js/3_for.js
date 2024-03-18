/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

    *루프(★중요)
    1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    3. 참일경우 이하 구문 실행 > 4. 증감부 실행 > 5. 2단계

for (var index = 0;  index++) {
    console.log(index);
    
    < for loof 순서 > 
    1) var index(변수선언) = 0(변수초기화)
    2) index에 0이 들어오고 10이랑 비교하게됨 -> index < 10;
    3) 결과는 참이 되기때문에 옆으로 안가고 밑으로 들어감 -> console.log(index);
    4) 더이상 실행할게 없으면 index++) <- 얘를 올림
    5) index가 10이 되는 시점이 오면 true가 아님 false가 떨어지기때문에 3번으로 못감
    >> 그럼 자동으로 break(만나는 즉시 해당 logic 중단) 걸림.
}
*/

// ! 단일 for
// *case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i=1; i<=10; i++){
    document.write(i + '.' + userName +'<br>');
    }
    // i는 처음 1로 선언되고, i<=10에 들어오면서 true선언. i++를 통해서 증감 되서 true 선언되면서 반복될 것.
    // i가 11이 되었을 때 ture가 아닌 false가 되면서 break.
}

// *todo.1 이름을 1,000번 출력할 예정인데 이 중 홀수 번째(1,3,5,7,9...)만 나오게.
function namePrint500(){
    var myname = "Mark";
    for(var i=1; i<=1000; i+=2){
        document.write(i+'.'+myname+'<br>');
    }
}

// *todo.2 1-10까지 출력되는 반복문을 직접 짜보자. - 최소 3개이상.
function answer1(){
    for(var i=1; i<=10; i++){
        document.write(i +"<br>");
    }
}
function answer2(){
    for(var i=0; i<10; i++){
    document.write((i+1) +"<br>");
    }
}
function answer3(){
    for(var i=100; i<110; i++){
    document.write((i-99) +"<br>");
    }
}
function answer4(){
    for(var i=10; i>=1; i--){
    document.write((11-i)+"<br>");
    }
}
function answer5(){
    for(var i = 1; i<=10; i+=2){
    document.write(i +"<br>");
    document.write((i+1)+"<br>");
    }
}