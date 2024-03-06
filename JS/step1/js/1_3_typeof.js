/*
    ? 자료형
    * 1. 숫자형 (Number)
    * 정수형 10진수(일상생활 사용 숫자 소수점x) ex > 33, 44
    * 정수형 16진수(0x ~ 로 시작하여 0~9, A~F 로 모든 숫자 표현) ex> #f00 색상코드
    * 실수형 (소수점을 갖는 숫자) ex > 60.6 
    
    * 2. 문자형 (String)
    * 일상생활 사용 글자 
    >> 다 포함하는 것(숫자형,논리형) / 가장 경계해야하는 유형중 하나임 - 다 문자로 바꿔버리기 때문에
    
    * 3. 논리형 (Boolean)
    * true(참) or false(거짓)
    * true : 맞음, 1, 같음, 진실, 성공
    * false : 틀림, 0, 같지않음, 거짓, 실패
    >> 0과 1로만 이해할 것. 주관적인 생각(성공,실패 X) 
    
    * 4. undefined(초기 상태 - 변수범위에서 갇힘. 퍼블리셔에겐 중요)
    * 미정의된(초기화 되지 않은, 기본초기값), 들어오지 않은 자료형.
    * ex.1 > var data1; alert('data1 =' + data1);
    * ex.2 >
    function exFunc(data1){
        alert("data1 = " + data1);
    }
    exFunc();

    * 5. null(태그나 데이터가 있다가 사라지면 null, undefined랑 범위가 다름. 퍼블리셔에겐 별로 안중요)
    * 아무것도 참조하지 않은 자료형. (객체를 담기위한 변수를 초기화 하는 상태)
    * ex > var data = null;
    
    ! 이외 함수(function), 객체(object) 등이 존재.
*/

// *case. 1 자신이 가장 좋아하는 숫자를 favorNumber 변수에 담아 자료형을 check 해보자.
function testTypeof(){
    var favorNumber = 1;
    console.log(favorNumber + '의 자료형은' + typeof(favorNumber) + '입니다.');
    /* typeof는 자료형 검수해주는 것, log는 결과 보여주는 것 */
}

// *case. 2 자신의 영어이름을 engName 변수에 담아 자료형을 check 해보자.
function testTypeof(){
    var engName = 'Minji';
    console.log(typeof(engName));
}

// *case. 3 현재 로그인 상태가 아니다를 loginStatus 변수에 담아 자료형 check.
function checkStatus(){
    var loginStatus = false;
    console.log("현재 login 상태는" + loginStatus + ' = ' + typeof(loginStatus));
}

// *case.4 변수를 선언만 하고 자료형을 check.
function varData(){
    var test;
    console.log('초기화 하지 않은 변수의 자료형은' + typeof(test) + '입니다.');
}

// ?etc. 1 null check.
function nullCheck(){
    var obj = null;
    console.log("obj에 담긴 값의 자료형은" + typeof(obj) + "입니다.");
}
/* 
undefined는 자연생성(변수를 선언만 했을때 undefined 선언)이 되지만 null은 안됨 
null은 분명히 사용자가 무조건 적어야함. undefined와 null이 초기화되는 방식이 완전 다름
둘 혼용 불가능. 데이터와 관련된 초기타입은 null
*/
