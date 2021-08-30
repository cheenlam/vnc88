function Router() {
    this.routes = {};
    this.currentUrl = '';
}

Router.prototype.route = function(path, callback) {
    this.routes[path] = callback || function() {};
    //给不同的hash设置不同的回调函数
};
Router.prototype.refresh = function() {
    // 路由清單
    let routerList = ['', 'home', 'lottery', 'news', 'broadcast', 'forum', 'resources', 'game', 'member', 'member/message', 'member/changePwd', 'member/wallet'];

    for (let i = 0; i < 99; i++) {
        routerList.push(`home/news?list=${i}`)
        routerList.push(`news/news?list=${i}`)
        routerList.push(`lottery/news?list=${i}`)
    }

    for (let i = 0; i < 99; i++) {
        routerList.push(`newsRef?p=${i}`)
        routerList.push(`lotteryRef?p=${i}`)

        routerList.push(`news?p=${i}`)
        routerList.push(`lottery?p=${i}`)
        routerList.push(`resources?p=${i}`)

        routerList.push(`betRef?p=${i}`)
    }

    // console.log(location.hash.slice(1)); 
    //获取到相应的hash值
    let index = routerList.indexOf(location.hash.slice(2))
    if (index == -1) {
        this.currentUrl = '/home'
        location.href = "#/home"
    } else {
        this.currentUrl = location.hash.slice(1) || '/home';
    }
    // this.currentUrl = location.hash.slice(1) || '/home'; 
    //如果存在hash值则获取到，否则设置hash值为/
    // console.log(this.currentUrl);
    if (this.currentUrl && this.currentUrl != '/') {
        this.routes[this.currentUrl](); //根据当前的hash值来调用相对应的回调函数
    }

};
Router.prototype.init = function() {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}

//给window对象挂载属性
window.Router = new Router();
window.Router.init();

// 路由呼叫路徑
Router.route('/home', function() {
    mainInclude('page/home.html');
    menuList_on(0);
    let data = [
        { name: "TRANG CHỦ" }
    ];
    chCrumb(data);
});
Router.route('/lottery', function() {
    mainInclude('page/lottery.html');
    menuList_on(1);

    let data = [
        { name: "Đề xuất cá cược" }
    ];
    chCrumb(data);

});
Router.route('/news', function() {
    mainInclude('page/news.html');
    menuList_on(2);

    let data = [
        { name: "Tin tức" }
    ];
    chCrumb(data);
});
Router.route('/broadcast', function() {
    mainInclude('page/broadcast.html');
    menuList_on(3);

    let data = [
        { name: "Video đá bóng" }
    ];
    chCrumb(data);
});
Router.route('/forum', function() {
    mainInclude('page/forum.html');
    menuList_on(4);

    let data = [
        { name: "Diễn đàn thảo luận" }
    ];
    chCrumb(data);
});
Router.route('/resources', function() {
    mainInclude('page/resources.html');
    menuList_on(5);

    let data = [
        { name: "Thông tin" }
    ];
    chCrumb(data);
});
Router.route('/game', function() {
    mainInclude('page/game.html');
    menuList_on(6);

    let data = [
        { name: "trò chơi" }
    ];
    chCrumb(data);
});

Router.route('/member', function() {
    mainInclude('page/mbrMsg.html');
    $('#hd_menu li').removeClass('on')

    let data = [
        { href: "#/member", name: "Thông tin tài khoản" },
        { name: "帳戶資料" }
    ];
    chCrumb(data);
});

Router.route('/member/message', function() {
    mainInclude('page/mbrMsg.html');
    $('#hd_menu li').removeClass('on')

    let data = [
        { href: "#/member", name: "Thông tin tài khoản" },
        { name: "帳戶資料" }
    ];
    chCrumb(data);
});

Router.route('/member/changePwd', function() {
    mainInclude('page/changePwd.html');
    $('#hd_menu li').removeClass('on')

    let data = [
        { href: "#/member", name: "Thông tin tài khoản" },
        { name: "變更密碼" }
    ];
    chCrumb(data);
});


// api新聞
for (let i = 0; i < 99; i++) {
    // 首頁新聞
    Router.route(`/home/news?list=${i}`, function() {
        mainInclude('page/newsCnt/news_home.html');
        menuList_on(0);
        sessionStorage.setItem('news_h', i)

        let data = [
            { href: "#/home", name: "TRANG CHỦ" },
        ];

        if (i < 6) {
            data.push({ name: "Tin quan trọng" })
        } else {
            data.push({ name: "Tin hot" })
        }
        chCrumb(data);
    });

    // 新聞內頁新聞
    Router.route(`/news/news?list=${i}`, function() {
        mainInclude('page/newsCnt/news_news.html');
        menuList_on(2);
        sessionStorage.setItem('news_n', i)

        let data = [
            { href: "#/news", name: "Tin tức" },
        ];

        if (i < 7) {
            data.push({ name: "Tin quan trọng" })
        } else {
            data.push({ name: "Tin hot" })
        }
        chCrumb(data);
    });

    // 博彩內頁新聞
    Router.route(`/lottery/news?list=${i}`, function() {
        mainInclude('page/newsCnt/news_lottery.html');
        menuList_on(1);
        sessionStorage.setItem('news_l', i);


        let data = [
            { href: "#/lottery", name: "Đề xuất cá cược" },
        ];

        if (i < 6) {
            data.push({ name: "Tin quan trọng" })
        } else {
            data.push({ name: "Tin hot" })
        }
        chCrumb(data);
    });
}


// ======================================================
for (let i = 1; i < 99; i++) {
    Router.route(`/newsRef?p=${i}`, function() {
        location = location
        mainInclude(`newsRef/newsRef_${i}.html`);
        menuList_on(0);
        sessionStorage.setItem('new_newsRef', i);
        sessionStorage.setItem('new_lottery', 0);

        let data = [
            { href: "#/lottery", name: "Đề xuất cá cược" },
            { name: "Tin hot" }
        ];
        chCrumb(data);
    });

    Router.route(`/lotteryRef?p=${i}`, function() {
        location = location
        mainInclude(`lotteryRef/lotteryRef_${i}.html`);
        menuList_on(0);

        let data = [
            { href: "#/home", name: "TRANG CHỦ" },
        ];

        if (i == 1) {
            data.push({ name: "Danh sách" })
        } else {
            data.push({ href: "#/lotteryRef?p=1", name: "Danh sách" })
            data.push({ name: "Tin hot" })
        }
        chCrumb(data);
    });

    Router.route(`/news?p=${i}`, function() {
        location = location
        mainInclude(`page/news/news_${i}.html`);
        menuList_on(2);
        sessionStorage.setItem('new_selfNews', i);
        sessionStorage.setItem('new_lottery', 0);

        let data = [
            { href: "#/news", name: "Tin tức" },
            { name: "Tin hot" }
        ];
        chCrumb(data);
    });

    Router.route(`/lottery?p=${i}`, function() {
        location = location
        mainInclude(`page/lottery/lottery_${i}.html`);
        menuList_on(1);
        sessionStorage.setItem('new_lottery', i);
        sessionStorage.setItem('new_newsRef', 0);

        let data = [
            { href: "#/lottery", name: "Đề xuất cá cược" },
            { name: "Tin quan trọng" }
        ];
        chCrumb(data);
    });

    Router.route(`/resources?p=${i}`, function() {
        location = location
        mainInclude(`page/resources/resources_${i}.html`);
        menuList_on(5);
        sessionStorage.setItem('new_resources', i)

        let data = [
            { href: "#/resources", name: "Thông tin" },
            { name: "Tin hot" }
        ];
        chCrumb(data);
    });

    Router.route(`/betRef?p=${i}`, function() {
        location = location
        mainInclude(`betRef/betRef_${i}.html`);
        menuList_on(1);
    });
}

function mainInclude(src) {
    $.ajax({
        url: src,
        success: function(html) {
            $("#content").html(html);
        },
        // 發送前
        beforeSend: function() {},
        // 完成
        complete: function() {},
        error: function(error) {
            location.href = "#/home"
        }
    });
}

function chCrumb(data) {
    indexVue.crumb = data;
    window.scrollTo({ top: 0 });
}

function menuList_on(index) {
    $('#hd_menu li').removeClass('on')
    $(`#hd_menu li:eq(${index})`).addClass('on')
}