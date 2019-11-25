function checkTime () {
    let date = new Date(),
        hours = date.getHours(),
        day = date.getDay(),
        time = date.toLocaleTimeString('en'),
        newDate = new Date();
        newDate.setFullYear(2019, 11, 31);
    if (hours >= 4 && hours <= 11) {
      console.log('Доброе утро');
    }
    else if (hours > 11 && hours <= 17) {
      console.log('Добрый день');
    }
    else if(hours > 17 && hours <= 23) {
      console.log('Добрый вечер');
    }
    else {
      console.log('Доброй ночи');
    }
    switch (day) {
      case 1:
        console.log('Сегодня: понедельник');
        break;
      case 2:
        console.log('Сегодня: вторник');
        break;
      case 3:
        console.log('Сегодня: среда');
        break;
      case 4:
        console.log('Сегодня: четверг');
        break;
      case 5:
        console.log('Сегодня: пятница');
        break;
      case 6:
        console.log('Сегодня: суббота');
        break;
      case 0:
        console.log('Сегодня: воскресенье');
        break;
    }
    console.log('Текущее время: ' + time);
    console.log('До нового года осталось: ' + Math.floor((newDate - date) / 1000 / 3600 / 24) + ' дня');
  }

  checkTime();