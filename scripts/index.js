/** @format */

/** Region JQuery sakura */
$(function () {
	$("body")?.sakura();
});

$(window).on("load", function () {
	$("body")?.sakura();
});
/** Endregion JQuery sakura */

/** Region fireworks-js */
const fireworksContainer = document.querySelector(".fireworks");
const fireworks = new Fireworks.default(fireworksContainer);
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
fireworks.opts.mouse = { click: true, move: false, max: 1 }; // Cấu hình tương tác chuột
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
/** Endregion fireworks-js */
