var map;

function initMap() {
        var center = {lat: -7.931025, lng: 112.637622};
        
        var places = [
            {
            name: 'beetroot',
            position: new google.maps.LatLng(-7.931025, 112.637622),
            icon: 'img/mapsel.png'
            },
        ]

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: center
        });

        places.forEach(function(choosePlace){
        var marker = new google.maps.Marker({
        position: choosePlace.position,
        map: map,
        icon: choosePlace.icon
        });
        });
};

// 'use strict';

// (function(){

$(document).ready(function(){

 
  $('.slider').slick({    
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: true,
  speed: 3000,
  swipeToSlide:true,
  prevArrow: '.slick-prev',
  nextArrow: '.slick-next',
  // customPaging : function(slider, i) {
     // return '<span class="bullet"></span>'
     // }
 });

  $('.teamslider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  speed: 1000,
  swipeToSlide:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '.slickprev--two',
  nextArrow: '.slicknext--two',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

 });

});

// });


(function(){
  console.log($('#feedbackForm'));
  $('#feedbackForm').on('submit', function(e){
    e.preventDefault(); 

    var data = {};
    var errors = [];

    $('.signform__input').each(function(index, el){
      var id = $(el).attr('id');
      data[id] = $(el).val();
      if (!data[id].length) errors.push({
        field: '#' + id,
        error: $(el).attr('data-error')
      });
    });

    if (errors.length) {
      errors.forEach(function(el){
        $(el.field).attr('placeholder', el.error);
        $(el.field).addClass('error');
      });
    };

    $.ajax({
      url: $('#feedbackForm').attr('action'),
      type: 'POST',
      data: data,
      beforeSend: function(){
        $('.signform__button').attr('disabled', 'disabled');
      }
    })
    .done(function(response){
      console.log(response);
      if (response.status == 'ok') {
        alert(response.message);
      } else  {
        alert(response.message);
      }
      $('.signform__button').removeAttr('disabled', 'disabled');

    })
    .fail(function(){
      alert('Error. Try again later');
    });
    console.log(errors);
  });
})();

$(document).ready(function() {
 
 
   $(".anchor").click(function(e) {
    e.preventDefault();
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, 700, "swing");
   });
 
 
});

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})