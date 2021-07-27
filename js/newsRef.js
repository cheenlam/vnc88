var newsRef_Data = [{
    img: 'images/news_main.jpg',
    txt: 'Động thái bất ngờ của Pogba khi chưa trở về M.U tập trung',
}, {
    img: 'images/news_main_02.jpg',
    txt: '6 siêu cò khuynh đảo TTCN: Raiola và Mendes thua trùm đại diện cho 2 sao Chelsea',
}, {
    img: 'images/news_main_03.jpg',
    txt: 'Không phải Sancho hay Varane, đây mới là thương vụ khôn ngoan nhất của Man Utd',
}, {
    img: 'images/news_main.jpg',
    txt: 'Động thái bất ngờ của Pogba khi chưa trở về M.U tập trung',
}, ]

newsRef_Data.forEach(function(data) {
    let combination = `<li>
                            <img src="${data.img}">
                            <p>${data.txt}</p>
                        </li>`
    $('#newsRef_hot ul,#newsRef_imp ul').append(combination);
})