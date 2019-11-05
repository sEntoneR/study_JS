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
book[2].querySelector('a').textContent = 'Книга 3. this и Протопипы Объектов';

// книга 2
let chapter = book[1].querySelectorAll('li'),
    ul = book[1].querySelector('ul');

    ul.insertBefore(chapter[6], chapter[4]);
    ul.insertBefore(chapter[8], chapter[4]);
    ul.insertBefore(chapter[2], chapter[10]);

// книга 5

let _chapter = book[4].querySelectorAll('li'),
    _ul = book[4].querySelector('ul');

    _ul.insertBefore(_chapter[9], _chapter[2]);
    _ul.insertBefore(_chapter[3], _chapter[2]);
    _ul.insertBefore(_chapter[4], _chapter[2]);
    _ul.insertBefore(_chapter[6], _chapter[5]);
    _ul.insertBefore(_chapter[7], _chapter[5]);

//добавление главы

let liBook = book[5].querySelectorAll('li'),
    ulBook = book[5].querySelector('ul'),
    newElem = document.createElement('li');
    newElem.textContent = 'Глава 8: За пределами ES6';
    ulBook.insertBefore(newElem, liBook[9]);



