//
// MENU
//

//  sp版NAVアイコンを押したときのハンバーガーメニュー
$(".openbtn").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
  $(".header__logo").toggleClass("panelactive");
  $(".header__search").toggleClass("panelactive");
  $(".header__lang").toggleClass("panelactive");
});

$("#g-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
  $(".header__logo").removeClass("panelactive");
  $(".header__search").removeClass("panelactive");
  $(".header__lang").removeClass("panelactive");
});

//
// TAB
//

//任意のタブにURLからリンクするための設定
function GethashID(hashIDName) {
  if (hashIDName) {
    //タブ設定
    $(".tab li")
      .find("a")
      .each(function () {
        //タブ内のaタグ全てを取得
        var idName = $(this).attr("href"); //タブ内のaタグのリンク名（例）#lunchの値を取得
        if (idName == hashIDName) {
          //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
          var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
          $(".tab li").removeClass("active"); //タブ内のliについているactiveクラスを取り除き
          $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
          //表示させるエリア設定
          $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
          $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加
          $(".tab__wrapper").addClass("is-active");
        }
      });
  }
}

//タブをクリックしたら
// $('.tab a').on('click', function() {
//   var idName = $(this).attr('href'); //タブ内のリンク名を取得
//   GethashID (idName);//設定したタブの読み込みと
//   return false;//aタグを無効にする
// });
$(".tab a").on("click", function () {
  //マウスカーソルが重なった時の処理
  var idName = $(this).attr("href"); //タブ内のリンク名を取得
  GethashID(idName); //設定したタブの読み込みと
  return false; //aタグを無効にする
});

$(document).on("click", function (e) {
  if (!$(e.target).closest(".area").length) {

    $(document).queue($(".tab__wrapper").removeClass("is-active"));
    $(document).delay(600).queue($(".tab li").removeClass("active"));
    $(document).queue($(".area").removeClass("active"));

  //   $(".tab__wrapper").removeClass("is-active");

  // $(".tab li")
  //   .delay(600)
  //   .queue(function () {
  //     $(this).removeClass("active").dequeue();
  //   });
  // //   $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
  // $(".area")
  //   .delay(600)
  //   .queue(function () {
  //     $(this).removeClass("is-active").dequeue();
  //   });
  //    $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
  }
});

// $(document).on('click touchend',   function(e) {
//   if ($(e.target).closest('.tab a').length) {
//   // 処理方法を記述;
//         //マウスカーソルが重なった時の処理
//         var idName = $(this).attr('href'); //タブ内のリンク名を取得
//         GethashID (idName);//設定したタブの読み込みと
//         return false;//aタグを無効にする
//   } else if(!$(e.target).closest('.area').length){

//     $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
//     $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
//     $('.tab__wrapper').removeClass("is-active");
//   }
//   });

// $('.tab a').hover(
//   function() {

//       //マウスカーソルが重なった時の処理
//       var idName = $(this).attr('href'); //タブ内のリンク名を取得
//       GethashID (idName);//設定したタブの読み込みと
//       return false;//aタグを無効にする

//   },
//   function() {

//       //マウスカーソルが離れた時の処理
//       $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
//       $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
//       $(".tab__wrapper").removeClass("is-active");
//   }
// );

// 上記の動きをページが読み込まれたらすぐに動かす
// $(window).on("load", function () {
//   // $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
//   // $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
//   var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
//   GethashID(hashName); //設定したタブの読み込み
// });

//
// TAB 2
//

var beforePos = 0;//スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
    var elemTop = $('#area-2').offset().top;//#area-2の位置まできたら
	var scroll = $(window).scrollTop();
    //ヘッダーの出し入れをする
    if(scroll == beforePos) {
		//IE11対策で処理を入れない
    } else if(0 > scroll - beforePos){

		$('.main-start').removeClass('DownMove');	
		$('.main-start').addClass('UpMove');

    $('.header-set').removeClass('RightMove');	
		$('.header-set').addClass('LeftMove');

    }else {
	
    $('.main-start').removeClass('UpMove');
		$('.main-start').addClass('DownMove');

		$('.header-set').removeClass('LeftMove');
    $('.header-set').addClass('RightMove');	

    }
    
    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});


//
//   ANIME
//

function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top+500;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
  });


  $('.fadeLeftTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top+500;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeLeft');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeLeft');// 画面外に出たらfadeUpというクラス名を外す
    }
  });

  $('.fadeRightTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top+500;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeRight');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      $(this).removeClass('fadeRight');// 画面外に出たらfadeUpというクラス名を外す
      }
  });

  $('.fadeInTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top+500;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeIn');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeIn');// 画面外に出たらfadeUpというクラス名を外す
    }
});


  $('.simpleblurTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top+500;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('simpleblur');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('simpleblur');// 画面外に出たらfadeUpというクラス名を外す
    }




});

$('.fadeLeftUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
  var elemPos = $(this).offset().top+500;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
  $(this).addClass('fadeLeftUp');// 画面内に入ったらfadeUpというクラス名を追記
  }else{
  $(this).removeClass('fadeLeftUp');// 画面外に出たらfadeUpというクラス名を外す
  }
});

$('.fadeRightUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
var elemPos = $(this).offset().top+500;//要素より、50px上の
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll >= elemPos - windowHeight){
$(this).addClass('fadeRightUp');// 画面内に入ったらfadeUpというクラス名を追記
}else{
$(this).removeClass('fadeRightUp');// 画面外に出たらfadeUpというクラス名を外す
}
});

}

function delayScrollAnime() {
  var time = 0.2;//遅延時間を増やす秒数の値
  var value = time;
  $('.delayScroll').each(function () {
    var parent = this;          //親要素を取得
    var elemPos = $(this).offset().top;//要素の位置まで来たら
    var scroll = $(window).scrollTop();//スクロール値を取得
    var windowHeight = $(window).height();//画面の高さを取得
    var childs = $(this).children();  //子要素を取得
    
    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
      $(childs).each(function () {
        
        if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
          
          $(parent).addClass("play"); //親要素にクラス名playを追加
          $(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
          $(this).addClass("fadeUp");//アニメーションのクラス名を追加
          value = value + time;//delay時間を増加させる
          
          //全ての処理を終わったらplayを外す
          var index = $(childs).index(this);
          if((childs.length-1) == index){
            $(parent).removeClass("play");
          }
        }
      })
    }else {
      $(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
      value = time;//delay初期値の数値に戻す
    }
  })
}







// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){

    // delayScrollAnime();
  });

// 画面が読み込まれたらすぐに動かしたい場合の記述
  // $(window).on('load', function(){
  //   delayScrollAnime();
  // });






// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    // fadeAnime();
  });// ここまで画面をスクロールをしたら動かしたい場合の記述


  function AnimeStory(){
    $('.animeStoryTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top+500;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll >= elemPos - windowHeight){

        $(this).addClass('fadeLeft');
        $('.story__title--blur').addClass('simpleblur');
        $('.story__content--fadeIn').addClass('fadeIn');
        // $('.story__buttonWrapper').addClass('simpleblur');
        $('.story__button').addClass('simpleblur');

      }else{
      $(this).removeClass('fadeLeft');// 画面外に出たらfadeUpというクラス名を外す
      $('.story__title--blur').removeClass('simpleblur');
      $('.story__content--fadeIn').removeClass('fadeIn');
      // $('.story__buttonWrapper').removeClass('simpleblur');
      $('.story__button').removeClass('simpleblur');
      $('.story__box').removeClass('gridhide');
      }
    });
    
  }

  function AnimeSpecial(){
    $('.animeSpecialTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top+500;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll >= elemPos - windowHeight){

        $(this).addClass('expansion');
        $('.special__title--blur').addClass('simpleblur');
        $('.special__container--fadeRight').addClass('fadeRight');
        $('.special__content-title--blur').addClass('simpleblur');
        $('.special__content--fadeIn').addClass('fadeIn');
        // $('.story__buttonWrapper').addClass('simpleblur');
        $('.special__button--blur').addClass('simpleblur');

      }else{
      $(this).removeClass('expansion');// 画面外に出たらfadeUpというクラス名を外す
      $('.special__title--blur').removeClass('simpleblur');
      $('.special__container--fadeRight').removeClass('fadeRight');
      $('.special__content-title--blur').removeClass('simpleblur');
      $('.special__content--fadeIn').removeClass('fadeIn');
      // $('.story__buttonWrapper').removeClass('simpleblur');
      $('.special__button').removeClass('simpleblur');
      $('.special__box').removeClass('gridhide');
      }
    });
    
  }

  function AnimeEvent(){
    $('.animeEventTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top+500;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll >= elemPos - windowHeight){

        $(this).addClass('expansion');
        $('.event__title--blur').addClass('simpleblur');
        $('.event__container--fadeLeft').addClass('fadeLeft');
        $('.event__content-title--blur').addClass('simpleblur');
        $('.event__content--fadeIn').addClass('fadeIn');
        // $('.story__buttonWrapper').addClass('simpleblur');
        $('.event__button--blur').addClass('simpleblur');

      }else{
      $(this).removeClass('expansion');// 画面外に出たらfadeUpというクラス名を外す
      $('.event__title--blur').removeClass('simpleblur');
      $('.event__container--fadeLeft').removeClass('fadeLeft');
      $('.event__content-title--blur').removeClass('simpleblur');
      $('.event__content--fadeIn').removeClass('fadeIn');
      // $('.story__buttonWrapper').removeClass('simpleblur');
      $('.event__button').removeClass('simpleblur');
      $('.event__box').removeClass('gridhide');
      }
    });
    
  }



  function grida(){
    $('.gridanimeTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top+100;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      const gridAnimation = new GridAnimation(this);
      const type = parseInt($(this).attr("data-i"));
      gridAnimation.setType(type);
      if (scroll >= elemPos - windowHeight){
        if (!$(this).hasClass("gridhide")) {
          gridAnimation.trigger();
          $(this).addClass('gridhide');
        } else {
          // $(this).removeClass('gridhide');
        }
      }
    });
  }
  function grid_e(){
    $('.gridanimeTrigger_e').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top+100;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      const gridAnimation_e = new GridAnimation(this);
      const type = parseInt($(this).attr("data-i"));
      gridAnimation_e.setType(type);
      if (scroll >= elemPos - windowHeight){
        if (!$(this).hasClass("gridhide")) {
          gridAnimation_e.trigger();
          $(this).addClass('gridhide');
        } else {
          // $(this).removeClass('gridhide');
        }
      }
    });
  }







// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  AnimeStory();
  AnimeSpecial();
  AnimeEvent();
  grida();
  // grid_e();

});// ここまで画面をスクロールをしたら動かしたい場合の記述

//右下からアップ
// $(function() {
//   //画面をスクロールするとイベントが発動する
//   $(window).scroll(function() {
    
//     //フェードインさせたい要素の位置をずらす
//     $('.fadeRightUp').css({
//       'opacity': '0',
//       'transform': 'translate(100px, 100px)'
//     });
    
//     //スクロールバーの位置を取得
//     var scroll = $(window).scrollTop();

//     //ウィンドウの高さを取得
//     var windowHeight = $(window).height();

//     $('.fadeRightUp').each(function() {
//       //フェードインさせたい要素の縦位置を取得
//       var elemPos = $(this).offset().top;

//       //要素がウィンドウの中に入ってからさらに100pxスクロールしたら要素をフェードインする
//       if (scroll > elemPos - windowHeight + 100 && !$(parent).hasClass("play")) {
//         $(parent).addClass("play");
//         $(this).css({
//           'opacity': '1',
//           'transform': 'translate(0, 0)'
//         });
//         $(parent).removeClass("play");
//       }
//     });
//   });
// });

// // 左下からアップ
// $(function() {
//   //画面をスクロールするとイベントが発動する
//   $(window).scroll(function() {
    
//     //フェードインさせたい要素の位置をずらす
//     $('.fadeLeftUp').css({
//       'opacity': '0',
//       'transform': 'translate(-100px, 100px)'
//     });
    
//     //スクロールバーの位置を取得
//     var scroll = $(window).scrollTop();

//     //ウィンドウの高さを取得
//     var windowHeight = $(window).height();

//     $('.fadeLeftUp').each(function() {
//       //フェードインさせたい要素の縦位置を取得
//       var elemPos = $(this).offset().top;

//       //要素がウィンドウの中に入ってからさらに100pxスクロールしたら要素をフェードインする
//       if (scroll > elemPos - windowHeight + 100 && !$(parent).hasClass("play")) {
//         $(parent).addClass("play");
//         $(this).css({
//           'opacity': '1',
//           'transform': 'translate(0, 0)'
//         });
//         $(parent).removeClass("play");
//       }
//     });
//   });
// });















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

// document.querySelectorAll(".box").forEach((box, index) => {
//   const gridAnimation = new GridAnimation(box);
//   const type = parseInt(box.getAttribute("data-i"));
//   gridAnimation.setType(type);
//   if (index === 0) gridAnimation.trigger();
// });

document.querySelectorAll('.box').forEach(function(element) {
    const gridAnimation = new GridAnimation(element);
    const type = parseInt(element.getAttribute("data-i"));
    gridAnimation.setType(type);
    gridAnimation.trigger();
  });







  //画像と動画の設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768){
  var responsiveImage = [//PC用の動画と画像
    { src: './img/FV-1_pc.webp'},
    { src: './img/FV-2_pc.webp'},
    { src: './img/FV-3_pc.webp'},
    { src: './img/FV-4_pc.webp'}
  ];
} else {
        var responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: './img/FV-1_sp.webp'},
        { src: './img/FV-2_sp.webp'},
        { src: './img/FV-3_sp.webp'},
        { src: './img/FV-4_sp.webp'}
  ];
}

//Vegas全体の設定
$('#slider').vegas({
overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
transition: 'fade2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
delay: 3000,//スライド間の遅延をミリ秒単位で。
animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
slides: responsiveImage,//画像と動画の設定を読む
timer: false,
});


// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();//スクロール値を定義
// //header-imgの背景
// $('#slider').css({
// transform: 'scale('+(100 + scroll/10)/100+')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
// top: -(scroll/50)  + "%",//スクロール値を代入してtopの位置をマイナスにずらす
//   });
// });