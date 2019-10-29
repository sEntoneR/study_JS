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
        // let    sum,
        //        question1 = 0,
        //        question2 = 0;
       
        //        for( let i = 0; i < 2; i++) {
        //            if ( i === 0) {
        //                question1 = prompt('Введите обязательную статью доходов?', 'Кварплата');
        //            }
           
        //            if ( i === 1) {
        //                question2 = prompt('Введите обязательную статью доходов?', 'Шоколадница');
        //            }
        //            do{
        //           sum = prompt('Во сколько это обойдется?', '2500');
        //        }
        //        while(isNaN(sum) || sum === '' || sum === null || sum === 0);
        //        appData.expenses[question1] = sum;
        //        appData.expenses[question2] = sum;
        //    }   
        // },  
        
            let sum , count = 0;

            for (let i = 0; i < 2; i++){
                count = prompt('Введите обязательную статью доходов?', 'Кварплата' + (i + 1));


            do {
                sum = prompt('Во сколько это обойдется?', '2500');
            }
            while (isNaN(sum) || sum === '' || sum === null || sum === 0);
            appData.expenses[count] = +sum;
        }
    },

    budget: money,
    expensesMonth: 0,
    budgetMonth: 0,
    budgetDay: 0,
 




    getExpensesMonth: function(){
        for(let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
    },


    getBudget: function(){
        appData.budgetMonth = money - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);    
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

    // budgetDay: function(){
    //  return    appData.getBudget() / 30;},
    
    // budgetMonth: function(){
    //     return appData.getBudget();
    // },

     getTargetMonth: function(){
        let achievGoal = appData.mission / appData.budgetMonth;
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

};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getStatusIncome();
appData.getTargetMonth();

for(let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + ' Значение: ' + appData[key]);
}



// let expensesAmount = appData.expensesMonth;
console.log('Сумма расходов:' + appData.expensesMonth);
//console.log('Накопления за месяц: ' + appData.budgetMonth());
console.log('Срок достижения цели:' + Math.floor(appData.getTargetMonth()));
console.log('Уровень дохода:' + appData.budgetMonth);
// console.log(appData.getStatusIncome());
// console.log(appData.budgetDay());






