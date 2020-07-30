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