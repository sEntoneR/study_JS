'use sctrict';

let startButton = document.getElementById('start');
console.log('startButton: ', startButton);

let buttons = document.getElementsByTagName('button');
console.log('buttons: ', buttons);

let incomeButton = document.getElementsByTagName('button'[0]),
    expensesButton = document.getElementsByTagName('button'[1]);

let depositCheck = document.querySelector('#deposit-check');
console.log('depositCheck: ', depositCheck);

let incomeItem = document.querySelectorAll('.additional_income-item');
console.log('incomeItem: ', incomeItem);



let budgetDay = document.querySelector('.result-total budget_day-value'),
    budgetMonth = document.querySelector('.result-total expenses_month-value'),
    additionalIncome = document.querySelector('.result-total additional_income-value'),
    additionalExpenses = document.querySelector('.result-total additional_expenses-value'),
    incomePeriod = document.querySelector('.result-total income_period-value'),
    targetMonth = document.querySelector('.result-total target_month-value');

console.log('budgetDay: ', budgetDay);
console.log('budgetMonth: ', budgetMonth);
console.log('additionalIncome: ', additionalIncome);
console.log('additionalExpenses: ', additionalExpenses);
console.log('incomePeriod: ', incomePeriod);
console.log('targetMonth: ', targetMonth);

let salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),   
    targetAmount = document.querySelector('.target-amount');
    

    console.log('salaryAmount: ', salaryAmount);
    console.log('incomeTitle: ', incomeTitle);
    console.log('incomeAmount: ', incomeAmount);
    console.log('expensesTitle: ', expensesTitle);
    console.log('expensesAmount: ', expensesAmount);
    console.log('additionalExpensesItem: ', additionalExpensesItem);


