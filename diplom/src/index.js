'use strict';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';



import accordion from './modules/accordion';
import accordionTwo from './modules/accordionTwo';
import addButton from './modules/addButton';
import calculator from './modules/popUpCall';
import consultation from './modules/consultation';
import consultationSection from './modules/consultationSection';
import popUpCall from './modules/popUpCall';
import popUpCheck from './modules/popUpCheck';
import popUpDiscount from './modules/popUpDiscount';
import sendForm from './modules/sendForm';
import validation from './modules/validation';


// popup
popUpCall();
popUpCheck();
popUpDiscount();
consultation();
consultationSection();

// addbutton
addButton();

// аккордеон два  
accordionTwo();

// аккордеон 1
accordion();

// калькулятор
calculator();

// отправка форм
sendForm();

// валидация
validation();