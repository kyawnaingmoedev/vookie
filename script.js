$(document).ready(function() {
//  Preloader
    $("#owl-banner").owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        autoplay: false,
        dots:true,
        dotsData: true,
        autoplayHoverPause:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1,
            nav: false
          },
          1200: {
            items: 1,
            nav: false
          }
        }
       // navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    });
   
  });


$(document).ready(function(){
    $('#owl-book').owlCarousel({
        loop: true,
        autoplayHoverPause:true,
        autoplay: true,
        pagination: false,
        dotData: false,
        dotsData: false,
        nav: false,
        margin: 25,
        responsiveClass: true,
        slideTransition: 'linear',
        fluidSpeed: true,
        smartSpeed: 7000,
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 2
          },
          1000: {
            items: 4,
          },
          1200: {
            items: 5,
          }
        }
    });
});

  $(document).ready(function(){
    $('#owl-book-second').owlCarousel({
        loop: true,
        autoplay: true,
        pagination: false,
        navigation: false,
        dotData: false,
        autoplayHoverPause:true,
        slideTransition: 'linear',
        fluidSpeed: true,
        smartSpeed: 6000,
        margin: 25,
        rtl: true,
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 2
          },
          1000: {
            items: 4,
            nav: false
          },
          1200: {
            items: 5,
            nav: false
          }
        }
    });
});

$(document).ready(function(){
  $('#popularity-carousel').owlCarousel({
      loop: true,
      autoplay: false,
      nav: true,
      navText:[
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
     ],
      pagination: false,
      navigation: false,
      dotData: false,
      autoplayHoverPause:true,
      margin: 20,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3,
          nav: false
        },
        1200: {
          items: 4,
          nav: false
        }
      }
  });
});

$(document).ready(function(){
  $('#old-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      nav: true,
      navText:[
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
     ],
      pagination: false,
      navigation: false,
      dotData: false,
      autoplayHoverPause: true,
      margin: 20,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2,
          nav: false
        },
        1200: {
          items: 2,
          nav: false
        }
      }
  });
});

$(document).ready(function(){
  $('#review-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      pagination: true,
      dotData: true,
      dotsData: true,
      autoplayHoverPause: true,
      margin: 20,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3,
          nav: false
        },
        1200: {
          items: 3,
          nav: false
        }
      }
  });
});

