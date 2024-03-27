$(document).ready(function(){
    // * case.1
    imgAlignHori();
});
function imgAlignHori(){
    var img = $(".imgContainer img")
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        // width 구해오라고 시킴.

        for (var i = 0; i < imgLength; i++){
            var image = img.eq(i); // ?eq(); -> nth 대상구하기.
            xpos = i * imgWidth;
            image.css("left",xpos);
        }
    })
}

// todo
// x의 패턴은 0,1,2 y의 3배수 패턴 3,6,9
function img

