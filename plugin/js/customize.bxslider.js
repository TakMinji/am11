$(document).ready(function(){
    $('.bxSlider').bxSlider({
      mode: 'horizontal',
      speed: 750,
      ticker: false, 
      tickerHover: false,
      //  speed, ticker, tickerHover 밀접한 관계

      // *startSlide, randomStart 충돌.
      startSlide: 0,
      randomStart: false,

      // *infiniteLoop, hideControlOnEnd 충돌.
      infiniteLoop: true,
      hideControlOnEnd: false,

      // *adaptiveHeight
      adaptiveHeight: true
      // 안에 들어가있는 img의 비율이 다를 때 프레임 능동적으로 조절해주는 것
      
    });
  });