//ハンバーガーメニュー
$(function () {
    $(".js-hamburger, .js-drawer").click(function () {
    //toggleClassでclassをつけたり外したりする
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
});

//スライダー
var swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
});

// フェードイン
$('.fadeIn').waypoint({
    handler: function (direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__fadeIn');
        this.destroy();
      }
    },
    offset: '50%',
});
});

