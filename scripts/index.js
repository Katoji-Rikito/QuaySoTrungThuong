/** @format */
/** Region JQuery sakura */
$(function () {
	$("body").sakura();
});

$(window).load(function () {
	$("body").sakura();
});
/** Endregion JQuery sakura */

/** Region fireworks-js */
const fireworks = new Fireworks($("#fireworksJS"), {
	autoresize: true, // Tự động thay đổi kích thước khi kích thước của container thay đổi
	opacity: 0.5, // Độ mờ
	acceleration: 1.0, // Gia tốc
	friction: 0.95, // Ma sát ảnh hưởng đến chuyển động
	gravity: 1.5, // Lực hấp dẫn tác động lên pháo hoa
	particles: 50, // Số lượng hạt pháo hoa
	traceLength: 1, // Độ dài vệt
	traceSpeed: 10, // Tốc độ vệt
	explosion: 5, // Độ lớn của vụ nổ
	intensity: 20, // Cường độ
	flickering: 50, // Mức độ nhấp nháy
	lineStyle: "round", // Kiểu đường vẽ của pháo hoa

	brightness: { min: 0, max: 100 },
	decay: { min: 0.001, max: 0.05 },
	delay: { min: 10.0, max: 100.0 },
	hue: { min: 0, max: 360 },
	lineWidth: { explosion: { min: 1, max: 3 }, trace: { min: 1, max: 2 } },
	mouse: { click: true, move: false, max: 1 },
	rocketsPoint: { min: 50, max: 50 },
});
fireworks.start();

/** Endregion fireworks-js */
