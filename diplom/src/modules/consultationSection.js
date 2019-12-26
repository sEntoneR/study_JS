const consultationSection = () => {

  const inputQuestion = document.querySelector('.input-question'),
        consultationBtn = document.querySelector('.consultation-btn');

  consultationBtn.addEventListener('click', () => {

    localStorage.question = inputQuestion.value;
    
  });

};

export default consultationSection;