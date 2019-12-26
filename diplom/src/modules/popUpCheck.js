const popUpCheck = () => {

  const popupCheck = document.querySelector('.popup-check'),
      checkBtn = document.querySelector('.check-btn');

    checkBtn.addEventListener('click', () => {
      popupCheck.style.display = 'block';
    });

    popupCheck.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('popup-close')) {
        popupCheck.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popupCheck.style.display = 'none';
        }
      }
    });

};

export default popUpCheck;