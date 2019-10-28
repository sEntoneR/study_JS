'use strict';

let a,
    b;

do{
    a = +prompt('Введите первое число'); 
}
while(isNaN(a) || a === '' || a === null || a === 0 );

do {
    b = +prompt('Введите второе число');
}
while(isNaN(b) || b === '' || b === null || b === 0 );

if(a > b){
    alert(('Первое число больше второго'));
} else if (a < b){
    alert(('Второе число больше первого'));
} else if (a === b){
    alert(('Оба числа равны'));
}


console.log(a,b);