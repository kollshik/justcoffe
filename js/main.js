$(function () {


  $('.menu__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
      responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
        }
      }
    ]  
    
  })
  $('.menu__arrow').on('click',function(e){
    e.preventDefault()
  })
  $('.arrow__left').on('click', function(){
    $('.menu__slider').slick('slickPrev')
  });
  $('.arrow__right').on('click', function(){
    $('.menu__slider').slick('slickNext')
    
  });





  $('.burger').on('click', function(){
    $('.header__nav').toggleClass('header__nav--open')
    $('.header__content').toggleClass('block__closed')
    $('.header').css('height','737px')  
    $('.burger__top-line').toggleClass('burger__top-line--open')
    $('.burger__centr-line').toggleClass('burger__centr-line--open')
    $('.burger__bottom-line').toggleClass('burger__bottom-line--open')
  })

  $('.burger').on('click', function(){
    if ($('.header__nav').hasClass('header__nav--open')){
      $('.burger').css('opacity','0.6')
    }else(
        $('.burger').css('opacity','1')
      )
  })

})