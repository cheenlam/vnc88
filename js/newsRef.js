var newsRef_Data = [{
    img: 'images/newsRef/newsRef15-01.jpg',
    txt: 'Xác nhận phí chuyển nhượng của Saul, Man Utd đối đầu 2 ông lớn EPL',
    href: 15,
}, {

    img: 'images/newsRef/newsRef16-01.jpg',
    txt: 'Rob Holding muốn Arsenal đi theo con đường của Liverpool',
    href: 16,
}, {
    img: 'images/newsRef/newsRef17-01.jpg',
    txt: 'Bán Sancho chiêu mộ thêm 3 tân binh, đội hình Dortmund mùa tới ra sao?',
    href: 17,
}, {
    img: 'images/newsRef/newsRef18-01.jpg',
    txt: 'Hạ màn vòng bảng Olympic: Sao Arsenal nhạt nhòa; Real nở mày nở mặt',
    href: 18,
}, ]

newsRef_Data.forEach(function(data) {
    let combination = `<li>
                        <a href="#/newsRef" class="newsRef" data-news="${data.href}">
                            <img src="${data.img}">
                            <p>${data.txt}</p>
                        </a>  
                     </li>`
    $('#newsRef_hot ul,#newsRef_imp ul').append(combination);
})