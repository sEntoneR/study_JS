const consultation = () => {

  const popupConsultation = document.querySelector('.popup-consultation'),
  consultationBtn = document.querySelector('.consultation-btn');

consultationBtn.addEventListener('click', () => {
  popupConsultation.style.display = 'block';
});

popupConsultation.addEventListener('click', (event) => {
  let target = event.target;
  if (target.classList.contains('popup-close')) {
    popupConsultation.style.display = 'none';
  } else {
    target = target.closest('.popup-content');
    if (!target) {
      popupConsultation.style.display = 'none';
    }
  }
});

};

export default consultation;