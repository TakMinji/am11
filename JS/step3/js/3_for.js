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

// *case.2 반복문 사용의 예 - 자신이 좋아하는 과일 4개를 배열로 배치하고 alert으로 순차출력.
function favorFruit(){
    var array = ["애플망고","딸기","수박","메론"]; //? 순서대로 [0,1,2,3]번 방 만들어짐. 0번방부터 생긴 것.
    for(var i = 0; i < array.length; i++){
        //★(중요) length : 개수 / array(변수이자 배열) 몇개냐 ? / 1,2,3..이거밖에 못함 / 태그 개수 구할 때도 쓸 수 있음(다각도로 활용가능)
        alert(array[i]);
    }
    /* array = dataType : object. 초기화 = [].
     - data가 머무르는 방
     - ex) hotel : roomNumber. = data 역시도 indexNumber 부여받음.
     ["딸기"] - array[0] 배열에 0번 발생.
     ["딸기","메론"] - array[1] 배열에 1 발생.
     = 2개의 data가 각각 0,1번 방 배정.
    */
}

// todo. 지금까지 배웠던 JS 단원명을 배열을 활용해 출력하되, 숫자가 아닌 한글순서로 출력되게.
function arrayFor(){
    var date = ["변수","연산자","형변환","조건문 if","조건문 switch","반복문 while","반복문 for"];
    var swapNumb = ["첫","두","세","네","다섯","여섯","일곱"];
    // 0이라는 숫자일때는 첫번째가 나오면 됨.
    
    for(var i = 0; i < date.length; i++){
        document.write(swapNumb[i]+"번째 내용 ="+date[i]+"<br>");
    }
}

function arrayFor2(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var swapNumb = '';
    for(var i = 0; i < data.length; i++){
        swapNumb = i;
        switch(i){
            case 0:
                swapNumb = '첫';
                break;
            case 1:
                swapNumb = '두';
                break;
            case 2:
                swapNumb = '세';
                break;
            case 3:
                swapNumb = '네';
                break;
            case 4:
                swapNumb = '다섯';
                break;
            case 5:
                swapNumb = '여섯';
                break;
            case 6:
                swapNumb = '일곱';
                break;
            default:
                i = 'x';
                break;
        }
        document.write(swapNumb + "번째 내용 =" + data[i] + '<br>');
    }
} 
