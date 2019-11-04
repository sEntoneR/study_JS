'use strict';

// восстановить порядок книг
let parentElem = document.querySelector('.books');
let myElemnts = document.querySelectorAll('.book');
console.log(parentElem);
console.log(myElemnts);
parentElem.insertBefore(myElemnts[1], myElemnts[0]);
parentElem.insertBefore(myElemnts[4], myElemnts[3]);
parentElem.insertBefore(myElemnts[2], myElemnts[5]);
parentElem.insertBefore(myElemnts[5], myElemnts[5]);
parentElem.insertBefore(myElemnts[5], myElemnts[2]);

//удаление рекламы
let googleRemove = document.querySelector('.adv');
console.log(googleRemove.classList);
googleRemove.classList.remove('adv');


//замена картинки
let image = document.querySelector('body');
image.setAttribute('style', 'background-image:url(/image/you-dont-know-js.jpg)');

//исправление названия книги 
let book = document.querySelectorAll('.book');
console.log('book: ', book);
// book[2].innerHTML = 'Книга 3. this и Протопипы Объектов';
let newElem = document.createElement('h2');
newElem.textContent = 'Книга 3. this и Протопипы Объектов';
book[2].appendChild(newElem); 




