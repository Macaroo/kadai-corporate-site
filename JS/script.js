//ハンバーガーメニュー
$(function () {
    $('#js-drawer').click(function () {
    //toggleClassでclassをつけたり外したりする
    $('body').toggleClass('is-drawerActive')
    //attr()でaria-expandedがfalseの場合、thisはクリックした要素そのもの
    if ($(this).attr('aria-expanded') == 'false') {
    $(this).attr('aria-expanded', true)
    //jQueryでcss操作、アニメーションにはdisplayではなく、visibilityを使う
    $('#drawer-menu').css('visibility', 'visible')
    $('#drawer-menu').attr('aria-hidden','false')
} else {
    $(this).attr('aria-expanded', false)
    $('#drawer-menu').css('visibility', 'hidden')
    $('#drawer-menu').attr('aria-hidden','true')
    }
})
});

// フェードイン
var waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function(direction) {
    console.log('Scrolled to waypoint!')
    }
})

//スライダー
new Swiper('.js-brand');
