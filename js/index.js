// header按鈕動作
$('#hd_signIn .btn').click(function() {
    let getData = $(this).attr('data-btn')
    switch (getData) {
        case 'signIn':
            $('#hd_signIn').attr('data-signIn', 1);
            break;
        case 'regd':
            $("#dialogBox").addClass('on');
            $("#dialogBox .regd").addClass('on');
            break;
        case 'signOut':
            $('#hd_signIn').attr('data-signIn', 0);
            break;
        case 'mbrMsg':
            break;
    }
})

$(document).ready(function() {
    window.scrollTo({ top: 0 });
    dialog();
})

var scroll = $(window).scroll(function() {
    floatMenu();
    floatAd()
});

$(window).resize(function() {
    floatAd()
    window.scrollTo({ top: 0 });
})

// 上方menu浮動
function floatMenu() {
    let topH = $('#hd_top').height();
    if (scroll.scrollTop() > topH) {
        $('#hd_menu').addClass('on');
    } else {
        $('#hd_menu').removeClass('on');
    }
}

// 側邊浮動廣告
function floatAd() {
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

//置頂按扭滑動
$('#goTop').click(function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 頁尾廣告關閉
$('.ftAd_close').click(function() {
    $(this).parents('div').addClass('on')
})


// 彈跳視窗
function dialog() {
    $.ajax({
        url: 'page/dialog.html',
        success: function(html) {
            $("#dialogCnt").html(html);
        }
    });
}

$('#hd_forget').click(function() {
    $("#dialogBox").addClass('on');
    $("#dialogBox .forget").addClass('on');
})

$('#getGift').click(function() {
    $("#dialogBox").addClass('on');
    $("#dialogBox .newGift").addClass('on');
})

$('#todayGame').click(function() {
    $("#dialogBox").addClass('on');
    $("#dialogBox .todayGame").addClass('on');
})


// 新聞內頁跳頁
$('.newsRef').click(function() {
    let data = $(this).data('news');
    var newsRef_src = `newsRef/news_${data}.html`;
    $.ajax({
        url: newsRef_src,
        success: function(html) {
            $("#newsRef_cnt").html(html);
            window.scrollTo({ top: 0 });
        },
        error: function(error) {
            location.href = "#/home"
        }
    });
})