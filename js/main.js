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
});

$("#g-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
  $(".header__logo").removeClass("panelactive");
  $(".header__search").removeClass("panelactive");
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

// $(document).on("click", function (e) {
//   if (!$(e.target).closest(".area").length) {
//     $(".tab__wrapper").removeClass("is-active");
//   }
//   $(".tab li")
//     .delay(600)
//     .queue(function () {
//       $(this).removeClass("active").dequeue();
//     });
//   //   $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
//   $(".area")
//     .delay(600)
//     .queue(function () {
//       $(this).removeClass("is-active").dequeue();
//     });
//   //    $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
// });

$(document).on('click touchend',   function(e) {
  if ($(e.target).closest('.tab a').length) {
  // 処理方法を記述;
        //マウスカーソルが重なった時の処理
        var idName = $(this).attr('href'); //タブ内のリンク名を取得
        GethashID (idName);//設定したタブの読み込みと
        return false;//aタグを無効にする
  } else if(!$(e.target).closest('.area').length){

    $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
    $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
    $('.tab__wrapper').removeClass("is-active");
  }
  });

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
		//ヘッダーが上から出現する
		$('.main-start').removeClass('DownMove');	//.main-startにUpMoveというクラス名を除き
		$('.main-start').addClass('UpMove');//.main-startにDownMoveのクラス名を追加
    }else {
		//ヘッダーが上に消える
        $('.main-start').removeClass('UpMove');//.main-startにDownMoveというクラス名を除き
		$('.main-start').addClass('DownMove');//.main-startにUpMoveのクラス名を追加
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

document.querySelectorAll(".box").forEach((box, index) => {
  const gridAnimation = new GridAnimation(box);
  const type = parseInt(box.getAttribute("data-i"));
  gridAnimation.setType(type);
  if (index === 0) gridAnimation.trigger();
});