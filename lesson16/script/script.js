
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
      // console.log(date);

  countTimer(date);


    // МЕНЮ
  const toggleMenu = () => {

    const menu = document.querySelector('menu'),    //получаем кнопки
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

  // слайдер

  const slider = () =>{
    const slide = document.querySelectorAll('.portfolio-item'),
          btn = document.querySelector('.portfolio-btn'),
          slider = document.querySelector('.portfolio-content');

    let   currentSlide = 0,
          interval,
          portfolioDots = document.querySelector('.portfolio-dots'),
          newDot;


          //создаем точки

      const addDot = () => {
        let dots = document.createElement('li');
        dots.className = 'dot';
        portfolioDots.append(dots);

        for (let i=0; i < slide.length; i++){
          newDot = dots.cloneNode(true);
          portfolioDots.append(newDot);
        }
        dots.classList.add('dot-active');
      };

      addDot();

      let dot = document.querySelectorAll('.dot');
      // пред.слайд(основная функция! благодаря ей добавляется и удаляется класс)
    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    // след.слайд(основная функция! благодаря ей добавляется и удаляется класс)
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active'); //слайды
      prevSlide(dot, currentSlide, 'dot-active'); //точки
      currentSlide++;//меняем слайд
      if(currentSlide >= slide.length){
        currentSlide = 0; //проверяем если последний то возвращаемся к 0
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };
    // вызов каждые 3сек
    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };
      // обработчики на сам слайдер(точки и стрелки)
    slider.addEventListener('click', (event) => {
      event.preventDefault();

      let target = event.target;

      if(!target.matches('.portfolio-btn, .dot')){ // если не точка и не стрелка, то просто ретерн
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if(target.matches('#arrow-right')){
        currentSlide++;
      }else if(target.matches('#arrow-left')){
        currentSlide--;
      } else if(target.matches('.dot')){
        dot.forEach((elem, index) => {
          if(elem === target){
            currentSlide = index;
          }
        });
      }
        //проверка слайда
      if(currentSlide >= slide.length){
        currentSlide = 0;
      }

      if(currentSlide < 0){
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    });
      //функции при наведение мышки на стрелки точки(тормозит просмотр слайда)
    slider.addEventListener('mouseover', (event) => {
      if(event.target.matches('.portfolio-btn') ||
      event.target.matches('.dot')){
        stopSlide();
      }
    });


    slider.addEventListener('mouseout', (event) => {
      if(event.target.matches('.portfolio-btn') ||
      event.target.matches('.dot')){
        startSlide();
      }
    });
    startSlide(1500);


  };


  slider();

  // смена картинки при наведение мыши

  const changeImage = () => {
    const commandPhoto = document.querySelectorAll('.command__photo'),
          command = document.getElementById('command');

    command.addEventListener('mouseover', event => {
      let target = event.target;
      if (target.matches('.command__photo')) {
        let src = target.src;
        target.src = target.dataset.img;
        target.dataset.img = src;
      }
    });
    command.addEventListener('mouseout', event => {
      let target = event.target;
      if (target.matches('.command__photo')) {
        let src = target.src;
        target.src = target.dataset.img;
        target.dataset.img = src;
      }
    });
  };
  changeImage();


  // запрет ввода букв
  const input = document.querySelectorAll('input[type="number"]');
  input.oninput = (item) => {
  item.target.value = item.target.value.replace(/\D/g,'');
};

});





