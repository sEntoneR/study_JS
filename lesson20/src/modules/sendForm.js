const sendForm = (id) => {
     const errorMessage = 'Что-то пошло не так...', // предварительные сообщения, которые будем показывать пользователю
            loadMessage = 'Загрузка...',
            succesMessage = 'Скоро с Вами свяжемся';

      let form = document.getElementById(`form${id}`), // получилим форму
          inputs = form.querySelectorAll('input'); // ИНПУТЫ
      const statusMessage = document.createElement('div'); //создали элемент который будем добавлять на страницу
            statusMessage.style.cssText = 'font-size: 2 rem;'; // добавили стили

      const outputData = (response) => {
        if (response.status !== 200){
          throw new Error ('status network not 200');
        }
      statusMessage.textContent = succesMessage;
      inputs.forEach(item => item.value = ''); // очистка инпутов
      },
      errorData = (error) => {
        statusMessage.textContent = errorMessage;
        console.error(error);
      };


          form.addEventListener('submit', (event) => { // обработчик событий для отправки формы
              event.preventDefault(); //отмена перезагрузки страницы при нажатие кнопки сабмит
              form.appendChild(statusMessage); //добавили див на страницу
              statusMessage.textContent = loadMessage; // добавили сообщение
              const formData = new FormData(form); // создали объект который считывает все данные с формы и имеет обязательный атрибут name
              let body = {};

              formData.forEach((val, key) =>{ // получаем объекты и записываем в body
                body[key] = val;
                
              });
              postData(body)
              .then(outputData)
              .catch(errorData);
          
          });
        };
          const postData = (body) => {
            // return new Promise((resolve, reject) =>{
            //   const request = new XMLHttpRequest(); //создали request
              
            //   request.addEventListener('readystatechange', () => { // повесили прослушиватель событий readystatechange


            //       if (request.readyState !== 4){ //проверяем статус
            //         return; //если не 4 то выходим
            //       }

            //       if (request.status === 200){ // как стал 4, то идем дальше, проверяем статус если равен 200, то пишем сообщение 
            //         resolve();
            //       } else { // если что то не так
            //         reject(request.status);
            //       }
            //       /*
            //       в код выше можно добавить любое сообщение, можно спинер добавить(succesMessage)
            //       можно любой удобный способ, алерт, выспл.окно(errorMessage)
            //       */
            //   });

            //   request.open('POST', './server.php'); //сам запрос
            //   request.setRequestHeader('Content-Type', 'application/json'); //добавили заголовки в  json


            //   request.send(JSON.stringify(body)); // переводим перед отправкой в json формат
            // });

            return fetch('./server.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            });

          };

          export default sendForm;