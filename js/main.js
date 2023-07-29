//
// MENU
//
$(".openbtn").click(function () {
  $(this).toggleClass("active");
  $("#g-nav").toggleClass("panelactive");
  $(".header__logo").toggleClass("panelactive");
  $(".header__search").toggleClass("panelactive");
  $(".header__lang").toggleClass("panelactive");
  $(".main-start").toggleClass("panelactive");
  $(".body").toggleClass("panelactive");
});

$("#g-nav a").click(function () {
  $(".openbtn").removeClass("active");
  $("#g-nav").removeClass("panelactive");
  $(".header__logo").removeClass("panelactive");
  $(".header__search").removeClass("panelactive");
  $(".header__lang").removeClass("panelactive");
  $(".main-start").removeClass("panelactive");
  $(".body").removeClass("panelactive");
});

//
// TAB
//
function GethashID(hashIDName) {
  if (hashIDName) {
    $(".tab li")
      .find("a")
      .each(function () {
        var idName = $(this).attr("href");
        if (idName == hashIDName) {
          var parentElm = $(this).parent();
          $(".tab li").removeClass("active");
          $(parentElm).addClass("active");
          $(".area").removeClass("is-active");
          $(hashIDName).addClass("is-active");
          $(".tab__wrapper").addClass("is-active");
        }
      });
  }
}

$(".tab a").on("click", function () {
  var idName = $(this).attr("href");
  GethashID(idName);
  return false;
});

$(document).on("click", function (e) {
  if (!$(e.target).closest(".area").length) {
    $(document).queue($(".tab__wrapper").removeClass("is-active"));
    $(document).delay(600).queue($(".tab li").removeClass("active"));
    $(document).queue($(".area").removeClass("active"));
  }
});

//
// TAB 2
//
var beforePos = 0;
function ScrollAnime() {
  var elemTop = $("#header").offset().top;
  var elemFooter = $("#topics").offset().top;
  var scroll = $(window).scrollTop();
  if (scroll == beforePos) {

  } else if (scroll == elemTop) {
    //  headerに戻ると下げる
    $(".main-start").removeClass("UpMove");
    $(".main-start").addClass("DownMove");
  } else if(scroll >= elemFooter){
    // $(".main-start").addClass("UpMove");
    // $(".main-start").removeClass("DownMove");
    // $(".tab__wrapper").addClass("AsFooter");
  } else if (0 > scroll - beforePos) {
    // 上にスクロールすると上げる
    $(".main-start").removeClass("DownMove");
    $(".main-start").addClass("UpMove");

    $(".header-set").removeClass("RightMove");
    $(".header-set").addClass("LeftMove");
  } else {
    // default
    $(".main-start").removeClass("UpMove");
    $(".main-start").addClass("DownMove");

    $(".header-set").removeClass("LeftMove");
    $(".header-set").addClass("RightMove");
  }

  beforePos = scroll;
}

$(window).scroll(function () {
  ScrollAnime();
});

$(window).on("load", function () {
  ScrollAnime();
});

//
//   ANIMATIONS
//
function fadeAnime() {
  $(".fadeUpTrigger").each(function () {
    var elemPos = $(this).offset().top + 500;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
    } else {
      $(this).removeClass("fadeUp");
    }
  });

  $(".closeUpTrigger").each(function () {
    var elemPos = $(this).offset().top + 500;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("closeUp");
    } else {
      $(this).removeClass("closeUp");
    }
  });

  $(".fadeLeftTrigger").each(function () {
    var elemPos = $(this).offset().top + 500;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeLeft");
    } else {
      $(this).removeClass("fadeLeft");
    }
  });

  $(".fadeRightTrigger").each(function () {
    var elemPos = $(this).offset().top + 500;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeRight");
    } else {
      $(this).removeClass("fadeRight");
    }
  });

  $(".fadeInTrigger").each(function () {
    var elemPos = $(this).offset().top + 500;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeIn");
    } else {
      $(this).removeClass("fadeIn");
    }
  });

  $(".simpleblurTrigger").each(function () {
    var elemPos = $(this).offset().top + 500;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("simpleblur");
    } else {
      $(this).removeClass("simpleblur");
    }
  });

  $(".fadeLeftUpTrigger").each(function () {
    var elemPos = $(this).offset().top + 500;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeLeftUp");
    } else {
      $(this).removeClass("fadeLeftUp");
    }
  });

  $(".fadeRightUpTrigger").each(function () {
    var elemPos = $(this).offset().top + 500;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeRightUp");
    } else {
      $(this).removeClass("fadeRightUp");
    }
  });
}

$(window).scroll(function () {
  // fadeAnime();
});

function delayScrollAnime() {
  var time = 0.2;
  var value = time;
  $(".delayScroll").each(function () {
    var parent = this;
    var elemPos = $(this).offset().top+500;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var childs = $(this).children();

    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
      $(childs).each(function () {
        if (!$(this).hasClass("fadeUp")) {
          $(parent).addClass("play");
          $(this).css("animation-delay", value + "s");
          $(this).addClass("fadeUp");
          value = value + time;

          var index = $(childs).index(this);
          if (childs.length - 1 == index) {
            $(parent).removeClass("play");
          }
        }
      });
    } else {
      $(childs).removeClass("fadeUp");
      value = time;
    }
  });
}

$(window).scroll(function () {
  delayScrollAnime();  // for Cuisine section
});


function AnimeStory() {
  $(".animeStoryTrigger").each(function () {
    var elemPos = $(this).offset().top + 400;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("simpleblur");
      $(".story__container").addClass("fadeLeft");
      $(".story__title--blur").addClass("simpleblur");
      $(".story__content--fadeIn").addClass("fadeIn");
      $(".story__button").addClass("simpleblur");
    } else {
      $(this).removeClass("simpleblur");
      $(".story__container").removeClass("fadeLeft");
      $(".story__title--blur").removeClass("simpleblur");
      $(".story__content--fadeIn").removeClass("fadeIn");
      $(".story__button").removeClass("simpleblur");
      $(".story__box").removeClass("gridhide");
    }
  });
}

function AnimeSpecial() {
  $(".animeSpecialTrigger").each(function () {
    var elemPos = $(this).offset().top + 500;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("expansion");
      $(".special__title--blur").addClass("simpleblur");
      $(".special__container--fadeRight").addClass("fadeRight");
      $(".special__content-title--blur").addClass("simpleblur");
      $(".special__content--fadeIn").addClass("fadeIn");
      $(".special__button--blur").addClass("simpleblur");
    } else {
      $(this).removeClass("expansion");
      $(".special__title--blur").removeClass("simpleblur");
      $(".special__container--fadeRight").removeClass("fadeRight");
      $(".special__content-title--blur").removeClass("simpleblur");
      $(".special__content--fadeIn").removeClass("fadeIn");
      $(".special__button").removeClass("simpleblur");
      $(".special__box").removeClass("gridhide");
    }
  });
}

function AnimeEvent() {
  $(".animeEventTrigger").each(function () {
    var elemPos = $(this).offset().top + 500;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("expansion");
      $(".event__title--blur").addClass("simpleblur");
      $(".event__container--fadeLeft").addClass("fadeLeft");
      $(".event__content-title--blur").addClass("simpleblur");
      $(".event__content--fadeIn").addClass("fadeIn");
      $(".event__button--blur").addClass("simpleblur");
    } else {
      $(this).removeClass("expansion");
      $(".event__title--blur").removeClass("simpleblur");
      $(".event__container--fadeLeft").removeClass("fadeLeft");
      $(".event__content-title--blur").removeClass("simpleblur");
      $(".event__content--fadeIn").removeClass("fadeIn");
      $(".event__button").removeClass("simpleblur");
      $(".event__box").removeClass("gridhide");
    }
  });
}

function AnimeWedding() {
  $(".animeWeddingTrigger").each(function () {
    var elemPos = $(this).offset().top + 200;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("closeUp");
      $(".wedding__chapel--closeUp").addClass("closeUp");
      $(".wedding__title--blur").addClass("simpleblur");
    } else {
      $(this).removeClass("closeUp");
      $(".wedding__chapel--closeUp").removeClass("closeUp");
      $(".wedding__title--blur").removeClass("simpleblur");
    }
  });
}

function AnimeFitness() {
  $(".animeFitnessTrigger").each(function () {
    var elemPos = $(this).offset().top + 500;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeRightUp");
      $(".fitness__gym--leftUp").addClass("fadeLeftUp");
      $(".fitness__pic--pool").addClass("fadeUp");
      $(".fitness__pic--bath").addClass("fadeUp");
      $(".fitness__pic--sauna").addClass("fadeUp");
    } else {
      $(this).removeClass("fadeRightUp");
      $(".fitness__gym--leftUp").removeClass("fadeLeftUp");
      $(".fitness__pic--pool").removeClass("fadeUp");
      $(".fitness__pic--bath").removeClass("fadeUp");
      $(".fitness__pic--sauna").removeClass("fadeUp");
    }
  });
}

function AnimeCuisine() {
  $(".animeCuisineTrigger").each(function () {
    var elemPos = $(this).offset().top + 500;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("simpleblur");
      // $(".wedding__chapel--closeUp").addClass("closeUp");
      // $(".wedding__title--blur").addClass("simpleblur");
    } else {
      $(this).removeClass("simpleblur");
      // $(".wedding__chapel--closeUp").removeClass("closeUp");
      // $(".wedding__title--blur").removeClass("simpleblur");
    }
  });
}

function grida() {
  $(".gridanimeTrigger").each(function () {
    var elemPos = $(this).offset().top + 300;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    const gridAnimation = new GridAnimation(this);
    const type = parseInt($(this).attr("data-i"));
    gridAnimation.setType(type);
    if (scroll >= elemPos - windowHeight) {
      if (!$(this).hasClass("gridhide")) {
        gridAnimation.trigger();
        $(this).addClass("gridhide");
      } else {
      }
    }
  });
}

$(window).scroll(function () {
  AnimeStory();
  AnimeCuisine();
  AnimeSpecial();
  AnimeFitness();
  AnimeWedding();
  AnimeEvent();
  grida();
});

//
//  GRIDANIMAION
//
class GridAnimation {
  constructor(el, row = 13, col = 18) {
    this.element = el;
    this.fragments = el.children;
    this.row = row;
    this.col = col;
    this.duration = 2000;
    this.delayDelta = 70;
    this.type = null;

    this.randomIntBetween = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    this.element.style.setProperty("--row", this.row);
    this.element.style.setProperty("--col", this.col);
    this.element.addEventListener("click", this.trigger);
  }

  trigger = () => {
    if (this.fragments.length > 0) this.clear();
    this.element.classList.add("hide");
    this.animate();
  };

  setType = (type) => {
    this.type = type;
  };

  clear = () => {
    while (this.element.hasChildNodes()) {
      this.element.removeChild(this.element.firstChild);
    }
  };

  animate = () => {
    if (this.type === null) return;
    const x = this.col - 1;
    const y = this.row - 1;
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        const fragment = document.createElement("div");
        fragment.className = "fragment";
        fragment.style.setProperty("--x", j);
        fragment.style.setProperty("--y", i);

        let delay = 0;
        switch (this.type) {
          case 0:
            delay = i * 2;
            break;
          case 1:
            delay = j * 2;
            break;
          case 2:
            delay = this.randomIntBetween(0, x + y);
            break;
          case 3:
            delay = x + y - (j + i);
            break;
          case 4:
            delay = i + j;
            break;
          case 5:
            delay = x - i + j;
            break;
          case 6:
            delay = i + (y - j);
            break;
          case 7:
            delay = Math.abs((x + y) / 2 - (j + i));
            break;
          case 8:
            delay = (x + y) / 2 - Math.abs((x + y) / 2 - (j + i));
            break;
          case 9:
            delay =
              (x + y) / 2 - Math.abs((x + y) / 2 - (j + i)) * Math.cos(i + j);
            break;
          case 10:
            delay = Math.abs((x + y) / 2 - (x - j + i));
            break;
          case 11:
            delay = Math.abs((x + y) / 2 - Math.abs((x + y) / 2 - (x - j + i)));
            break;
          case 12:
            delay = Math.abs(x / 2 - j) + Math.abs(y / 2 - i);
            break;
          case 13:
            delay = x / 2 - Math.abs(x / 2 - j) + (x / 2 - Math.abs(y / 2 - i));
            break;
        }

        const isOdd = (i + j) % 2 === 0;
        fragment.style.setProperty(
          "--rotateX",
          `rotateX(${isOdd ? -180 : 0}deg)`
        );
        fragment.style.setProperty(
          "--rotateY",
          `rotateY(${isOdd ? 0 : -180}deg)`
        );
        fragment.style.setProperty("--delay", delay * this.delayDelta + "ms");
        fragment.style.setProperty("--duration", this.duration + "ms");
        this.element.appendChild(fragment);

        const timer = setTimeout(() => {
          fragment.style.willChange = "initial";
          fragment.style.transform = "initial";
          fragment.style.animation = "initial";
          fragment.style.backfaceVisibility = "initial";
          fragment.style.opacity = 1;
          clearTimeout(timer);
        }, this.duration + delay * this.delayDelta);
      }
    }
  };
}

document.querySelectorAll(".box").forEach(function (element) {
  const gridAnimation = new GridAnimation(element);
  const type = parseInt(element.getAttribute("data-i"));
  gridAnimation.setType(type);
  gridAnimation.trigger();
});


//
//  SLIDER
//  VRGAS
//  http://vegas.jaysalvat.com/documentation/transitions/
//
var windowwidth =
  window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768) {
  var responsiveImage = [
    { src: "./img/FV-1_pc.webp" },
    { src: "./img/FV-2_pc.webp" },
    { src: "./img/FV-3_pc.webp" },
    { src: "./img/FV-4_pc.webp" },
  ];
} else {
  var responsiveImage = [
    { src: "./img/FV-1_sp.webp" },
    { src: "./img/FV-2_sp.webp" },
    { src: "./img/FV-3_sp.webp" },
    { src: "./img/FV-4_sp.webp" },
  ];
}
$("#slider").vegas({
  overlay: false,
  transition: "fade2",
  transitionDuration: 5000,
  delay: 5000,
  animationDuration: 20000,
  animation: "random",
  slides: responsiveImage,
  timer: false,
});


//
//  PEGINATION
//  
//
// var current;
// $.scrollify({
//   section: ".page",
//   scrollbars: "false",
//   interstitialSection: "#header, #footer",
//   easing: "swing",
//   scrollSpeed: 300,
//   setHeights:false,
//   before:function(i,box){
//       current = i;
//   },
// });
// $(window).on('resize',function(){
//   if(current){
//       var currentScrl = $('.page').eq(current).offset().top;
//       $(window).scrollTop(currentScrl);
//   }
// });



!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 320
        ? 'width=device-width,initial-scale=1'
        : 'width=320';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();