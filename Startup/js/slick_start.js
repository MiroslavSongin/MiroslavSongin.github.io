$(".slider_main").slick({
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  responsive: [{
    breakpoint: 800,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});


$(".testimonials").slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false
});