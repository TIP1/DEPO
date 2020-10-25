var MainSlider = new Swiper('.main-slider .swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">0' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.main-slider .swiper-button-next',
      prevEl: '.main-slider .swiper-button-prev',
    },
  });

  var SecondSlider = new Swiper('.second-slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.second-slider .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">0' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.second-slider .swiper-button-next',
      prevEl: '.second-slider .swiper-button-prev',
    },
  });

  var EventSlider = new Swiper('.events-slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.events-slider .swiper-button-next',
      prevEl: '.events-slider .swiper-button-prev',
    },
  });

  // $('.statistics-table-row').addClass('active');
  // $('.statistics-table-wrap-words').addClass('active');

  $(document).ready(function() {
    var windowHeight = $(window).height();
   
    $(document).on('scroll', function() {
        var self = $('.statistics');
        var height = self.offset().top + self.height();
        if ($(document).scrollTop() + windowHeight >= height) {
          $('.statistics-table-row').addClass('active')
          $('.statistics-table-wrap-words').addClass('active')
        }
      });
  });

  var TeamSlider = new Swiper('.team .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.team .swiper-button-next',
      prevEl: '.team .swiper-button-prev',
    },
  });

  var swiper = new Swiper('.gallery .swiper-container', {
    slidesPerView: 1.7,
    spaceBetween: -80,
    centeredSlides: true,
    pagination: {
      el: '.gallery .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">0' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.gallery .swiper-button-next',
      prevEl: '.gallery .swiper-button-prev',
    },
  });

  $(window).on('load resize', function(){
    if($(window).width() <= 750) {
      $('.second-slider .swiper-slide img').attr('src', './img/mob-tomat.png')
      $('.events-san').attr('src', './img/солнышки.png')
      $('.quest-right img').attr('src', './img/quest-mob.png')
    } else {
      $('.second-slider .swiper-slide img').attr('src', './img/second-slider-img.png')
      $('.events-san').attr('src', './img/сан.png')
      $('.quest-right img').attr('src', './img/quest-pict.png')
    }
  })

  var hidemenu = true;

  $('.footer-list.footer-list-2 p').on('click', function() {
    if($(window).width() <= 750) {
      if (hidemenu) {
        $('.footer-list-2-wrap').show(300);
        $('.footer-list.footer-list-2').addClass('active');
        hidemenu = false;
      } else {
        $('.footer-list-2-wrap').hide(300);
        $('.footer-list.footer-list-2').removeClass('active');
        hidemenu = true;
      }
    } 
  })

  $(window).on('load resize', function() {
    if($(window).width() > 750) {
      $('.footer-list-2-wrap').show(1);
    }
  })



  $('#burger-nav').on('click', function(){
    $('.mob-nav-menu-popup').toggleClass('active');
  })