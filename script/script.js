let money;
let income;
let addExpenses;
let deposit;
let mission;
let period;
let budgetDay;

money = 45000; // Доход за месяц
income = 'freelance';
addExpenses = 'Internet, Telephone, Eat';
deposit = true;
mission = 300000;
period = 12;
budgetDay = money/30;

console.log(typeof money);

console.log(typeof income);

console.log(typeof deposit);

console.log(income.length);

console.log("Период " + period + " месяцев" + " цель заработать " + mission + " рублей");

console.log(addExpenses.toLowerCase(), addExpenses.split(", "));

console.log("Результат: " + budgetDay, "остаток от деления: " + money % 30 );