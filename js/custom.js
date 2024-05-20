(function(){
  const mainSlides = document.querySelectorAll('.main-swiper .swiper-slide');
  const thumbSlides = document.querySelectorAll('.thumb-swiper .swiper-slide');
  const mainSwiper = new Swiper('.main-swiper',{ 
    loop:true,
    loopedSlides:mainSlides.length,
    effect:'fade',    
    fadeEffect:{
      crossFade:true
    }
  });
  const thumbSwiper = new Swiper('.thumb-swiper',{ 
    slidesPerView:'auto',
    spaceBetween:20,
    centeredSlides:true,
    loop:true,
    loopedSlides:thumbSlides.length,
    slideToClickedSlide:true,
    controller:{
      control: mainSwiper
    }
  });
  mainSwiper.on('slideChangeTransitionEnd',()=>{
    const mainModulo = mainSwiper.activeIndex%mainSlides.length;
    const thumbModulo = thumbSwiper.activeIndex%thumbSlides.length;
    if( mainModulo != thumbModulo){
      thumbSwiper.slideToLoop(mainModulo);
    }
  });
})();

// サムネイル
const sliderThumbnail = new Swiper(".slider-thumbnail", {
  slidesPerView: 3, // サムネイルの枚数
});
// スライダー
const slider = new Swiper(".slider", {
  loop: true,
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: sliderThumbnail,
  },
});


//（junpei）
// // Swiperライブラリのスクリプトが正しくロードされた後に実行されるようにします。
// document.addEventListener('DOMContentLoaded', function() {
//   // サムネイル
//   const sliderThumbnail = new Swiper(".slider-thumbnail", {
//     slidesPerView: 3, // サムネイルの枚数
//   });

//   // スライダー
//   const slider = new Swiper(".slider", {
//     loop: true,
//     // 前後の矢印
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     thumbs: {
//       swiper: sliderThumbnail,
//     },
//   });
// });
