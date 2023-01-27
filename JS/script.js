//ハンバーガーメニュー
$(function () {
    $('.js-hamburger, .js-drawer, .js-drawer a').click(function () {
    //toggleClassでclassをつけたり外したりする
    $('.js-hamburger').toggleClass('is-active')
    $('.js-hamburger').fadeToggle();
});

// フェードイン
var waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function(direction) {
    console.log('Scrolled to waypoint!')
    }
});

//スライダー
new Swiper('js-brand-list', {
        loop: true, //ループさせる
        effect: "fade", //フェードのエフェクト
        autoplay: {
        delay: 4000, //４秒後に次の画像へ
        disableOnInteraction: false //ユーザー操作後に自動再生を再開する
        },
    });
});
