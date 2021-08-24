Vue.createApp({
    data() {
        return {
            newSelf:news_selfNews,
            newsMenu: lotteryNews,
            resourcesNum:0,
            lotteryNum:0,
            newsRefNum:0,
            newsSelfNum:0,
        };
    },
    methods: {
        getbgi(data) {
            return `background-image: url(${data})`;
        },
        reHref(hot, index) {
            if (hot) {
                return `#/newsRef?p=${index+1}`
            } else {
                return `#/lottery?p=${index+2}`
            }
        },
        reHref_l(index){
            return `#/lotteryRef?p=${index+2}`
        },
        reHref_r(index){
            return `#/resources?p=${index+1}`
        },
        getLocal(){
            this.resourcesNum = sessionStorage.getItem("new_resources");
            this.lotteryNum = sessionStorage.getItem("new_lottery");
            this.newsRefNum = sessionStorage.getItem("new_newsRef");
            this.newsSelfNum = sessionStorage.getItem("new_selfNews");
        }
    },
    mounted() {
        this.getLocal()
    },
}).mount("#page");