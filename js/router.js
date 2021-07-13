function Router() {
    this.routes = {};
    this.currentUrl = '';
}

Router.prototype.route = function (path, callback) {
    this.routes[path] = callback || function () { };
    //给不同的hash设置不同的回调函数
};
Router.prototype.refresh = function () {
    // 路由清單
    let routerList = ['','home','lottery','news','broadcast','forum','resources','game']
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
Router.prototype.init = function () {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}

//给window对象挂载属性
window.Router = new Router();
window.Router.init();

// 路由呼叫路徑
Router.route('/home', function() {
    mainInclude('page/home.html');
});
Router.route('/lottery', function() {
    mainInclude('page/lottery.html');
});
Router.route('/news', function() {
    mainInclude('page/news.html');
});
Router.route('/broadcast', function() {
    mainInclude('page/broadcast.html');
});
Router.route('/forum', function() {
    mainInclude('page/forum.html');
});
Router.route('/resources', function() {
    mainInclude('page/resources.html');
});
Router.route('/game', function() {
    mainInclude('page/game.html');
});

// home lottery news broadcast forum resources game

function mainInclude(src) {
    $.ajax({
        url: src,
        success: function(html) {
            $("#content").html(html);
        }
    });
}