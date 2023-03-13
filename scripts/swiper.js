const swiper = new Swiper(".swiper", {
	direction: "horizontal",
	loop: true,
	speed: 1000,

	pagination: {
		el: ".swiper-pagination",
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	scrollbar: {
		el: ".swiper-scrollbar",
	},
	autoplay: {
		enabled: true,
		delay: 3000,
	},
});
