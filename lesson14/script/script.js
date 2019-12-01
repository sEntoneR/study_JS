
window.addEventListener('DOMContentLoaded', function() {
  'use strict';
  //Timer
  function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining () {
          let dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor((timeRemaining / 60) % 60),
          hours = Math.floor(timeRemaining / 60 / 60);
          return {seconds, minutes, hours, timeRemaining};
        }

        function updateClock () {
          let timer = getTimeRemaining();
          if (timer.hours < 10) {
            timer.hours = '0' + timer.hours;
          }
          if (timer.minutes < 10) {
            timer.minutes = '0' + timer.minutes;
          }
          if (timer.seconds < 10) {
            timer.seconds = '0' + timer.seconds;
          }
          if (timer.seconds > 0) {
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
          }
          else {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
          }
          
          
          if (timer.timeRemaining <= 0) {
            clearInterval(idClock);
          }
        }

        let idClock = setInterval(updateClock, 1000);
        
  }
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
      console.log(date);

  countTimer(date);


    // МЕНЮ
  const toggleMenu = () => {

    const btnMenu  = document.querySelector('.menu'),   //получаем кнопки
          menu = document.querySelector('menu'),
          closeBtn = document.querySelector('.close-btn'),
          menuItems = menu.querySelectorAll('ul>li'),
          body = document.querySelector('body');



          
          const handlerMenu = () => {
              menu.classList.toggle('active-menu');
          };
          
          // обработчики события toggleMenu(крестик и кнопка меню)
          body.addEventListener('click', (event) => {
            let target = event.target;
                if(target.closest('.close-btn') || target.closest('.menu')){
                  handlerMenu();
                }   
          });
          //обработчик события (закрытие меню, при нажатие на элемент)
          menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

  };
  
  toggleMenu();

//popup окно 

const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn');
          

          popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popUp.style.display = 'block';
            });
          });



          popUp.addEventListener('click', (event) => {
            let target = event.target;

            if(target.classList.contains('popup-close')){
              popUp.style.display = 'none';
            } else {
              target = target.closest('.popup-content');
              if(!target){
                popUp.style.display = 'none';
              }
            }
          });
};

togglePopUp();

// табы 

const tabs = () => {
  const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');


  const toggleTabContent = (index) => {
      for(let i=0; i < tabContent.length; i++){
        if(index === i){
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
  };     
        tabHeader.addEventListener('click', (event) => {
          let target = event.target;
              target = target.closest('.service-header-tab');



          if(target){
            tab.forEach((item, i) => {
              if (item === target){
                toggleTabContent(i);
              }
            });
          }
        });
};

tabs();
});





