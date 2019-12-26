'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);


import togglePopUp from './modules/togglePopUp';
import addButton from './modules/addButton';
import accordionTwo from './modules/accordionTwo';
import accordion from './modules/accordion';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// popup
togglePopUp();

// addbutton
addButton();

// аккордеон два 
accordionTwo();

// аккордеон 1
accordion();

// калькулятор
calc();

// отправка форм
sendForm();