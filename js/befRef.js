$('#newsRef_hot .mainMsg-title').text('Tin hot');
$('#newsRef_imp .mainMsg-title').text('Tin quan trọng');

var newsRef_Data = [{
    img: 'images/newsRef/newsRef15-01.jpg',
    txt: 'Xác nhận phí chuyển nhượng của Saul, Man Utd đối đầu 2 ông lớn EPL',
    href: 1,
}, {
    img: 'images/newsRef/newsRef15-01.jpg',
    txt: 'Xác nhận phí chuyển nhượng của Saul, Man Utd đối đầu 2 ông lớn EPL',
    href: 2,
}, {

    img: 'images/newsRef/newsRef16-01.jpg',
    txt: 'Rob Holding muốn Arsenal đi theo con đường của Liverpool',
    href: 3,
}, {
    img: 'images/newsRef/newsRef17-01.jpg',
    txt: 'Bán Sancho chiêu mộ thêm 3 tân binh, đội hình Dortmund mùa tới ra sao?',
    href: 4,
}, {
    img: 'images/newsRef/newsRef18-01.jpg',
    txt: 'Hạ màn vòng bảng Olympic: Sao Arsenal nhạt nhòa; Real nở mày nở mặt',
    href: 5,
}, ]

newsRef_Data.forEach(function(data) {
    let combination = `<li>
                        <a href="#/befRef?p=${data.href}">
                            <img src="${data.img}">
                            <p>${data.txt}</p>
                        </a>  
                     </li>`
    $('#newsRef_hot ul,#newsRef_imp ul').append(combination);
})