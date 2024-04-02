$(document).ready(function(){
    gallery2(0,200,200);
    // ? 초기 set - 열수,너비,높이
    function gallery2(count, imgWidth, imgHeight){
        arrangeImages(count, imgWidth, imgHeight);
    }
});

    // todo. 1열 버튼 click시 해당 열로 배치.
    $(".1way").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        var imgHeight = img.height();
        var columnCount = parseInt($(this).attr('class').charAt(0)); // 버튼의 클래스에서 열의 수 추출
        var imgWidth = 1000 / columnCount; // 이미지 너비 계산
        var imgHeight = imgWidth; // 이미지 높이는 너비와 같도록 설정
        gallery2(columnCount, imgWidth, imgHeight); // 이미지 배치 함수 호출
    });
    // todo. 2열 버튼 click시 해당 열로 배치.
    // todo. 3열 버튼 click시 해당 열로 배치.
    // todo. 4열 버튼 click시 해당 열로 배치.
    // todo. 5열 버튼 click시 해당 열로 배치.
    // todo. 6열 버튼 click시 해당 열로 배치.
    // todo. 7열 버튼 click시 해당 열로 배치.
    // todo. 8열 버튼 click시 해당 열로 배치.
    // todo. 9열 버튼 click시 해당 열로 배치.
    // todo. 10열 버튼 click시 해당 열로 배치.

    // ! replace - JQuery 함수 검색해서 한번의 호출로 n개의 버튼 소화하기.

 function gallery2(columnCount, imgWidth, imgHeight) {
        var $imgs = $('#imgContainer img');
        var totalImgs = $imgs.length;
        var currentRow = 0;
        var currentColumn = 0;

        $imgs.each(function(index) {
            $(this).css({
                'left': currentColumn * imgWidth,
                'top': currentRow * imgHeight,
                'width': imgWidth,
                'height': imgHeight
            });
            
            currentColumn++;
            if (currentColumn >= columnCount) {
                currentColumn = 0;
                currentRow++;
            }
        });
}
// gallery2 -> 이 함수는 한개여야함.
// 버튼을 클릭했을 때 해당 열과 사이즈만 정확히 전달하면 됨.