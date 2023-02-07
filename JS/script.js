//ハンバーガーメニュー
$(function () {
    $(".js-hamburger, .js-drawer").click(function () {
    //toggleClassでclassをつけたり外したりする
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
});

//スライダー
const swiper = new Swiper('.js-brand-list', {
    loop: true, //ループさせる
    effect: "fade", //フェードのエフェクト
    autoplay: {
    delay: 2000, //2秒後に次の画像へ
    disableOnInteraction: false, //ユーザー操作後に自動再生を再開する
    },
});
});

// フェードイン
var waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function(direction) {
    console.log('Scrolled to waypoint!')
    }
});

