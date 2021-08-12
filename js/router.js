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
    let routerList = ['', 'home', 'lottery', 'news', 'broadcast', 'forum', 'resources', 'game','member','member/message','member/changePwd','member/wallet'];

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
});
Router.route('/lottery', function() {
    mainInclude('page/lottery.html');
    menuList_on(1);
});
Router.route('/news', function() {
    mainInclude('page/news.html');
    menuList_on(2);
});
Router.route('/broadcast', function() {
    mainInclude('page/broadcast.html');
    menuList_on(3);
});
Router.route('/forum', function() {
    mainInclude('page/forum.html');
    menuList_on(4);
});
Router.route('/resources', function() {
    mainInclude('page/resources.html');
    menuList_on(5);
});
Router.route('/game', function() {
    mainInclude('page/game.html');
    menuList_on(6);
});

Router.route('/member', function() {
    mainInclude('page/mbrMsg.html');
   $('#hd_menu li').removeClass('on')
});

Router.route('/member/message', function() {
    mainInclude('page/mbrMsg.html');
   $('#hd_menu li').removeClass('on')
});

Router.route('/member/changePwd', function() {
    mainInclude('page/changePwd.html');
   $('#hd_menu li').removeClass('on')
});


for (let i = 1; i < 99; i++) {
    Router.route(`/newsRef?p=${i}`, function() {
        location = location
        mainInclude(`newsRef/newsRef_${i}.html`);
        menuList_on(0);
    });

    Router.route(`/lotteryRef?p=${i}`, function() {
        location = location
        mainInclude(`lotteryRef/lotteryRef_${i}.html`);
        menuList_on(0);
    });

    Router.route(`/news?p=${i}`, function() {
        location = location
        mainInclude(`page/news/news_${i}.html`);
        menuList_on(2);
    });

    Router.route(`/lottery?p=${i}`, function() {
        location = location
        mainInclude(`page/lottery/lottery_${i}.html`);
        menuList_on(1);
    });

    Router.route(`/resources?p=${i}`, function() {
        location = location
        mainInclude(`page/resources/resources_${i}.html`);
        menuList_on(5);
    });

    Router.route(`/betRef?p=${i}`, function() {
        location = location
        mainInclude(`betRef/betRef_${i}.html`);
        menuList_on(1);
    });
}


// home lottery news broadcast forum resources game

function mainInclude(src) {
    $.ajax({
        url: src,
        success: function(html) {
            $("#content").html(html);
        },
        // 發送前
        beforeSend: function() {

        },
        // 完成
        complete: function() {
            $('#loading').addClass('on')
        },
        error: function(error) {
            location.href = "#/home"
        }
    });
}

function menuList_on(index) {
    $('#hd_menu li').removeClass('on')
    $(`#hd_menu li:eq(${index})`).addClass('on')
}