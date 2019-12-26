const sendForm = () => {

  const errorMassage = 'Ошибка',
        loadMassage = 'Идет отправка',
        successMassage = 'Отправлено';

  const form = document.querySelectorAll('form');

  const statusMassage = document.createElement('div');
  
  statusMassage.style.cssText = 'font-size: 2rem; color: green';

  const question = document.querySelector('.input-question');

  form.forEach((item) => {

    item.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!item.classList.contains('director-form')) {
        item.appendChild(statusMassage);
        statusMassage.textContent = loadMassage;
        const formData = new FormData(item); 
        let body = {};
        formData.forEach((val, key) => {
          body[key] = val;
        });

        if(event.target.closest('.popup-calc')){
          body.calc = localStorage.test;
        }

        if(event.target.closest('.popup-consultation')){
          body.question = localStorage.question;
        }

        const success = (response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200');  
          }
          statusMassage.style.cssText = 'font-size: 2rem; color: orange';
          statusMassage.textContent = successMassage;
          setTimeout (() => {
            statusMassage.remove();
          }, 4000);
        };

        const error = (error) => {
          statusMassage.style.cssText = 'font-size: 2rem; color: orange';
          statusMassage.textContent = errorMassage;
          setTimeout (() => {
            statusMassage.remove();
          }, 4000);
        };

        postData(body)
          .then(success)
          .catch(error);
        
        item.reset();
        delete localStorage.test;
        delete localStorage.question;
        const inputs = item.querySelectorAll('input');
      inputs.forEach((item) => item.value = ''); // очистка инпутов

      } 

      

    });

  });
  const postData = (body) => {
    return fetch ('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      credentials: 'include' 
    });

    
  };
};


export default sendForm;