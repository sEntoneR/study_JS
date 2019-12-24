'use strict';

// popup

const togglePopUp = () => {
// const popups = document.querySelectorAll('.popup');
let isModalOpened = false;
let modal = null;
let body = document.querySelector('body');

  body.addEventListener ('click', () => { // обработчик на всю страницу

  const element = event.target;
  const elementClasses = element.classList.toString(); // привел к строке



  if (elementClasses.match(/discount|call|check|consultation/) && !isModalOpened){ // если содержит тот или иной класс
     const modalClass = `.popup-${elementClasses.match(/discount|call|check|consultation/)[0]}`;
     modal = document.querySelector(modalClass);
    //  modal.classList.add('popup--show');
    modal.style.display = 'block'; // показать
     isModalOpened = true;

  }

  if (element.classList.contains('popup-close') || isModalOpened && element.classList.contains('popup--show')){
      // popups.forEach((popup) => popup.classList.remove('popup--show'));
      // modal.classList.remove('popup--show');
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
        hiddenBlocks.forEach((item)=>item.classList.remove('hidden'));
        addSentenceBtn.classList.add('hidden');
        
      });

};

addButton();

// аккордеон два 

const accordionTwo = (elem) => {
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
  document.addEventListener('click', (event) => {
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



// отправка форм

const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...', // предварительные сообщения, которые будем показывать пользователю
         loadMessage = 'Загрузка...',
         succesMessage = 'Спасибо! Скоро с Вами свяжемся';

   const   form = document.querySelectorAll('form');
   const statusMessage = document.createElement('div'); //создали элемент который будем добавлять на страницу
         statusMessage.style.cssText = 'font-size: 5 rem; color: green'; // добавили стили



    const outputData = (response) => {
     if (response.status !== 200){
       throw new Error ('status network not 200');
     }
    statusMessage.textContent = succesMessage;
   
   },
          errorData = (error) => {
     statusMessage.textContent = errorMessage;
     console.error(error);
   };

  form.forEach((item) => {
    item.addEventListener('submit', (event)=>{
      event.preventDefault(); //отмена перезагрузки страницы при нажатие кнопки сабмит
        item.appendChild(statusMessage); //добавили див на страницу
    
        const inputs = item.querySelectorAll('input');
        // let error;
    
        // inputs.forEach((item) => {
    
        //   if (item.classList.contains('error')) {
        //     error = false;
        //   } else {
        //     error = true;
        //   }
    
        // });
    
        // if (!error) {
        //   statusMessage.textContent = 'Ошибка';
        //   return false;
        // }
    
        statusMessage.textContent = loadMessage; // добавили сообщение
    
        const formData = new FormData(item); // создали объект который считывает все данные с формы и имеет обязательный атрибут name
        let body = {};
    
        formData.forEach((val, key) => { // получаем объекты и записываем в body
          body[key] = val;
    
        });
        postData(body)
          .then(outputData)
          .catch(errorData);
    
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
