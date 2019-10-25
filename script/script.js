'use strict';

let money,
    income = 'freelance',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 300000,
    period = 10,
    question1,
    question2;

// let start = function() {
//     money = +prompt('Ваш месячный доход?');

//     while(isNaN(money) || money === '' || money === null){
//         money = +prompt('Ваш месячный доход?');
//     }
// };

let start = function() {
    do{
        money = +prompt('Ваш месячный доход?');
    }
    while(isNaN(money) || money === '' || money === null || money === 0);
    
};

start();

let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(','));




let getExpensesMonth = function(){
    let sum = 0;

    for( let i = 0; i < 2; i++) {
        if ( i === 0) {
            question1 = prompt('Введите обязательную статью доходов?', 'Кварплата');
        }

        if ( i === 1) {
            question2 = prompt('Введите обязательную статью доходов?', 'Шоколадница');
        }
       sum += +prompt('Во сколько это обойдется?', '2500');

}    
 return sum; 
};






let expensesAmount = getExpensesMonth();
console.log('Сумма расходов:' + expensesAmount);


let getAccumulatedMonth = function(){
    return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

console.log('Накопления за месяц: ' + getAccumulatedMonth());
//console.log(accumulatedMonth);

let getTargetMonth = function(){
    let achievGoal = mission / accumulatedMonth;
  for ( let i = 1; i <= 1; i++){
    if (achievGoal < 0) {
        console.log('Цель не будет достигнута!');
    }
    if (achievGoal > 0){
        console.log ('Цель будет достигнута!')
    }
  }
    return achievGoal;
};
console.log('Срок достижения цели:' + Math.floor(getTargetMonth()));

let budgetDay = getAccumulatedMonth() / 30;

let getStatusIncome = function(){
    if (budgetDay >= 800){
        return ('Высокий уровень дохода');
    } else if (800 > budgetDay >= 300){
        return ('Средний уровень дохода');
    } else if (300 > budgetDay === 0){
        return ('Низкий уровень дохода');
    } else {
        return ('Что то пошло не так');
    }
};
console.log(getStatusIncome());

