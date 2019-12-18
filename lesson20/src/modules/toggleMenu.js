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


export default toggleMenu;