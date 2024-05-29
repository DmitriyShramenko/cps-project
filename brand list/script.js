let button = document.querySelector('.brand-button');
const allElements = document.querySelectorAll('.brand-list__elements');
const hiddenElements = document.querySelectorAll('.brand-list__elements.hidden');

button.addEventListener('click', function () {
	if (button.textContent === 'Показать все') {
		hiddenElements.forEach(element => {
			element.classList.remove('hidden');
		});
		button.textContent = 'Скрыть';
		button.classList.add('hide-button');
	} else {
		hiddenElements.forEach(element => {
			element.classList.add('hidden');
		});
		button.textContent = 'Показать все';
		button.classList.remove('hide-button');
	}
});

new Swiper('.swiper', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	spaceBetween: 16,
});