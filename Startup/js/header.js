// fixed header
$(function () {
  let header = $("#header");
  let intro = $("#intro");

  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    let introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });




  // nav toggle
  let nav = $("#nav");
  let bi = $(".burger_item");
  $("#navToggle").on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
    header.toggleClass("bgc");
    bi.toggleClass("burg");
  });
  $(".nav_link").on("click", function () {
    nav.removeClass("show");
    header.removeClass("bgc");
    bi.removeClass("burg");
  });
});