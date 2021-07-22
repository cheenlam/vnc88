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
    let getH = $('.contBox-full .contBox-min').offset().top -$('#hd_menu').height();
    if(scroll.scrollTop() > getH){
        $('#leftTool,#rightTool').addClass('on')
    }else{
        $('#leftTool,#rightTool').removeClass('on')
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


