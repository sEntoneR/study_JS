'use strict';

let domElement = document.querySelector('body');

function DomElement(selector, height, width, bg, fontSize, textContent){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textContent = textContent;

    let newElem;
    if ( this.selector[0] === '.'){
        newElem = document.createElement('div');
        newElem.classList.add(this.selector);
    }
    if (this.selector[0] === '#'){
        newElem = document.createElement('p');
    }

    newElem.style.height = this.height;
    newElem.style.width = this.width;
    newElem.style.backgroundColor = this.bg;
    newElem.style.fontSize = this.fontSize;
    newElem.textContent = textContent;
    domElement.appendChild(newElem);
}



let domElement1 = new DomElement('.class', '250px', '300px', 'red', '16px');
let domElement2 = new DomElement('#class','', '', '', '36px', 'hallo');



console.log('domElement1: ', domElement1);


