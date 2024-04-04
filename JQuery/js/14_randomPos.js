$(document).ready(function() {
    var score = 0;
    var timer;

    
$('#circle').click(function() {
    score++;
    $('#score').text(score);
});

$('#btn_start').click(function() {
    score = 0;
    $('#score').text(score);
    startGame();
});

function startGame() {
    
    setRandomPosition();
    timer = setTimeout(endGame, 5000);
}

function endGame() {
    clearTimeout(timer);
    alert('게임 종료! 당신의 점수는 ' + score + '입니다.');
    
    var restart = confirm('다시 시작하시겠습니까?');
        if (restart) {
            startGame();
        } else {
            $('#circle').css({left: '100px', top: '100px'});
        }
    }
});