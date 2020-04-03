$('.nav-link').on('click', function () {
  $('.navbar-collapse').collapse('hide');
  $('.nav-link') = $($(this).attr('href'));
  return false;
});
$(function () {
  let header = $("#nav");
  let intro = $("#header");
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    let introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    if (scrollPos > introH) {

      header.addClass("bg-dark");

    } else {
      header.removeClass("bg-dark");
    }
  });
  // nav toggle
  $(".navbar-toggler").on("click", function (event) {
    event.preventDefault();
    header.addClass("bg-dark");
  });


});

$('.posts-slid').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});