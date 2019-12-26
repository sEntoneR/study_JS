const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...', // предварительные сообщения, которые будем показывать пользователю
    loadMessage = 'Загрузка...',
    succesMessage = 'Спасибо! Скоро с Вами свяжемся';

  const form = document.querySelectorAll('form');
  const statusMessage = document.createElement('div'); //создали элемент который будем добавлять на страницу
  statusMessage.style.cssText = 'font-size: 5 rem; color: green'; // добавили стили

  let userQuest;


  form.forEach((item) => {
    item.addEventListener('submit', (event) => {
      event.preventDefault(); //отмена перезагрузки страницы при нажатие кнопки сабмит
      const formData = new FormData(item); // создали объект который считывает все данные с формы и имеет обязательный атрибут name
      let body = {};
      formData.forEach((val, key) => { // получаем объекты и записываем в body
        body[key] = val;
      });

      if(event.target.closest('.popup-calc')){
        body.calc = localStorage.test;
      }
      if(item.getAttribute('id') === 'directorForm'){
        const input =  item.querySelector('input');
        userQuest = input.value;
      } else {
        item.appendChild(statusMessage); //добавили див на страницу
        statusMessage.textContent = loadMessage; // добавили сообщение
        
        formData.set('user_quest', userQuest);

  

        postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200.');
          }
          item.reset();
          statusMessage.textContent = succesMessage;
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 4000);
        })
        .catch((error) => {
          item.reset();
          statusMessage.textContent = errorMessage;
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 4000);
          console.error(error);
        });
      }

      const inputs = item.querySelectorAll('input');
      inputs.forEach((item) => item.value = ''); // очистка инпутов
      delete localStorage.test;
    });


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


  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };


};

export default sendForm;