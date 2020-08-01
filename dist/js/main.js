const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');

burger.addEventListener('click', function () {
	if (this.classList.contains('isActive')) {
		this.classList.remove('isActive');
		nav.classList.remove('active');
	} else {
		this.classList.add('isActive');
		nav.classList.add('active');
	}
});

const mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
});

const reviews = new Swiper('.swiper-reviews', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	spaceBetween: 50,
	effect: 'slide',

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});