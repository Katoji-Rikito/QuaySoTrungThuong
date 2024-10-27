/** @format */

/** Region JQuery sakura */
$(function () {
	$("body")?.sakura();
});

$(window).on("load", function () {
	$("body")?.sakura();
});
/** Endregion JQuery sakura */

/** Region FireworksJS */
const fireworks = new Fireworks.default(document.querySelector("body"));
fireworks.opts.acceleration = 1.0; // Gia tốc
fireworks.opts.autoresize = true; // Tự động thay đổi kích thước khi kích thước của container thay đổi
fireworks.opts.brightness = { min: 0, max: 100 }; // Độ sáng
fireworks.opts.decay = { min: 0.001, max: 0.05 }; // Tốc độ tàn lụi
fireworks.opts.delay = { min: 10.0, max: 100.0 }; // Khoảng thời gian giữa các vụ nổ
fireworks.opts.explosion = 5; // Độ lớn của vụ nổ
fireworks.opts.flickering = 50; // Mức độ nhấp nháy
fireworks.opts.friction = 0.95; // Ma sát ảnh hưởng đến chuyển động
fireworks.opts.gravity = 1.5; // Lực hấp dẫn tác động lên pháo hoa
fireworks.opts.hue = { min: 0, max: 360 }; // Phạm vi màu sắc của pháo hoa
fireworks.opts.intensity = 20; // Cường độ
fireworks.opts.lineStyle = "round"; // Kiểu đường vẽ của pháo hoa
fireworks.opts.mouse = { click: true, move: false, max: 10 }; // Cấu hình tương tác chuột
fireworks.opts.opacity = 0.5; // Độ mờ
fireworks.opts.particles = 50; // Số lượng hạt pháo hoa
fireworks.opts.rocketsPoint = { min: 0, max: 100 }; // Điểm xuất phát
fireworks.opts.traceLength = 1; // Độ dài vệt
fireworks.opts.traceSpeed = 10; // Tốc độ vệt
fireworks.opts.lineWidth = {
	explosion: { min: 0, max: 3 }, // Độ rộng của đường vẽ cho vụ nổ
	trace: { min: 0, max: 2 }, // Độ rộng của đường vẽ cho vệt
};
fireworks.start();
/** Endregion FireworksJS */

/** Region WowJS */
const wowJS = new WOW({
	boxClass: "ohMyGow", // Tên class hiển thị hộp ẩn khi người dùng cuộn
	animateClass: "animated", // Tên class kích hoạt hoạt ảnh CSS ("animated" theo mặc định cho thư viện animate.css)
	offset: 0, // Xác định khoảng cách giữa phần dưới cùng của khung nhìn trình duyệt và phần trên cùng của hộp ẩn. Khi người dùng cuộn và đạt đến khoảng cách này, hộp ẩn sẽ lộ ra.
	mobile: true, // Bật/tắt wow.js trên thiết bị di động
	live: true, // Liên tục kiểm tra các yếu tố WOW mới trên trang
});
wowJS.init();
/** Endregion WowJS */

/** Region giao diện */
$("#NameCompany").addClass("text-center").text(TITLE_NameCompany);
$("#Welcome").addClass("text-center").text(TITLE_Welcome);
document
	.querySelector(".action-menu > button")
	.addEventListener("click", () => {
		document.querySelector(".action-menu").classList.toggle("active");
	});
/**
 * Thông tin dòng chữ chạy phía dưới
 */
const footerThongTin = $("#FooterThongTin");
footerThongTin.append($("<h4>").text("Hi mom"));
/** Endregion giao diện */

/** Region */
/** Endregion */

/** Region */
/** Endregion */

/** Region */
/** Endregion */

/** Region */
/** Endregion */

/** Region */
/** Endregion */

/** Region */
/** Endregion */
