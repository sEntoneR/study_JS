'use sctrict';
let start = document.getElementById('start'),
    buttons = document.getElementsByTagName('button'),
    incomeButton = buttons[0],
    expensesButton = buttons[1],
    depositCheck = document.querySelector('#deposit-check'),
    incomeItem = document.querySelectorAll('.additional_income-item'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncome = document.getElementsByClassName('additional_income-value')[0],
    additionalExpenses = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriod = document.getElementsByClassName('income_period-value')[0],
    targetMonth = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses'),   
    periodSelect = document.querySelector('.period-select');
console.log('depositCheck: ', depositCheck);
console.log('startButton: ', start);
console.log('buttons: ', buttons);
console.log('incomeItem: ', incomeItem);
console.log('budgetDay: ', budgetDayValue);
console.log('budgetMonth: ', budgetMonthValue);
console.log('additionalIncome: ', additionalIncome);
console.log('additionalExpenses: ', additionalExpenses);
console.log('incomePeriod: ', incomePeriod);
console.log('targetMonth: ', targetMonth);
console.log('salaryAmount: ', salaryAmount);
console.log('incomeTitle: ', incomeTitle);
console.log('incomeAmount: ', incomeAmount);
console.log('expensesTitle: ', expensesTitle);
console.log('expensesAmount: ', expensesAmount);
console.log('additionalExpensesItem: ', additionalExpensesItem);


