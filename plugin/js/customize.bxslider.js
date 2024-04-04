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
      adaptiveHeight: true,
      // 안에 들어가있는 img의 비율이 다를 때 프레임 능동적으로 조절해주는 것
      adaptiveHeightSpeed: 750,
      video: true,
      easing: 'ease-in-out',
      captions: true,
      responsive : true, 

      // *pager - indicator
      pager: true, //? default: true. pager 켜기/끄기
      pagerType: 'full', //? default: full.(circle). short: count로 변경
      //? pagerShortSeparator: '/'  default: / -> . 식별자변경.
      pagerSelector: '.newPager', // ? default: ''. 공간 생성 및 class 부여 하면 pager 뼈대제공.
      // pagerCustom: '.customPager',
      
      // *Controler
      controls: true,
      // nextSelector: '.btn_next',
      // prevSelector: '.btn_prev',
      // nextText: '다음',
      // prevText: '이전'
      

      // *auto
      auto: true, //? default: false. slide 자동전환 켜기. false로 설정시 autoControls에서 작동가능.
      autoControls: true, //? default: false. 시각장애인들을 배려 하는것.
      autoControlsSelector: '.newAutoControls', //? auto controler 뼈대 제공.
      startText: '시작', //? 생성된 뼈대 안에 text 변경
      stopText: '중지',
      autoStart: true, //? default: true. (false: autoControls로 시작)
      autoDelay: 1500,
      pause: 4000,
      autoHover: true,
      stopAutoOnClick: true,
      autoControlsCombine: true,

      // * carousel
      maxSlides: 2, //? default: 1. 최대 노출 슬라이드 장수.
      minSlides: 1, //? default: 1. 최소 노출 슬라이드 장수.
      slideWidth: 640,
      slideMargin: 20,
      moveSlides: 1, // ? 전환시 이동할 carousel content 수
      shirinkItems: true

    });
  });