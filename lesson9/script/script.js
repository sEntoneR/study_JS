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
    cancel = document.getElementById('cancel'),
    control = document.querySelector('.control');
   



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

    },

    reset: function(){                                          // RESET

        start.style.display = '';
        cancel.style.display = '';


        incomeItem.forEach(function(item){
            item.querySelector('.income-title').value = '';
            item.querySelector('.income-amount').value = '';
        });


        expensesItems.forEach(function(item){
            item.querySelector('.expenses-title').value = '';
            item.querySelector('.expenses-amount').value = '';
        });

        salaryAmount.value = '';
        incomeTitle.value = '';
        expensesTitle.value = '';
        targetAmount.value = '';
        depositCheck.value = '';
        periodSelect.value = '1';
        titlePeriodAmount.value = '1';
        additionalIncomeItem.value = '';
        additionalExpensesItem.value = '';
        targetAmount.value = '';
        budgetMonthValue.value = '';
        budgetDayValue.value = '';
        expensesMonthValue.value = '';
        additionalIncomeValue.value = '';
        additionalExpensesValue.value = '';
        incomePeriodValue.value = '';
        targetMonthValue.value = '';


    },

    showResult: function(){
        budgetMonthValue.value = this.budgetMonth; // использовал this 
        budgetDayValue.value = Math.round(this.budgetDay);  // использовал this 
        expensesMonthValue.value = +this.expensesMonth; // использовал this 
        additionalExpensesValue.value = this.addExpenses.join(', ');    // использовал this 
        additionalIncomeValue.value = this.addIncome.join(', ');    // использовал this 
        targetMonthValue.value = Math.ceil(this.getTargetMonth());  // использовал this 
        incomePeriodValue.value = this.calcSavedMoney();    // использовал this 

        console.log(this);


        
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

        for (let key in this.income){
            this.incomeMonth += +this.income[key];  // использовал this 
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
        for(let key in this.expenses){                  // использовал this 
            this.expensesMonth += this.expenses[key];   // использовал this 
        }
    },


    getBudget: function(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth; // использовал this 
        this.budgetDay = this.budgetMonth / 30;                                // использовал this 
    },

    getStatusIncome: function(){
        if (this.budgetDay >= 800){               // использовал this 
            return ('Высокий уровень дохода');
        } else if (800 > this.budgetDay >= 300){  // использовал this 
            return ('Средний уровень дохода');
        } else if (300 > this.budgetDay === 0){   // использовал this 
            return ('Низкий уровень дохода');
        } else {
            return ('Что то пошло не так');
        }
    },


     getTargetMonth: function(){
        let achievGoal = targetAmount.value / this.budgetMonth; // использовал this 
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
        if(this.deposit){                                                  // использовал this 

            do{
                this.percentDeposit = prompt('Какой годовой процент?'); 
            }
            while(isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit === null || appData.percentDeposit === 0);

            do{
                this.moneyDeposit = prompt('Какая сумма заложена?');
            }
            while(isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null || appData.moneyDeposit === 0);
        }
    },

    calcSavedMoney: function(){
     return this.budgetMonth * periodSelect.value;               // использовал this 
    }


};


start.addEventListener('click', function(){  // привязал контекст вызова к appData
    appData.start.call(appData);             //
});                                          //
                                             //   
// let startFunc = appData.start.bind(appData); // Олег, посмотри, пожалуйста привязка 
                                                // bind правильная?

expensesButton.addEventListener('click', appData.addExpensesBlock);
incomeButton.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', function(){
    titlePeriodAmount.textContent = periodSelect.value;

    if(appData.budgetMonth){
        incomePeriodValue.value = appData.calcSavedMoney();
    }
});

cancel.addEventListener('click', appData.reset);

