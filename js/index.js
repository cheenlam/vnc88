
$(document).ready(function() {
    window.scrollTo({ top: 0 });
})

var scroll = $(window).scroll(function() {
    floatMenu();
    floatEvent()
});

$(window).resize(function() {
    floatEvent()
    $('#hd_menu').removeClass('on');
    indexVue.menuOpen = false;
    indexVue.signInOpen = false;
    window.scrollTo({ top: 0 });
})

// 上方menu浮動
function floatMenu() {
    let topH = $('#hd_top').height();
    let winW = $(document).width();
    if (winW > 1250) {
        if (scroll.scrollTop() > topH) {
            $('#hd_menu').addClass('on');
        } else {
            $('#hd_menu').removeClass('on');
        }
    }
}

// 側邊浮動廣告
function floatEvent() {
    let getH = $('.contBox-full .contBox-min').offset().top - $('#hd_menu').height();
    let getH2 = $('.footer').offset().top - $(window).height() + 30 + $('#hd_top').height()
    if (scroll.scrollTop() > getH && scroll.scrollTop() < getH2) {
        $('#leftTool,#rightTool').addClass('on')
    } else {
        $('#leftTool,#rightTool').removeClass('on')
    }

    let getH3 = $('.content').height() - $('#leftTool').height() / 2
    let w = $(document).width() + 17
    if (scroll.scrollTop() >= getH2 & w > 1490) {
        $('#leftTool,#rightTool').css('top', getH3)
        $('.mainCnt .todayGame').css('display', 'none')
    } else {
        $('#leftTool,#rightTool').removeAttr("style")
        $('.mainCnt .todayGame').css('display', 'block')
    }
}


// $('#hd_menu li').click(function() {
//     $('#hd_menu').removeClass('on')
//     window.scrollTo({ top: 0 });
// })