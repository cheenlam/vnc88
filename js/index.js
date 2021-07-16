// header按鈕動作
$('#hd_signIn .btn').click(function () {
    let getData = $(this).attr('data-btn')
    switch (getData) {
        case 'signIn':
            $('#hd_signIn').attr('data-signIn', 1); break;
        case 'regd':
            $("#dialogBox").addClass('on');
            $("#dialogBox .regd").addClass('on');
            break;
        case 'signOut':
            $('#hd_signIn').attr('data-signIn', 0); break;
        case 'mbrMsg': break;
    }
})

// 初始偵測上方滿版容器高度,設定浮動欄位位置
$(document).ready(function () {
    let contH = $('.contBox-max').height();
    $('#leftTool,#rightTool').css('top', contH + 20)
    window.scrollTo({ top: 0 });
    dialog()
})

var scroll = $(window).scroll(function () {
    floatMenu();
    floatTool();
});

$(window).resize(function () {
    floatTool();
    window.scrollTo({ top: 0 });
})

function floatMenu() {
    let topH = $('#hd_top').height();
    if (scroll.scrollTop() > topH) {
        $('#hd_menu').addClass('on');
    } else {
        $('#hd_menu').removeClass('on');
    }
}

function floatTool() {
    let allH = $('.contBox-max').height() + $('.header').height()
    let menuH = $('#hd_menu').height();
    let contH = $('.contBox-max').height();

    if (scroll.scrollTop() > allH - menuH) {
        $('#leftTool,#rightTool').css('position', 'fixed').css('top', menuH + 10)
    } else {
        $('#leftTool,#rightTool').css('position', 'absolute').css('top', contH + 20)
    }
}

//置頂按扭滑動
$('#goTop').click(function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 頁尾廣告關閉
$('.ftAd_close').click(function () {
    $(this).parents('div').addClass('on')
})


// 彈跳視窗
function dialog() {
    $.ajax({
        url: 'page/dialog.html',
        success: function (html) {
            $("#dialogCnt").html(html);
        }
    });
}

$('#hd_forget').click(function () {
    $("#dialogBox").addClass('on');
    $("#dialogBox .forget").addClass('on');
})
