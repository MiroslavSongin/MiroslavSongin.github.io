    document.body.onload = function () {
      setTimeout(function () {
        var preloader = document.getElementById("myPreloader");
        if (!preloader.classList.contains("cansel")) {
          preloader.classList.add("cansel");
        }
      }, 499);
    };