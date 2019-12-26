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

export default togglePopUp;