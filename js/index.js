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
            dialogVerify();
            break;
        case 'signOut':
            $('#hd_signIn').attr('data-signIn', 0);
            break;
        case 'mbrMsg':
            break;
    }
})


$(document).ready(function() {
    setTimeout(function(){
        $('#loading').removeClass('on')  
    },500)
   
    window.scrollTo({ top: 0 });
    dialog();
})

var scroll = $(window).scroll(function() {
    floatMenu();
    floatAd()
});

$(window).resize(function() {
    floatAd()
    $('#hd_menu').removeClass('on')
    // window.scrollTo({ top: 0 });
})

// 上方menu浮動
function floatMenu() {
    let topH = $('#hd_top').height();
    let winW = $(document).width();
    if(winW > 1250){
        if (scroll.scrollTop() > topH ) {
            $('#hd_menu').addClass('on');
        } else {
            $('#hd_menu').removeClass('on');
        }
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

function getNews_h(){
    // 主新聞
    $.ajax({
        url: "https://vnc88.awgstudio.com/api/homenews/top",
        dataType: "json",
        success: function(data) {
            $('#news_mainImg').css('background-image', `url(${data.img})`);
            $('#news_mainImg p').text(data.title);
        },
    });
    
     // 下方新聞列
    $.ajax({
        url: "https://vnc88.awgstudio.com/api/homenews/bottom",
        dataType: "json",
        success: function(data) {   
            let news_b = '';
            for (let i = 0; i < 4; i++) {
                news_b += `<li>
                        <a href="#/home/news/list=${i+2}">
                            <div class="img" style="background-image: url(${data[i].img});"></div>
                        </a>
                        <p>${data[i].title}</p>
                    </li>`
            }
            $('#mainNews_b ul').html(news_b);
        },
    });

     // 右側新聞列
    $.ajax({
        url: "https://vnc88.awgstudio.com/api/homenews/list",
        dataType: "json",
        success: function(data) { 
            data.forEach(function(data,index){
                let combination = `<li>
                                <a href="#/home/news/list=${index + 6}">
                                    <div class="newsList_img" style="background-image: url(${data.img});"></div>
                                </a>
                                <p>${data.title}</p>
                            </li>` 
                $('#newsList_cnt ul').append(combination);
            }); 
        },
    });
}



$('#hd_forget').click(function() {
    $("#dialogBox").addClass('on');
    $("#dialogBox .forget").addClass('on');
    forgetVerify()
})

$('#getGift').click(function() {
    $("#dialogBox").addClass('on');
    $("#dialogBox .newGift").addClass('on');
})

$('#todayGame').click(function() {
    $("#dialogBox").addClass('on');
    $("#dialogBox .todayGame").addClass('on');
})

// 小視窗按鈕點擊
$('#menuBar').click(function(){
    $('#hd_menu').addClass('on')
})

$('#hd_menu li').click(function(){
    $('#hd_menu').removeClass('on')
})
