// ======== index ========
// 主架構menu
var menuData = {
    txtList: [
        { href: "#/home", txt: "TRANG CHỦ", switch: true },
        { href: "#/lottery", txt: "Đề xuất cá cược", switch: true },
        { href: "#/news", txt: "Tin tức", switch: true },
        { href: "#/broadcast", txt: "Video đá bóng", switch: true },
        { href: "#/forum", txt: "Diễn đàn thảo luận", switch: false },
        { href: "#/resources", txt: "Thông tin", switch: true },
    ],
    picture: [
        { href: "#/game", img: "images/menu_gameBtn.png", switch: false },
    ]
}

// ======== home ========
// 足球投注排行
var betList = {
        title: {
            title_01: "vnc88",
            title_02: "Kèo nhà cái - kèo bóng đá trực tuyến tại vnc88",
        },
        list: [{
                betLogo: "images/logo/betLogo-1.png",
                price: "3,800,000",
                num: 5,
                href_out: "https://fun213213.com/euxc",
                href_self: "#/betRef?p=1",
                menuImg: "images/logo/betImg-1.jpg"
            },
            {
                betLogo: "images/logo/betLogo-2.png",
                price: "3,800,000",
                num: 4.5,
                href_out: "https://8123b.com/?inviteCode:26011561",
                href_self: "#/betRef?p=2",
                menuImg: "images/logo/betImg-2.jpg"
            },
            {
                betLogo: "images/logo/betLogo-3.png",
                price: "3,800,000",
                num: 4,
                href_out: "https://www.q8vn.com/",
                href_self: "#/betRef?p=3",
                menuImg: "images/logo/betImg-3.jpg"
            },
            {
                betLogo: "images/logo/betLogo-4.png",
                price: "99,000",
                num: 3.5,
                href_out: "https://jinbo989898.com/hpmifr",
                href_self: "#/betRef?p=4",
                menuImg: "images/logo/betImg-4.jpg"
            },
            {
                betLogo: "images/logo/betLogo-5.png",
                price: "9,999",
                num: 2.5,
                href_out: "https://www.ae3888.com/?agt=amg668",
                href_self: "#/betRef?p=5",
                menuImg: "images/logo/betImg-5.jpg"
            },
        ]
    }

// 投注連結(小輪播右側)
var homeRec = [{
        img: "images/firmBanner-01.jpg",
        title: "Kèo nhà cái: Nhận định trận đấu Anh vs Scotland",
        msg: "Cuộc đối đầu giữa Anh vs Scotland tại Vòng bảng EURO 2020 vào lúc 02h00 ngày 19/6 được"
    },
    {
        img: "images/firmBanner-02.jpg",
        title: "Kèo nhà cái: Nhận định trận đấu Anh vs Scotland Kèo nhà cái: Nhận định trận đấu Anh vs Scotland",
        msg: "Cuộc đối đầu giữa Anh vs Scotland tại Vòng bảng EURO 2020 vào lúc 02h00 ngày 19/6 được Cuộc đối đầu giữa Anh vs Scotland tại Vòng bảng EURO 2020 vào lúc 02h00 ngày 19/6 được"
    },
]

// 網站介紹
var homeWsDict = {
    img: "images/wsDictImg.jpg",
    title:'Trang vnc88',
    txtList: [
        "Được xếp vào một trong những trang web TOP nổi tiếng nhất tại Việt Nam, đặc biệt mang đến cho độc giả những tin thể thao hết sức hấp dẫn, đặc biệt là xoay quanh nội dung về các mùa giải bóng đá lớn trên Thế giới.",
        "Có thể nhắc tới những chuyên mục nổi bật và được yêu thích nhất của vnc88 như: Kèo nhà cái (cập nhật tỷ lệ kèo mới nhất), truyền hình trực tiếp bóng đá giải đấu Champions League, Ngoại Hạng Anh, Serie A, La liga, Bundesliga…hay các giải đấu của các đội tuyển quốc gia như World Cup Euro đã phục vụ cho những khán giả có niềm đam mê với thể thao.",
        "vnc88 thường xuyên nâng cấp cơ sở vất chất, đầu tư nhân lực để đảm bảo quá trình trực tiếp bóng đá các trận cầu đỉnh cao luôn cho chất lượng hình ảnh tốt nhất, âm thanh chân thực xuyên suốt qua trinh tường thuật luôn luôn có BLV tham gia bình luận các trận đấu để tạo thêm không khí sôi nổi cho người xem.",
        "Hiện nay thương hiệu VNC88 đang không ngừng phát triển lớn mạnh, và chúng tôi không ngừng cố gắng cho những mục tiêu lớn nhằm mang đến cho người xem những dịch vụ tốt nhất và hoàn toàn Miễn Phí",
    ]
}

// ======== news ========
// 消息新聞
var news_selfNews = [{
            href: "#/news?p=7",
            img: "images/newsRef/newsList7-01.jpg",
            title: "Cách chơi trò chơi",
            msg: "Baccarat Baccarat là một trong các trò chơi trong Casino được nhiều chuyên gia cho rằng có nhiều khả năng thắng nhất đối với người chơi. Như các bạn cũng đ&",
            time: "27-06 00:52"
        },
        {
            href: "#/news?p=8",
            img: "images/newsRef/newsList8-01.jpg",
            title: "Xổ số- cờ bạc hay trò chơi giải trí?",
            msg: "Xổ số là trò chơi không phải dành cho người nghèo và nếu Nhà nước biết cách quản lý thì sẽ phát huy được lợi ích của",
            time: "24-06 19:53"
        },
        {
            href: "#/news?p=9",
            img: "images/newsRef/newsList9-01.jpg",
            title: "Tình tiết mới vụ nhầm kết quả xổ số ở Hậu Giang: Giám đốc cty xổ số nói gì với quay phim?",
            msg: "TPO - Khi em thiếu nhi rút nhầm thẻ số 7, một thành viên Hội đồng Giám sát (HĐGS) Xổ số kiến thiết (XSKT) tỉnh thắc mắc. Thư ký HĐGS đi xác minh, qu&aac",
            time: "17-06 07:44"
        },
        {
            href: "#/news?p=10",
            img: "images/newsRef/newsList10-01.jpg",
            title: "Phá đường dây ghi lô đề hơn 15 tỷ",
            msg: "Giang, Sơn, Pháp cùng hơn 50 người thành lập đường dây đánh bạc bằng hình thức ghi lô đề. Trong 3 tháng, số tiền nhóm nghi phạm giao dịch l",
            time: "11-06 18:09"
        },
        {
            href: "#/news?p=11",
            img: "images/newsRef/newsList11-01.jpg",
            title: "Người trúng thưởng xổ số được yêu cầu giữ bí mật thông tin",
            msg: "Đó là một trong những đề xuất mà Bộ Tài chính đưa ra để lấy ý kiến tại Dự thảo Thông tư hướng dẫn hoạt động kinh doanh xổ số tự chọn số điện toán",
            time: "10-06 22:57"
        },
        {
            href: "#/news?p=12",
            img: "images/newsRef/newsList12-01.jpg",
            title: "Mỹ tặng tiền, bia, mở xổ số 1 triệu USD cổ vũ dân tiêm vắc xin COVID-19",
            msg: "TTO - Chính quyền các bang và doanh nghiệp Mỹ đang dùng đủ mọi cách từ tặng tiền, xổ số đến đăng quảng cáo... để khuyến khích người dân đi ti&eci",
            time: "07-06 20:44"
        },
        {
            href: "#/news?p=13",
            img: "images/newsRef/newsList13-01.jpg",
            title: "Thu ngân sách từ thuế vẫn tăng mạnh bất chấp dịch bệnh",
            msg: "Trong tháng 5, tổng thu ngân sách Nhà nước do cơ quan Thuế quản lý ước đạt 73.000 tỷ đồng, tương đương 6,5% dự toán và tăng 20,1% so với cùng kỳ",
            time: "07-06 18:39"
        },
        {
            href: "#/news?p=14",
            img: "images/newsRef/newsList14-01.jpg",
            title: "Vứt nhầm 12 tờ vé số trị giá 180 triệu, cả xóm lục tung thùng rác tìm giữa đêm khuya",
            msg: 'Được biết, chiếc vé cuối cùng cũng đã chịu "xuất đầu lộ diện" trong một thùng rác ở góc phố!Mới đây, một xóm nhỏ tại huyện Thạnh Hóa',
            time: "06-06 21:48"
        },
    ]

// ======== broadcast ========
// live標題,廣告,聊天室icons
var mvLive = {
    title: {
        img: "images/icon/hot.gif",
        txt: "Truyền hình trực tiếp"
    },
    banner: {
        main: "images/videoBanner-01.jpg",
        ad: [
            "images/chatAd_01.png",
            "images/chatAd_02.png",
            "images/chatAd_03.png",
            "images/chatAd_04.png",
        ]
    },
    chatIcon: [
        "images/icon/i_chat_1.png",
        "images/icon/i_chat_2.png",
        "images/icon/i_chat_3.png",
        "images/icon/i_chat_4.png",
        "images/icon/i_chat_5.png",
        "images/icon/i_chat_6.png",
        "images/icon/i_chat_7.png",
        "images/icon/i_chat_8.png",
        "images/icon/i_chat_9.png",
        "images/icon/i_chat_10.png",
        "images/icon/i_chat_11.png",
        "images/icon/i_chat_12.png",
        "images/icon/i_chat_13.png",
        "images/icon/i_chat_14.png",
        "images/icon/i_chat_15.png",
        "images/icon/i_chat_16.png",
        "images/icon/i_chat_17.png",
        "images/icon/i_chat_18.png",
        "images/icon/i_chat_19.png",
        "images/icon/i_chat_20.png",
    ]
}

// ======== resources ========
// 銀行連結
var bankLink = {
    main: [{
            href: "https://www.agribank.com.vn/",
            img: "images/bank/agri.png",
        },
        {
            href: "https://www.bidv.com.vn/en/ve-bidv",
            img: "images/bank/bidv.png",
        },
        {
            href: "https://www.mbbank.com.vn/",
            img: "images/bank/mb.png",
        },
        {
            href: "https://www.msb.com.vn/",
            img: "images/bank/msb.png",
        },
        {
            href: "https://www.scb.com.vn/eng/homepage",
            img: "images/bank/scb.png",
        },
        {
            href: "https://www.shb.com.vn/",
            img: "images/bank/shb.png",
        },
        {
            href: "https://www.techcombank.com.vn/trang-chu",
            img: "images/bank/techcom.png",
        },
        {
            href: "https://portal.vietcombank.com.vn/Pages/Home.aspx",
            img: "images/bank/vietcom.png",
        },
        {
            href: "https://www.vietinbank.vn/web/home/vn/index.html",
            img: "images/bank/vietin.png",
        },
        {
            href: "https://www.vpbank.com.vn/en/ca-nhan",
            img: "images/bank/vp.png",
        },
    ],
    minor: [{
            href: "https://www.cbbank.vn/",
            txt: "Ngân hàng xây dựng"
        },
        {
            href: "https://www.oceanbank.vn/",
            txt: "Ngân hàng Đại Dương"
        },
        {
            href: "https://www.gpbank.com.vn/",
            txt: "Ngân hàng Dầu Khí Toàn Cầu"
        },
        {
            href: "https://online.acb.com.vn/",
            txt: "Ngân hàng Á Châu"
        },
        {
            href: "https://kienlongbank.com/",
            txt: "Kiên Long"
        },
        {
            href: "https://www.hdbank.com.vn/",
            txt: "Phát triển Thành phố Hồ Chí Minh"
        },
        {
            href: "https://www.vib.com.vn/wps/portal/vn/ca-nhan",
            txt: "Ngân hàng thương mại quốc tế việt nam"
        },
        {
            href: "https://www.vietbank.com.vn/",
            txt: "Ngân hàng Việt Nam"
        },
        {
            href: "https://www.sacombank.com.vn/",
            txt: "Sài Gòn Thương Tín"
        },
        {
            href: "https://www.dongabank.com.vn/",
            txt: "Ngân hàng Đông Á"
        },
        {
            href: "https://www.vietcapitalbank.com.vn/personal",
            txt: "Ngân hàng Bản Việt"
        },
        {
            href: "https://www.namabank.com.vn/",
            txt: "Nam Á"
        },
        {
            href: "https://www.ocb.com.vn/en/",
            txt: "Phương Đông"
        },
        {
            href: "https://www.baca-bank.vn/SitePages/trang-chu.aspx",
            txt: "Ngân hàng Bắc Á"
        },
        {
            href: "https://www.ncb-bank.vn/en/about",
            txt: "Quốc Dân"
        },
        {
            href: "https://lienvietpostbank.com.vn/",
            txt: "Bưu điện Liên Việt"
        },
        {
            href: "https://www.seabank.com.vn/site#/",
            txt: "Ngân hàng Đông Nam Á"
        },
        {
            href: "https://abbl.com/",
            txt: "Ngân hàng An Bình"
        },
        {
            href: "https://www.vietabank.com.vn/",
            txt: "Việt Á"
        },
        {
            href: "https://www.pvcombank.com.vn/",
            txt: "Đại chúng Việt Nam"
        },
        {
            href: "https://www.baovietbank.vn/",
            txt: "Ngân hàng Bảo Việt"
        },
        {
            href: "https://home.pgbank.com.vn/Landing/Welcome.aspx",
            txt: "Xăng dầu Petrolimex"
        },
    ]
}

// 彩票公司連結
var lottoryLink = {
    main: [{
            href: "https://www.awin77g.com",
            img: "images/bank/tuDienXoSo.png",
            txt: "Từ điển xổ số"
        },
        {
            href: "https://www.awin77g.com",
            img: "images/bank/hoChiMinh.png",
            txt: "CÔNG TY TNHH MTV SỔ XỐ KIẾN THIẾT TP.HỒ CHÍ MINH"
        },
        {
            href: "http://xsktmiennam.vn",
            img: "images/bank/ichNuocLoiNha.png",
            txt: "XỐ SỔ KIẾN THIẾT KHU VỰC MIỀN NAM ÍCH NƯỚC-LỢI NHÀ"
        },
        {
            href: "http://xosophutho.vn",
            img: "images/bank/xoSoKienThiet.png",
            txt: "ỦY BAN NHÂN DÂN TỈNH PHÚ THỌ CÔNG TY TNHH MTV XỔ SỐ KIẾN THIẾT PHÚ THỌ"
        },
        {
            href: "https://xsktdongthap.vn",
            img: "images/bank/dongThap.png",
            txt: "CÔNG TY TNHH MỘT THÀNH VIÊN XỔ SỐ KIẾN THIẾT TỈNH ĐỒNG"
        },
    ],
    minor: [{
            herf: "http://www.xosodalat.com.vn/",
            txt: "ĐÀ LẠT"
        },
        {
            herf: "https://www.xskthcm.com/",
            txt: "(TP)Hồ Chí Minh"
        },
        {
            herf: "http://www.xosocamau.com/",
            txt: "Cà Mau"
        },
        {
            herf: "http://xosobariavungtau.com.vn/",
            txt: "Vũng Tàu"
        },
        {
            herf: "https://xosobentre.com.vn/",
            txt: "Bạc Liêu"
        },
        {
            herf: "http://xosodongnai.com.vn/",
            txt: "Đồng Nai"
        },
        {
            herf: "http://xsktcantho.com.vn/",
            txt: "Cần Thơ"
        },
        {
            herf: "http://xsktsoctrang.vn/",
            txt: "Sóc Trăng"
        },
        {
            herf: "https://xosotayninh.com.vn/trang-chu",
            txt: "Tây Ninh"
        },
        {
            herf: "http://www.xsktangiang.com.vn/",
            txt: "An Giang"
        },
        {
            herf: "https://www.xosobinhthuan.com.vn/",
            txt: "Bình Thuận"
        },
        {
            herf: "https://xosovinhlong.com.vn/",
            txt: "Vĩnh Long"
        },
        {
            herf: "https://www.xosobinhduong.com.vn/",
            txt: "Bình Dương"
        },
        {
            herf: "http://xosotravinh.vn/trang-chu",
            txt: "Trà Vinh"
        },
        {
            herf: "http://xosolongan.vn/trang-chu",
            txt: "Quốc Dân"
        },
        {
            herf: "https://lienvietpostbank.com.vn/",
            txt: "Long An"
        },
        {
            herf: "https://xosobinhphuoc.vn/",
            txt: "Bình Phước"
        },
        {
            herf: "https://xskthaugiang.vn/",
            txt: "Hậu Giang"
        },
        {
            herf: "http://www.xskttg.com.vn/",
            txt: "Tiền Giang"
        },
        {
            herf: "http://xosokiengiang.vn/",
            txt: "Kiên Giang"
        },
        {
            herf: "https://xsktdongthap.vn/",
            txt: "Đồng Tháp"
        },
        {
            herf: "http://xosogialai.com.vn/",
            txt: "Gia Lai"
        },
        {
            herf: "http://xosogialai.com.vn/",
            txt: "Gia Lai"
        },
        {
            herf: "http://xsktquangnam.vn/",
            txt: "Quảng Nam"
        },
        {
            herf: "http://xosophuyen.vn/",
            txt: "Phú Yên"
        },
        {
            herf: "http://xosoquangngai.com.vn/",
            txt: "Quảng Ngãi"
        },
        {
            herf: "http://www.xosoquangtri.com.vn/",
            txt: "Quảng Trị"
        },
        {
            herf: "http://www.xosokhanhhoa.com.vn/",
            txt: "Khánh Hòa"
        },
        {
            herf: "http://xsktdaklak.vn/",
            txt: "Đắc Lắc"
        },
        {
            herf: "http://xosohue.com.vn/",
            txt: "Thừa Thiên Huế"
        },
        {
            herf: "http://xosobinhdinh.com.vn/",
            txt: "Bình Định"
        },
        {
            herf: "http://xosoquangbinh.vn/",
            txt: "Quảng Bình"
        },
        {
            herf: "http://xosoninhthuan.com.vn/",
            txt: "Ninh Thuận"
        },
        {
            herf: "http://www.xosokontum.vn/",
            txt: "Kon Tum"
        },
        {
            herf: "http://www.xsktdanang.com/",
            txt: "Đà Nẵng"
        },
        {
            herf: "http://xskt.daknong.gov.vn/",
            txt: "Đắk Nông"
        },
        {
            herf: "http://xosomb.com.vn/",
            txt: "Hà Nội"
        },
    ]
}

var resNews = [{
        img: "images/newsRef/resources1-01.jpg",
        title: "Hội Nghị Đại Biểu Người Lao Động Công Ty TNHH Một Thành Viên Xổ Số Kiến Thiết Thành Phố Năm 2021"
    },
    {
        img: "images/newsRef/resources2-01.jpg",
        title: "Chi Đoàn Thanh Niên Xổ Số Kiến Thiết Trao Xe Đạp Cho Con Của Người Bán Vé Số Lẻ Hiếu Học Có Hoàn Cảnh Khó Khăn Và Đạt Thành Tích Trong Học Tập Năm 2020"
    },
    {
        img: "images/newsRef/resources3-01.jpg",
        title: "Đoàn Thanh Niên Công Ty XSKT Thành Phố Tổ Chức Nhiều Hoạt Động Ý Nghĩa Chào Mừng Tháng Thanh Niên 2021"
    },
    {
        img: "images/newsRef/resources4-01.jpg",
        title: "Công Ty Xskt Thành Phố Chào Mừng Ngày Quốc Tế Phụ Nữ 8-3"
    },
    {
        img: "images/newsRef/resources5-01.jpg",
        title: "Công Ty Xổ Số Kiến Thiết Hồ Chí Minh: Thương Hiệu Hàng Đầu Của Xổ Số Kiến Thiết Khu Vực Miền Nam"
    },
    {
        img: "images/newsRef/resources6-01.jpg",
        title: "Đoàn Công Tác Công Ty TNHH MTV XSKT Thành Phố Thăm Và Tặng Quà Cho Công Nhân Có Hoàn Cảnh Khó Khăn Tại Xí Nghiệp In Tài Chính"
    },
    {
        img: "images/newsRef/resources7-01.jpg",
        title: "Hội Nghị Xổ Số Kiến Thiết Khu Vực Miền Nam Lần Thứ 124"
    },
    {
        img: "images/newsRef/resources8-01.jpg",
        title: "Công ty TNHH MTV Xổ số Kiến thiết TPHCM: Nỗ lực vượt khó khăn, đoàn kết, ổn định và giữ vững vị thế dẫn đầu trong ngành xổ số truyền thống"
    },
]

// 常見問題
var resQa = [{
        txtMore: false,
        question: "Thời gian quay thưởng xổ số",
        answer: "Xổ Số Miền Bắc: Có 6 đài xổ số, mỗi ngày có 3 đài mở 27 tổ hợp số, quay thưởng vào lúc 18h. Xổ Số Miền Trung: Có 14 đài xổ số, mỗi ngày có 2 đài mở 18 tổ hợp số, quay thưởng vào lúc 5h15 chiều. Xổ Số Miền Nam: Có 21 đài xổ số, mỗi ngày có 2 đài mở 18 tổ hợp số, quay thưởng vào lúc 6h10 chiều."
    },
    {
        txtMore: false,
        question: "Lô tô",
        answer: "Lô tô tự chọn 2 và 3 chữ số: Người chơi chọn 2 hoặc 3 số, sau đó viết ra một tờ vé, sau đó gửi lại cho đại lý để ký tên tham gia, giá trị giải độc đắc gấp 70 lần vé số bạn đã mua. Lô tô tự chọn các cặp số: Người chơi có thể chọn ngẫu nhiên từ 2 đến 4 cặp số để chơi, sau khi chọn xong người chơi sẽ so sánh kết quả với kết quả xổ số truyền thống trong ngày. Nếu con số chọn trùng với 2 đến 4 cặp số cuối cùng trong xổ số truyền thống thì trúng thưởng. Lô tô 6×36: Chọn một bộ số gồm 6 cặp số và so sánh với kết quả xổ số truyền thống trong ngày, giải thưởng tối đa là 2 tỷ đồng, nếu không có ai trúng thưởng thì giải thưởng được chuyển sang giải nhất tiếp theo cho đến khi có người trúng giải. (Giới hạn giải độc đắc là 5 tỷ đồng)."
    },
    {
        txtMore: false,
        question: "Xổ số bóc",
        answer: "Đây là loại hình xổ số cho phép người mua vé biết ngay kết quả. Vé số được đóng gói và niêm phong cẩn thận, có thể chọn ngẫu nhiên một bó vé số, xé ra sau khi mua và đối chiếu với kết quả xổ số ngay lập tức là có thể biết bản thân đã trúng số hay chưa. Tất nhiên, kết quả phải được chứng kiến giám sát của hội đồng xổ số kiến thiết"
    },
    {
        txtMore: false,
        question: "Xổ số Vietlott ( hay xổ số điện toán)",
        answer: "Vietlott là công ty xổ số điện toán quốc gia do Bộ Tài chính Việt Nam trực tiếp điều hành, được phê duyệt và thành lập vào ngày 05 tháng 12 năm 2011. Nhà nước nắm giữ 100% cổ phần. Chính thức đi vào hoạt động từ ngày 18 tháng 7 năm 2016. Có hai hình thức, là xếp số (vé 3D nghìn ký tự, vé số 4D vạn kí tự) và tổ hợp xếp số (vé tổ hợp 6 số). Dịch vụ xổ số này được ra mắt tại TP. lần đầu tiên. Tính đến nay, Vietlott đã được triển khai tại nhiều thành phố khác như Hà Nội, Hải Phòng, Hạ Long (Quảng Ninh), v.v. Vietlott hiện có 5 trò chơi xổ số: 1. MEGA 6/45 2. POWER 6/55 3. MAX 3D 4. MAX 4D 5. KENO"
    },
]

// ======== lotteryRef ========
// 博彩公司內頁
var lotteryRef_menu = [{
        img: "images/newsRef/lotteryRef2_01.jpg",
        title: "Kèo nhà cái: Nhận định trận đấu Anh vs Scotland",
        msg: "Cuộc đối đầu giữa Anh vs Scotland tại Vòng bảng EURO 2020 vào lúc 02h00 ngày 19/6 được ..."
    },
    {
        img: "images/newsRef/lotteryRef3_01.jpg",
        title: "Nhà cái uy tín Fun88- Vé cược thể thao miễnphí",
        msg: "Nhà cái uy tín Fun88 được thành lập vào ngày 01/06/2008, đã có thâm niên nhiều năm hoạt ..."
    },
    {
        img: "images/newsRef/lotteryRef4_01.jpg",
        title: "Nhà cái uy tín AE888- AE GAMING MƯA LÌ XÌ – GIỮA MÙA HÈ",
        msg: "Nhà cái uy tín AE888 khuyến mãi siêu hấp dẫn tại AE GAMING ☆Nhà cái AE888 là nhà ..."
    },
    {
        img: "images/newsRef/lotteryRef5_01.jpg",
        title: "Cách chơi Baccarat – Hướng dẫn bạn cách thắng tiền tại AE 888",
        msg: "Công thức Baccarat ｜ Baccarat ăn tiền ｜ Baccarat kiếm tiền ｜ Cách chơi Baccarat Nhiều người trong ..."
    },
    {
        img: "images/newsRef/lotteryRef6_01.jpg",
        title: "Kỹ Năng Chơi Baccarat-2 Công Thức Chiến Thắng Baccarat Tại AE SEXY",
        msg: "Kỹ năng chơi Baccarat có rất nhiều cách và phương pháp nhưng sau đây là 2 cách dễ ..."
    },
    {
        img: "images/newsRef/lotteryRef7_01.jpg",
        title: "123BET-NẠP LẦN ĐẦU TẶNG 50%",
        msg: "Tặng 50% giá trị nạp tiền cho lần nạp tiền đầu tiên. ☆Áp dụng cho: Thể Thao, Keno, ..."
    },
    {
        img: "images/newsRef/lotteryRef8_01.jpg",
        title: "FUN88-ĐẶC BIỆT! KHUYẾN MÃI THÀNH VIÊN VIP",
        msg: "TẬN HƯỞNG ƯU ĐÃI VIP LÊN ĐẾN 0.8% Thời gian Khuyến mãi: 01/01/2021 (00:00 giờ GMT+8) cho đến khi ..."
    },
    {
        img: "images/newsRef/lotteryRef7_01.jpg",
        title: "123BET-ĐĂNG KÝ NHẬN NGAY 100K",
        msg: "Đăng ký và tải APP nhận ngay 100k. ☆Nội dung khuyến mãi : 1.Hội viên đăng ký tài ..."
    },
    {
        img: "images/newsRef/lotteryRef8_01.jpg",
        title: "FUN88-THƯỞNG ĐĂNG KÝ 120% TẠI THỂ THAO",
        msg: "THƯỞNG ĐĂNG KÝ – 120% TẠI THỂ THAO SABA. NHẬN ĐẾN 3,800,000 VNĐ TIỀN THƯỞNG ĐĂNG KÝ THỂ ..."
    },
    {
        img: "images/newsRef/lotteryRef4_01.jpg",
        title: "AE888-THƯỞNG 50% NẠP LẦN 2",
        msg: "THƯỞNG 50% NẠP LẦN HAI Thưởng 50% khi nạp tiền lần 2 lên tới 2,888,000 VND ☆Thời gian ..."
    },
]