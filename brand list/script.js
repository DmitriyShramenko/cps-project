let button1 = document.querySelector('.brand-button1');
let button2 = document.querySelector('.brand-button2');
const hiddenElements1 = document.querySelectorAll('.brand-list__elements.hidden1');
const hiddenElements2 = document.querySelectorAll('.brand-list__elements.hidden2');

button1.addEventListener('click', function () {
	if (button1.textContent === 'Показать все') {
		hiddenElements1.forEach(element => {
			element.classList.remove('hidden1');
		});
		button1.textContent = 'Скрыть';
		button1.classList.add('hide-button');
	} else {
		hiddenElements1.forEach(element => {
			element.classList.add('hidden1');
		});
		button1.textContent = 'Показать все';
		button1.classList.remove('hide-button');
	}
});

button2.addEventListener('click', function () {
	if (button2.textContent === 'Показать все') {
		hiddenElements2.forEach(element => {
			element.classList.remove('hidden2');
		});
		button2.textContent = 'Скрыть';
		button2.classList.add('hide-button');
	} else {
		hiddenElements2.forEach(element => {
			element.classList.add('hidden2');
		});
		button2.textContent = 'Показать все';
		button2.classList.remove('hide-button');
	}
});

new Swiper('.swiper', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	spaceBetween: 16,
});