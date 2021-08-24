Vue.createApp({
    data() {
        return {
            newsMenu: lotteryNews,
            resourcesNum:1
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
        }
    },
    mounted() {
        this.getLocal()
    },
}).mount("#page");