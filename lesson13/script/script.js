
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
          menuItems = menu.querySelectorAll('ul>li');

          
          // const handlerMenu = () => {
          //     menu.classList.toggle('active-menu');
          // };

          //Анимация МЕНЮ
          let flyMenu,
              count = 0;
          let animateMenu = () => {
              flyMenu = requestAnimationFrame(animateMenu);
              count++;
              if (count < 500){
                menu.style.left = count * 4 + 'px';
              } else {
                cancelAnimationFrame(animateMenu);
              }
          };

          // закрытие меню
          btnMenu.addEventListener('click', () =>{
            flyMenu = requestAnimationFrame(animateMenu);
          });
          closeBtn.addEventListener('click',() =>{
            menu.style.left = 0;
          });
          menuItems.forEach((elem) => elem.addEventListener('click', ()=>{
            menu.style.left = 0;
          }));
  };
  
  toggleMenu();

//popup окно 

const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popupClose = document.querySelector('.popup-close');

          popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
            });
          });

          popupClose.addEventListener('click', () =>{
            popup.style.display = 'none';
          });
};

togglePopUp();
});



