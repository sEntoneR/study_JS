'use strict';

let money = +prompt('Ваш месячный доход?'),
    income = 'freelance',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 300000,
    question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    expense1 = +prompt('Во сколько это обойдется?'),
    question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    expense2 = +prompt('Во сколько это обойдется?'),
    budgetMonth = money - (expense1 + expense2),
    period = Math.ceil (mission / budgetMonth),
    budgetDay = Math.floor (budgetMonth / 30);


let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// console.log(income.length);
// console.log("Период " + period + " месяцев" + " цель заработать " + mission + " рублей");
// console.log(addExpenses.toLowerCase(), addExpenses.split(", "));
//  console.log("Результат: " + budgetDay, "остаток от деления: " + money % 30 );
// console.log(question1);
// console.log(expense1);
// console.log(question2);
// console.log(expense2);
// console.log(period);
// console.log(budgetMonth);
// console.log(budgetDay);

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

let getExpensesMonth = function(){
 return expense1 + expense2; 
};
//console.log('Сумма расходов:' + getExpensesMonth());


let getAccumulatedMonth = function(){
    return money - (expense1 + expense2);
};

let accumulatedMonth = getAccumulatedMonth();

console.log('Накопления за месяц: ' + getAccumulatedMonth());
//console.log(accumulatedMonth);

let getTargetMonth = function(){
    return mission / accumulatedMonth;
};
console.log('Срок достижения цели:' + Math.floor(getTargetMonth()));

