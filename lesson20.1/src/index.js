'use strict';

import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from 'element-closest'; 
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import changeImage from './modules/changeImage';
import sendForm from './modules/sendForm';
import Validator from './modules/validation';


//Timer

let date = new Date(),
      days = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear();
      if (date.getHours() >= 17) {
        date.setFullYear(year, month, days + 2);
      }
      else {
        date.setFullYear(year, month, days + 1);
      }
      
      date.setHours(-5,0,0);
countTimer(date);
// МЕНЮ
toggleMenu();
//popup окно 
togglePopUp();
// табы 
tabs();
// слайдер
slider();
// калькулятор
calc();
// смена картинки при наведение мыши
changeImage();
// запрет ввода букв
  const input = document.querySelectorAll('input[type="number"]');
  input.oninput = (item) => {
  item.target.value = item.target.value.replace(/\D/g,'');
};



// валидатор
const valid1 = new Validator({
  selector: '#form1',
  pattern: {},
  method: {
    'form1-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form1-email': [
      ['pattern', 'email']
    ],
    'form1-name': [
      ['notEmpty'],
    ]
  },
  num: 1,
  errors: 0,
});
valid1.init();
const valid2 = new Validator({
  selector: '#form2',
  pattern: {},
  method: {
    'form2-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form2-email': [
      ['pattern', 'email']
    ],
    'form2-name': [
      ['notEmpty'],
    ]
  },
  num: 2,
  errors: 0,
});
valid2.init();
const valid3 = new Validator({
  selector: '#form3',
  pattern: {},
  method: {
    'form3-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form3-email': [
      ['pattern', 'email']
    ],
    'form3-name': [
      ['notEmpty'],
    ]
  },
  num: 3,
  errors: 0,
});
valid3.init();


//send-ajax-form
sendForm('1', valid1.errors);
sendForm('2', valid2.errors);
sendForm('3', valid3.errors);