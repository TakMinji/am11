//todo. end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력하고, prompt에는 몇번 수행 했는가에 대한 "x 번째 입력" 이 표시되야함. 
function sumNumb(){
    var sum = 0;
    var num = 1;
    var count = 0;
    while(num != 0) {
         num = Number(prompt("숫자를 입력해 주세요(0 = 종료)"));
        sum += num;         
        count++;  
        console.log(count, num, sum);     
    }    

    document.write( sum + "번째 입력");
}
// 1 누르면 1번째 입력 2누르면 2번째 입력..end 입력하면 입력이 종료되었습니다.