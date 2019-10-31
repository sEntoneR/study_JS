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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 250000,
    period: 7,
    budget: money,
    expensesMonth: 0,
    budgetMonth: 0,
    budgetDay: 0,

    asking: function(){

        if(confirm('Есть ли у вас дополнительный заработок?')){
            let itemIncome, cashIncome = 0;

            do{
                itemIncome = prompt('Какой у вас дополнительный зарабаток?'); 
            }
            while(itemIncome === null || itemIncome === '' || itemIncome === 0 || !isNaN(itemIncome));

            do{
                cashIncome = prompt('Сколько зарабытаваете на этом?');
            }
            while(cashIncome === null || cashIncome === '' || cashIncome === 0 || isNaN(cashIncome));

        //    let itemIncome = prompt('Какой у вас дополнительный зарабаток?', 'Таксую');
        //    let cashIncome = prompt('Сколько зарабытаваете на этом?', 10000); 
           appData.income[itemIncome] = cashIncome;
        }

        let    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
               appData.addExpenses = addExpenses.charAt(0).toUpperCase() + addExpenses.substring(1).toLowerCase();
               appData.deposit = confirm('Есть ли у вас депозит в банке?');    

            let sum , count = 0;

            for (let i = 0; i < 2; i++){

                do{
                    count = prompt('Введите обязательную статью доходов?', 'Кварплата' + (i + 1)); 
                }
                while(!isNaN(count) || count === '' || count === null || count === 0);
                // count = prompt('Введите обязательную статью доходов?', 'Кварплата' + (i + 1));


            do {
                sum = prompt('Во сколько это обойдется?', '2500');
            }
            while (isNaN(sum) || sum === '' || sum === null || sum === 0);
            appData.expenses[count] = +sum;
        }
    },


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

    getInfoDeposit: function(){
        if(appData.deposit){

            do{
                appData.percentDeposit = prompt('Какой годовой процент?'); 
            }
            while(isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null || appData.percentDeposit === 0);

            do{
                appData.moneyDeposit = prompt('Какая сумма заложена?');
            }
            while(isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null || appData.moneyDeposit === 0);
        }
    },

    calcSavedMoney: function(){
     return appData.budgetMonth * appData.period;
    }


};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getStatusIncome();
appData.getTargetMonth();
appData.getInfoDeposit();
appData.calcSavedMoney();

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
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());










