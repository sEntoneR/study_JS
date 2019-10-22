'use strict';

let money; 
let income;
let addExpenses;
let deposit; 
let mission;
let period;
let budgetDay;
let question1;
let question2;
let expense1;
let expense2;
let budgetMonth;

money = +prompt('Ваш месячный доход?');
income = 'freelance';
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
mission = 300000;
question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
expense1 = +prompt('Во сколько это обойдется?');
question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
expense2 = +prompt('Во сколько это обойдется?');
budgetMonth = money - (expense1 + expense2);
period = Math.ceil (mission / budgetMonth);
budgetDay = Math.floor (budgetMonth / 30);


console.log(typeof money);

console.log(typeof income);

console.log(typeof deposit);

// console.log(income.length);

// console.log("Период " + period + " месяцев" + " цель заработать " + mission + " рублей");

console.log(addExpenses.toLowerCase(), addExpenses.split(", "));

// console.log("Результат: " + budgetDay, "остаток от деления: " + money % 30 );



console.log(question1);
console.log(expense1);
console.log(question2);
console.log(expense2);
console.log(period);
console.log(budgetMonth);
console.log(budgetDay);

// if (!isNaN(parseFloat(expense1)) && isFinite(expense1)) {
    
//     alert('Введите число');
// } else {
//     console.log('число');
// }

if (budgetDay >= 800){
    console.log('Высокий уровень дохода');
} else if (800 > budgetDay >= 300){
    console.log('Средний уровень дохода');
} else if (300 > budgetDay === 0){
    console.log('Низкий уровень дохода');
} else {
    console.log('Что то пошло не так');
}

// switch (budgetDay) {
//     case budgetDay >= 800:
//         console.log('Высокий уровень дохода');
//         break;
//     case 800 > budgetDay >= 300:
//         console.log('Низкий уровень дохода');
//         break;
//     case 300 > budgetDay === 0:
//         console.log('Низкий уровень дохода');
//         break;
//     default:
//         console.log('Что то пошло не так');
// }