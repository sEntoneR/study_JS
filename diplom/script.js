'use strict';

// popup

const togglePopUp = () => {
  let isModalOpened = false;
  let modal = null;
  let body = document.querySelector('body');

  body.addEventListener('click', () => { // обработчик на всю страницу

    const element = event.target;
    const elementClasses = element.classList.toString(); // привел к строке



    if (elementClasses.match(/discount|call|check|consultation/) && !isModalOpened) { // если содержит тот или иной класс
      const modalClass = `.popup-${elementClasses.match(/discount|call|check|consultation/)[0]}`;
      modal = document.querySelector(modalClass);
      modal.classList.add('popup--show');
      modal.style.display = 'block'; // показать
      isModalOpened = true;
    }

    if (element.classList.contains('popup-close') || isModalOpened && element.classList.contains('popup--show')) {
      modal.classList.remove('popup--show');
      modal.style.display = 'none'; // убрать 
      isModalOpened = false;
    }
  });
};

togglePopUp();

// addbutton

const addButton = () => {
  const hiddenBlocks = document.querySelectorAll('.hidden'),
    addSentenceBtn = document.querySelector('.add-sentence-btn');

  addSentenceBtn.addEventListener('click', () => {
    hiddenBlocks.forEach((item) => item.classList.remove('hidden'));
    addSentenceBtn.classList.add('hidden');

  });

};

addButton();

// аккордеон два 

const accordionTwo = () => {
  const accordionTwo = document.getElementById('accordion-two'),
    panelHeading = accordionTwo.querySelectorAll('.panel-heading'),
    panelCollapse = accordionTwo.querySelectorAll('.panel-collapse');

  const togglePanel = (index) => {
    for (let i = 0; i < panelCollapse.length; i++) {
      if (index === i) {
        panelCollapse[i].classList.add('in');
      } else {
        panelCollapse[i].classList.remove('in');
      }
    }
  };

  accordionTwo.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.panel-heading');
    if (target) {
      panelHeading.forEach((item, i) => {
        event.preventDefault();
        if (item === target) {
          togglePanel(i);
        }
      });
    }
  });


};

accordionTwo();

// аккордеон 1

const accordion = () => {
  const accordion = document.getElementById('accordion');
  accordion.addEventListener('click', (event) => {
    const target = event.target,
      heading = target.closest('.panel-heading'),
      nextStep = target.closest('.construct-btn');

    const collapse = heading ? heading.nextElementSibling :
      nextStep ? target.closest('.panel').nextElementSibling.querySelector('.panel-collapse') : null;

    if (collapse) {
      event.preventDefault();
      target.closest('.panel-group').querySelectorAll('.panel-collapse').forEach(item => {
        item.classList.toggle('in', item === collapse && !item.classList.contains('in'));
      });
    }
  });
};

accordion();




const calc = () => {

  const myonoffswitch = document.getElementById('myonoffswitch'),
        myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
        selectBoxTwo = document.querySelector('.select-box-two'),
        inputMeters = document.getElementById('meters'),
        calcResult = document.getElementById('calc-result'),
        calcItems = document.querySelectorAll('.form-control'),
        panelGroup = document.querySelector('.panel-group');

  let septic = {},

      camera = 0,
      diameter = 0,
      rings = 0,
      diameterTwo = 0,
      rings2 = 0,
      bottom = 0;
      

  if (myonoffswitch.checked) {
    camera = 10000;
  }
  
  if (myonoffswitchTwo.checked) {
    bottom = 1000;
  }

  panelGroup.addEventListener('change', (event) => {
    const target = event.target;

    if (target === myonoffswitch) {
      
      if (myonoffswitch.checked) {
            if (myonoffswitchTwo.checked) {
              bottom = 1000;
              septic.bottom = true;
            } else {
              bottom = 0;
              septic.bottom = false;
            }
        selectBoxTwo.style.display = 'none';
        camera = 10000;
        septic.doubleCamera = false;
      } else {
            if (myonoffswitchTwo.checked) {
              bottom = 2000;
              septic.bottom = true;
            } else {
              bottom = 0;
              septic.bottom = false;
            }
        selectBoxTwo.style.display = 'block';
        camera = 15000;
        septic.doubleCamera = true;
      }
    }

    calcItems.forEach((elem, i) => {
      if (target === elem) {
        if (i == 0 && elem.value < 2) {
          diameter = 0;
          septic.diameterOne = '1.4';
        } else if (i == 0 && elem.value == 2) {
          diameter = 0.2;
          septic.diameterOne = '2';
        } else if (i == 2 && elem.value < 2) {
          diameterTwo = 0;
          septic.diameterTwo = '1.4';
        } else if (i == 2 && elem.value == 2) {
          diameterTwo = 0.2;
          septic.diameterTwo = '2';
        } else if (i == 1 && elem.value == 1) {
          rings = 0;
          septic.ringsOne = '1';
        } else if (i == 1 && elem.value == 2) {
          rings = 0.3;
          septic.ringsOne = '2';
        } else if (i == 1 && elem.value == 3) {
          rings = 0.5;
          septic.ringsOne = '3';
        } else if (i == 3 && elem.value == 1) {
          rings2 = 0;
          septic.ringsTwo = '1';
        } else if (i == 3 && elem.value == 2) {
          rings2 = 0.3;
          septic.ringsTwo = '2';
        } else if (i == 3 && elem.value == 3) {
          rings2 = 0.5;
          septic.ringsTwo = '3';
        }
      }
    });

    if (target === myonoffswitchTwo) {
      if (myonoffswitchTwo.checked) {
          if (myonoffswitch.checked) {
            bottom = 1000;
          } else {
            bottom = 2000;
          }
        septic.bottom = true;
      } else  {   
        bottom = 0;
        septic.bottom = false;
      }
    }

    if (target === inputMeters) {
      septic.meters = inputMeters.value;
    }

    countSum();
    septic.cost = calcResult.value;
  });

  const countSum = () => {
    let diametrValue1 = diameter * (camera + bottom),
        ringsValue1 = (camera + bottom + diametrValue1) * rings,
        diametrValue2 = diameterTwo * (camera + bottom),
        ringsValue2 = (camera + bottom + diametrValue2) * rings2;

    let total = +Math.round(camera + diametrValue1 + ringsValue1 + diametrValue2 + ringsValue2 + bottom);
    
    calcResult.value = total;

    console.dir(septic);
  };

};
calc();

// отправка форм

const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...', // предварительные сообщения, которые будем показывать пользователю
    loadMessage = 'Загрузка...',
    succesMessage = 'Спасибо! Скоро с Вами свяжемся';

  const form = document.querySelectorAll('form');
  const statusMessage = document.createElement('div'); //создали элемент который будем добавлять на страницу
  statusMessage.style.cssText = 'font-size: 5 rem; color: green'; // добавили стили

  let userQuest;


  form.forEach((item) => {
    item.addEventListener('submit', (event) => {
      event.preventDefault(); //отмена перезагрузки страницы при нажатие кнопки сабмит

      if(item.getAttribute('id') === 'directorForm'){
        const input =  item.querySelector('input');
        userQuest = input.value;
      } else {
        item.appendChild(statusMessage); //добавили див на страницу
        statusMessage.textContent = loadMessage; // добавили сообщение
        const formData = new FormData(item); // создали объект который считывает все данные с формы и имеет обязательный атрибут name
        formData.append('user_quest', userQuest);
  
        let body = {};

  
        formData.forEach((val, key) => { // получаем объекты и записываем в body
          body[key] = val;
  
        });
        postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200.');
          }
          item.reset();
          statusMessage.textContent = succesMessage;
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 4000);
        })
        .catch((error) => {
          item.reset();
          statusMessage.textContent = errorMessage;
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 4000);
          console.error(error);
        });
      }

      const inputs = item.querySelectorAll('input');
      inputs.forEach((item) => item.value = ''); // очистка инпутов
    });


    item.addEventListener('input', (elem) => {
      if (elem.target.name === 'user_name' || elem.target.name === 'user_quest') {
        elem.target.value = elem.target.value.replace(/[^а-яА-ЯёЁ ]/gi, ``);
      } else if (elem.target.name === 'user_phone') {
        elem.target.value = elem.target.value.replace(/[^0-9+]/gi, ``);
      } else {
        return;
      }

    });
  });


  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };


};

sendForm();











 

