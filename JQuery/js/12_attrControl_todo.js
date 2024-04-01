var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var $banner = null;
var $banner = null;
var speed = 0;
var currentIndex1 = 0;
var currentIndex2 = 0;
// ? 선언부

$(document).ready(function(){
    init();
    // todo. swap 함수를 2번 실행하여 각각 1초,3초로 작동할 수 있게.
    swap($banner1,1000,currentIndex1);
    swap($banner2,3000,currentIndex2);
});

function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}

// todo. 함수 생성은 한번만.
        // (이미지태그, 인터별, 현재번호) - 위에서랑 이름 달라도 안에서만 같으면 상관X
function swap(selector,speed,targetIndex){
    setInterval(function(){
        var imgName = "images/" + logos[targetIndex];
        targetIndex++;
        selector.attr("src",imgName);
        if(targetIndex >= logos.length){
            targetIndex = 0;
        }
    },speed);

}

// ? errCode's :  https://moz.com/learn/seo/http-status-codes
