'use sctrict';
let start = document.getElementById('start'),
    buttons = document.getElementsByTagName('button'),
    incomeButton = buttons[0],
    expensesButton = buttons[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses = document.querySelector('.additional_expenses'),   
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItem = document.querySelectorAll('.income-items'),
    titlePeriodAmount = document.querySelector('.period-amount'),
    cancel = document.querySelector('#cancel'),
    control = document.querySelector('.control');
// console.log('depositCheck: ', depositCheck);
// console.log('startButton: ', start);
// console.log('buttons: ', buttons);
// console.log('incomeItem: ', incomeItem);
// console.log('budgetDay: ', budgetDayValue);
// console.log('budgetMonth: ', budgetMonthValue);
// console.log('additionalIncome: ', additionalIncome);
// console.log('additionalExpenses: ', additionalExpenses);
// console.log('incomePeriod: ', incomePeriod);
// console.log('targetMonth: ', targetMonth);
// console.log('salaryAmount: ', salaryAmount);
// console.log('incomeTitle: ', incomeTitle);
// console.log('incomeAmount: ', incomeAmount);
// console.log('expensesTitle: ', expensesTitle);
// console.log('expensesAmount: ', expensesAmount);
// console.log('additionalExpensesItem: ', additionalExpensesItem);







let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    expensesMonth: 0,
    budgetMonth: 0,
    budgetDay: 0,
    start: function() {

        if (salaryAmount.value === '') {
            return false,
            console.log('введите значение');

        } 

        // let _control = document.querySelector('control');
        //     _control.forEach(function(item){
        //         item.querySelector('.control').setAttribute('disabled', 'disabled');
        //          if (salaryAmount.value === ''){
        //              control = _control;
        //          }

        //     });
        appData.budget = +salaryAmount.value;


        
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();

        appData.showResult();

        start.style.display = 'none';
        cancel.style.display = 'block';
        salaryAmount.setAttribute('disabled', '');

        incomeItem.forEach(function(item){
            item.querySelector('.income-title').setAttribute('disabled', 'disabled');
            item.querySelector('.income-amount').setAttribute('disabled', 'disabled');
        });

        additionalIncomeItem.forEach(function(item){
            item.setAttribute('disabled', '');
        });

        expensesItems.forEach(function(item){
            item.querySelector('.expenses-title').setAttribute('disabled', 'disabled');
            item.querySelector('.expenses-amount').setAttribute('disabled', 'disabled');
        });

        additionalExpensesItem.setAttribute('disabled', 'disabled');
        depositCheck.setAttribute('disabled', 'disabled');
        targetAmount.setAttribute('disabled', 'disabled');


    },

    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = Math.round(appData.budgetDay);
        expensesMonthValue.value = +appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcSavedMoney();

        


        
    },
    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesButton);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensesButton.style.display = 'none';
        }
    },
    addIncomeBlock: function(){
            let cloneIncomeItem = incomeItem[0].cloneNode(true);
            incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomeButton);
            incomeItem = document.querySelectorAll('.income-items');
            if(incomeItem.length === 3){
                incomeButton.style.display = 'none';
            }

    },

    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function(){
        incomeItem.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = cashIncome;
            }
        });

        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        }

    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },


    getAddIncome:function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);

            }
        });

    },

    getExpensesMonth: function(){
        for(let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
    },


    getBudget: function(){
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;    
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
        let achievGoal = targetAmount.value / appData.budgetMonth;
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
     return appData.budgetMonth * periodSelect.value;
    }


};


start.addEventListener('click', appData.start);
expensesButton.addEventListener('click', appData.addExpensesBlock);
incomeButton.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', function(){
    titlePeriodAmount.textContent = periodSelect.value;

    if(appData.budgetMonth){
        incomePeriodValue.value = appData.calcSavedMoney();
    }
});




