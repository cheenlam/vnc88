Vue.createApp({
    data() {
        return {
            newsMenu: lotteryNews,
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
        }
    },
    mounted() {},
}).mount("#page");