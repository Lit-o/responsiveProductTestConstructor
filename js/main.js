

$( document ).ready(function() {


// скролл к форме
  // $("main").on("click","a", function (event) {
  //   event.preventDefault();

  //   var id  = $(this).attr('href'),

  //       top = $(id).offset().top;

  //   $('body,html').animate({scrollTop: top}, 1200);
  //   // $('#username-2').focus();
  // });

   $('.reviews__slick').slick({
      // autoplay: true,
      autoplaySpeed: 2700,
      speed: 300,
      centerMode: true,
      centerPadding: '0px',
      dots: true,
      arrow: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

   $('.reviews__slick-2').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 600,
      centerMode: true,
      centerPadding: '0px',
      dots: true,
      arrow: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

  //  var o = $('#old-prise-1').find('span').text();

  // var n = $('#new-prise-1').find('span').text();

  // var e = o - n;

  // // console.log(e);

  // $('.eco-price').html(e);


  $('.slider-for').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,

  });


   setTimeout(function() {
     $('.wellcome__button-desc').html('Товар по акции: 7 наборов');
  }, 7000);

   setTimeout(function() {
     $('.wellcome__button-desc').html('Товар по акции: 6 наборов');
  }, 14000);

   setTimeout(function() {
     $('.wellcome__button-desc').html('Товар по акции: 5 наборов');
  }, 19000);

   setTimeout(function() { 
     $('.wellcome__button-desc').html('Товар по акции: 4 набора');
  }, 26000);



 // Модальное окно
  var modal = document.getElementById("myModal");
  var btn = $('.myBtn');
  var span = document.getElementsByClassName("close")[0];

  $('.myBtn').on("click", function (event) {
    $('#myModal').fadeIn(400);
  })

  span.onclick = function() {
    $('#myModal').fadeOut(400);
  }

  modal.onclick = function(event) {
    if (event.target == modal) {
      $('#myModal').fadeOut(400);
    }
  }


  
  var modal2 = document.getElementById("myModal2");
  var btn2 = $('.myBtn2');
  var span2 = document.getElementsByClassName("close2")[0];

  $('.myBtn2').on("click", function (event) {
    $('#myModal2').fadeIn(400);
  })

  span2.onclick = function() {
    $('#myModal2').fadeOut(400);
  }

  modal2.onclick = function(event) {
    if (event.target == modal2) {
      $('#myModal2').fadeOut(400);
    }
  }




  var modal0 = document.getElementById("myModal0");
  var btn0 = $('.myBtn0');
  var span0 = document.getElementsByClassName("close-border")[0];

  $('.myBtn0').on("click", function (event) {
    $('#myModal0').fadeIn(400);
  })

  span0.onclick = function() {
    $('#myModal0').fadeOut(400);
  }

  modal0.onclick = function(event) {
    if (event.target == modal0) {
      $('#myModal0').fadeOut(400);
    }
  }


// Скрипт для сворачивания/разворачивания секций

$('.sec-2-pu').fadeOut(400);
$('.sec-3-pu').fadeOut(400);
$('.v-2x').fadeOut(400);
$('.v-3x').fadeOut(400);

// раскрываю цвета
  $('.v-2').on("click", function (event) {
    $('.sec-2-pu').fadeIn(400);
    $('.v-2x').fadeIn(0);
    $(this).fadeOut(0);
  })
// раскрываю размеры
  $('.v-3').on("click", function (event) {
    $('.sec-3-pu').fadeIn(400);
    $('.v-3x').fadeIn(0);
    $(this).fadeOut(0);
  })
// скрываю цвета
  $('.v-2x').on("click", function (event) {
    $('.sec-2-pu').fadeOut(400);
    $('.v-2').fadeIn(0);
    $(this).fadeOut(0);
  })
// скрываю размеры
  $('.v-3x').on("click", function (event) {
    $('.sec-3-pu').fadeOut(400);
    $('.v-3').fadeIn(0);
    $(this).fadeOut(0);
  })


  $('.tab-link').on("click", function (event) {
    $('.sec-3-pu').fadeIn(400);
    $('.v-3x').fadeIn(0);
    $('.v-3').fadeOut(0);
  })



});




