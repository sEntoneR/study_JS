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

  export default slider;