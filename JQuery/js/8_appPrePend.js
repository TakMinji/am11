// 전역함수 사용 - 난이도가 쉬워짐
var $ex2 = null;
var count = 0;
$(function(){
    $ex2 = $("#ex2");
    $ex2.html("<p>" + count + "- th. paragraph </p>");
    $("#ex2prepend").click(prependCount);
    $("#ex2append").click(appendCount);    
});
function prependCount(){
    count --;
    $ex2.prepend("<p>" + count + "- th. paragraph </p>");
}
function appendCount(){
    count ++;
    $ex2.append("<p>" + count + "- th. paragraph </p>");
}
// ? prpend : 위, 이전으로 옮기는것
// ? append : 정으로 생성하는 것 
// 지금은 잘 안씀 ajax라는 애가 태어나서.
// 서버가 없는 상태에서 안보이는걸 보이게 만들 때는 씀. / 버튼을 누를 때 나머지 다 가져와 할 때.
// ! 권장하지 않는 이유 : 포폴 검수하는 사람들이 '데이터를 자기가 뿌린다는 건가' 하고 오해할 수 있음
// 굳이 사용하게 되면 밑에다가 시뮬레이션 용으로 썼다고 주석으로 적어놓고 쓰는걸로.

// $(window).load(function(){
    
// }) 
// ? ready형제 / 화면 모드가 다 끝났을 때.