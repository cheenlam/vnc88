$('#lotteryRef_more .mainMsg-title').text('閱讀更多');

var lotteryRef_Data = [{
    img: 'images/news_main.jpg',
    txt: 'Động thái bất ngờ của Pogba khi chưa trở về M.U tập trung',
    href: 1,
}, {
    img: 'images/news_main_02.jpg',
    txt: '6 siêu cò khuynh đảo TTCN: Raiola và Mendes thua trùm đại diện cho 2 sao Chelsea',
    href: 1,
}, {
    img: 'images/news_main_03.jpg',
    txt: 'Không phải Sancho hay Varane, đây mới là thương vụ khôn ngoan nhất của Man Utd',
    href: 1,
}, ]

lotteryRef_Data.forEach(function(data) {
    let combination = `<li>
                        <a href="#/lotteryRef?p=${data.href}">
                            <img src="${data.img}">
                            <p>${data.txt}</p>
                        </a>  
                     </li>`
    $('#lotteryRef_more ul').append(combination);
})