let readMoreBtn = document.querySelector('.read-more__button');
let burgerBtn = document.querySelector('.burger-btn');
let closeBtn = document.querySelector('.main-menu__close-btn');
let button1 = document.querySelector('.brand-button1');
let button2 = document.querySelector('.brand-button2');
let phoneBtn = document.querySelector('.phone-btn');
let callCloseBtn = document.querySelector('.call__close-btn');
let messageBtn = document.querySelector('.message-btn');
let feedbackCloseBtn = document.querySelector('.feedback__close-btn');
const lorem = document.querySelector('.read-more__lorem.hidenLorem');
const hiddenElements1 = document.querySelectorAll('.brand-list__elements.hidden1');
const hiddenElements2 = document.querySelectorAll('.brand-list__elements.hidden2');

readMoreBtn.addEventListener('click', function () {
	if (readMoreBtn.textContent === 'Читать далее') {		
		lorem.classList.remove('hidenLorem');
		readMoreBtn.textContent = 'Скрыть';
		readMoreBtn.classList.add('lorem__hide-button');
	} else {		
		lorem.classList.add('hidenLorem');
		readMoreBtn.textContent = 'Читать далее';
		readMoreBtn.classList.remove('lorem__hide-button');
	}
});

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

burgerBtn.addEventListener('click', function () {
	document.querySelector('.main-menu').classList.add('active');
	document.querySelector('.overlay').classList.add('active');
});

closeBtn.addEventListener('click', function () {
	document.querySelector('.main-menu').classList.remove('active');
	document.querySelector('.overlay').classList.remove('active');
});

document.querySelector('.overlay').addEventListener('click', function() {
	document.querySelector('.main-menu').classList.remove('active');
	document.querySelector('.overlay').classList.remove('active');
});

phoneBtn.addEventListener('click', function () {
	document.querySelector('.call').classList.add('active');
	document.querySelector('.main-menu').classList.remove('active');
	document.querySelector('.overlay').classList.add('active');
});

callCloseBtn.addEventListener('click', function () {
	document.querySelector('.call').classList.remove('active');
	document.querySelector('.overlay').classList.remove('active');
});

document.querySelector('.overlay').addEventListener('click', function() {
	document.querySelector('.call').classList.remove('active');
	document.querySelector('.overlay').classList.remove('active');
});

messageBtn.addEventListener('click', function () {
	document.querySelector('.feedback').classList.add('active');
	document.querySelector('.main-menu').classList.remove('active');
	document.querySelector('.overlay').classList.add('active');
});

feedbackCloseBtn.addEventListener('click', function () {
	document.querySelector('.feedback').classList.remove('active');
	document.querySelector('.overlay').classList.remove('active');
});

document.querySelector('.overlay').addEventListener('click', function() {
	document.querySelector('.feedback').classList.remove('active');
	document.querySelector('.overlay').classList.remove('active');
});