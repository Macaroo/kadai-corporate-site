//ハンバーガーメニュー
$(function () {
    $(".js-hamburger, .js-drawer").click(function () {
    //toggleClassでclassをつけたり外したりする
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
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

//スライダー
const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  spaceBetween: 30,
});

});

