const validation = () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((item) => {

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

};

  export default validation;