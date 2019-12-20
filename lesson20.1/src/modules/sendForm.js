const sendForm = (id) => {
  const errorMessage = 'Что-то пошло не так...', // предварительные сообщения, которые будем показывать пользователю
         loadMessage = 'Загрузка...',
         succesMessage = 'Скоро с Вами свяжемся';

   let form = document.getElementById(`form${id}`),
       inputs = form.querySelectorAll('input'); // получилим форму
   const statusMessage = document.createElement('div'); //создали элемент который будем добавлять на страницу
         statusMessage.style.cssText = 'font-size: 2 rem;'; // добавили стили

   const outputData = (response) => {
     if (response.status !== 200){
       throw new Error ('status network not 200');
     }
   statusMessage.textContent = succesMessage;
   inputs.forEach((item) => item.value = '');
   
   },
   errorData = (error) => {
     statusMessage.textContent = errorMessage;
     console.error(error);
   };


   form.addEventListener('submit', (event) => { // обработчик событий для отправки формы
    event.preventDefault(); //отмена перезагрузки страницы при нажатие кнопки сабмит
    form.appendChild(statusMessage); //добавили див на страницу

    const inputs = form.querySelectorAll('input');
    let error;

    inputs.forEach((item) => {

      if (item.classList.contains('error')) {
        error = false;
      } else {
        error = true;
      }

    });

    if (!error) {
      statusMessage.textContent = 'Ошибка';
      return false;
    }

    statusMessage.textContent = loadMessage; // добавили сообщение

    const formData = new FormData(form); // создали объект который считывает все данные с формы и имеет обязательный атрибут name
    let body = {};

    formData.forEach((val, key) => { // получаем объекты и записываем в body
      body[key] = val;

    });
    postData(body)
      .then(outputData)
      .catch(errorData);

    inputs.forEach((item) => item.classList.remove('success'));
    inputs.forEach((item) => item.value = '');

  });
     };
       const postData = (body) => {
         return fetch('./server.php', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify(body)
         });

       };

       export default sendForm;