'use strict';

let money;

let start = function() {
    do{
        money = +prompt('Ваш месячный доход?');
    }
    while(isNaN(money) || money === '' || money === null || money === 0);
    
};

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 250000,
    period: 7,
    asking: function(){
        let    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
               appData.addExpenses = addExpenses.toLowerCase().split(',');
               appData.deposit = confirm('Есть ли у вас депозит в банке?');    
    },
    budget: {money},
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,




    getExpensesMonth: function(){
        let sum = 0,
        question,
        question1,
        question2;
    
        for( let i = 0; i < 2; i++) {
            if ( i === 0) {
                question1 = prompt('Введите обязательную статью доходов?', 'Кварплата');
            }
    
            if ( i === 1) {
                question2 = prompt('Введите обязательную статью доходов?', 'Шоколадница');
            }
            do{
           question = prompt('Во сколько это обойдется?', '2500');
        }
        while(isNaN(question) || question === '' || question === null || question === 0);
        sum += +question;
    }    
     return sum;
    },



    getAccumulatedMonth: function(){
        return money - expensesAmount;
    },

    getTargetMonth: function(){
        let achievGoal = appData.mission / accumulatedMonth;
        for ( let i = 1; i <= 1; i++){
          if (achievGoal < 0) {
              console.log('Цель не будет достигнута!');
          }
          if (achievGoal > 0){
              console.log ('Цель будет достигнута!');
          }
        }
          return achievGoal;
    },

    getStatusIncome: function(){
        if (appData.budgetDay >= 800){
            return ('Высокий уровень дохода');
        } else if (800 > appData.budgetDay >= 300){
            return ('Средний уровень дохода');
        } else if (300 > appData.budgetDay === 0){
            return ('Низкий уровень дохода');
        } else {
            return ('Что то пошло не так');
        }
    },

};

// let question1,
//     question2;

let expensesAmount = appData.getExpensesMonth();
console.log('Сумма расходов:' + expensesAmount);

let accumulatedMonth = appData.getAccumulatedMonth();

console.log('Накопления за месяц: ' + appData.getAccumulatedMonth());

console.log('Срок достижения цели:' + Math.floor(appData.getTargetMonth()));

let budgetDay = appData.getAccumulatedMonth() / 30;

console.log(appData.getStatusIncome());


