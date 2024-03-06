/*
	? 변수란
	데이터를 저장 하는 장소, 데이터를 읽고 쓸 수 있는 장소.
    >> 같은 변수를 여러번 생성하면 안됨. 컴퓨터는 마지막 변수만 기억함.
        ★ 즉 용도에 따른 변수는 하나만 생성해야함.

	실무의 예
	1. 로그인 상태정보를 저장.
	2. 사용자가 선택한 항목을 저장.
	3. admin 으로 관리하는 항목을 저장. (메뉴 등)
	4. 게임등에서 기록되는 레코드나 데이터(에너지 등)를 저장.
	5. 쇼핑몰 장바구니의 상품목록 등 저장.
	6. 게시판 목록 등.
	
	주의사항
	1. 숫자로 시작 할 수 없다. ( 에러가 나는 브라우저가 있다. )
	2. 대,소문자를 구분한다. ( 전혀 다른 변수가 된다. )
	3. 변수는 대문자가 아닌 소문자로 시작한다. ( 암묵적인 룰 )
	4. 변하지 않는 환경 변수(상수변수 : 관리자아이디 등)는 모두 대문자 (ex > DB_NAME)로 정하여, 3번의 암묵적인 룰을 이용. 변경이 안되도록 회피한다.
		(java 등은 상수변수를 문법적으로 잠궈버리지만 js는 그렇지 않다.)
	5. js에서 이미 정의된 예약어 사용 금지.
		(break, case, catch, continue, default, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with)
	

    변수의 종류
    1. 전역변수 - 밑에 잔뜩 있는 것들. 전체 영역에서 사용 가능 한 변수.
    2. 지역변수 - 정해진 영역 내에서만 사용 할 수 있는 변수.
    var globalVal = "전역변수";
    window.onload=function(){
        var localVal = "지역변수";
        alert(localVal);
    }
    function func1(){
        var localVal = "함수1번내 지역변수";
        alert(localVal);
    }
    function func2(){
        var globalVal = "함수2번내 지역변수";
        alert(globalVal);
    }
    3. 매개변수 - 함수 외부에서 내부로 데이터를 전달할 때, 사용 하는 변수.
    var globalVal = "전역변수";
    window.onload=function(){
        var localVal = "지역변수";
        func1(100,200);
    }
    function func1(num1, num2){
        var localVal = "지역변수";
        document.write("매개변수 num1="+num1+", num2 ="+num2);
    }

-- 여기부터는 프론트엔드 변수 >> 
    4. 멤버변수 - 클래스 내부에 만들어 지며,
    객체에서 사용하는 정보를 담는 변수.
    function Markclass(){
    	this.name = "멤버변수";
    }
    Markclass.prototype.showName=function(){
        document.write("name=",this.name);
    }
    var objClass = new Markclass();
    objClass.showName();
*/

// 만들기 var 변수이름 = 값.

// *case.1 기본 생성
var cliName = "Mark";
// "" << 글자이니까 js에게 아무 의미 부여하지말라고 하는 것.
var age = 44;
// 숫자는 숫자일뿐이라 "" 따로 안붙여도 상관없음

// var cliName; -> 변수선언 / ex.아무것도 없는 빈 컵 만든 것 (undefined 미정의된)
// var cliName = "Mark"; -> 초기화
// F12 Console창에서 cliName = "히비스커스" 선언하면 Mark는 나가고 히비스커스가 들어와서 작동
// 새로고침하면 다시 Mark가 돌아옴 (저장을 안했으니까. 컴퓨터는 복합적인 사고-멀티 불가능)
// 저장하는법(F12 Console창에서 명령) ex. age = age+10 / 새로고침하면 다시 돌아옴

// *case.2 다중 생성
var radius=10, pi = 3.14159265;

// *case.3 변수의 특성
var cup = 'Coffee';
cup = 'Green Tea';
cup = 'Water';
/*
    var cup = 'Coffee';
    var cup = 'Green Tea';
    var cup = 'Water';
    ? before : 컵 세잔을 놓고 각각 다른 음료를 담았으나, 마지막 컵만 사용.
    ? after : 컵 한잔에 coffee를 담았다가 버리고 Green Tea를 담았다가 버리고 Water를 담았다.
*/

// *case.4 연산자 사용시
var numValue = 10;
numValue = numValue+20; /* numValue+20; 이렇게만 입력하면 처리만 하고 출력을 안시켜서 안뜸 */
/* = 한개만 쓰면 대입하라는 의미. == 두개가 붙어야 같다는 의미 / 정규식에서는 이런의미를 갖고있지만, 특정환경에 따라 달라질 수 있음 */

// *case.5 현재 자신의 나이를 cliAge변수에 담고 출력한 후, 2-년 뒤 나이 역시 출력해보기.
var cliAge = 26;
console.log("나의 현재 나이는" + cliAge + "세 이고,");
cliAge = cliAge + 20;
console.log("20년 뒤에는" + cliAge + "세 입니다.");