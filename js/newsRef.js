Vue.createApp({
    data() {
        return {
            newSelf: news_selfNews,
            newsMenu: {
                newsMain: lotteryRef_menu,
                newsHot: '',
            },
            resNews: resNews,

            resourcesNum: 0,
            lotteryNum: 0,
            newsRefNum: 0,


            newsSelfNum: 0,
            lotteryRefNum: 0,
        };
    },
    methods: {
        getbgi(data) {
            return `background-image: url(${data})`;
        },
        reHref(hot, index) {
            if (hot) {
                return `#/home/news?list=${index+6}`
            } else {
                return `#/lotteryRef?p=${index+2}`
            }
        },

        reHref_l(index) {
            return `#/lotteryRef?p=${index+2}`
        },
        reHref_r(index) {
            return `#/resources?p=${index+1}`
        },
        getLocal() {
            this.resourcesNum = sessionStorage.getItem("new_resources");
            this.lotteryNum = sessionStorage.getItem("new_lottery");
            this.newsRefNum = sessionStorage.getItem("new_newsRef");
            this.newsSelfNum = sessionStorage.getItem("new_selfNews");


            this.lotteryRefNum = sessionStorage.getItem("new_lotteryRef");
        },
        getMenu() {
            let self = this;
            let chReady = [false];

            function ready() {
                if (chReady[0]) {
                    indexVue.onLoad = false;
                }
            }

            $.ajax({
                url: "https://www.vnc8888.com/api/homenews/list",
                dataType: "json",
                success: function(data) {
                    self.newsMenu.newsHot = data;
                    self.$nextTick(function() {
                        chReady[0] = true;
                        ready();
                    })
                },
            });

        },
    },
    mounted() {
        this.getMenu();
        this.getLocal();
        indexVue.onLoad = true;
        this.$nextTick(function() {
            setTimeout(function() {
                indexVue.onLoad = false;
            }, 300)
        })
    },
}).mount("#page");