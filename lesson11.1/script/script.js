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
    control = document.querySelector('.control'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');

   

const AppData = function (){

    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.expensesMonth = 0;
    this.budgetMonth = 0;
    this.budgetDay = 0;
};

AppData.prototype.start = function() {

if (salaryAmount.value === '') {
    return false,
    console.log('введите значение');

} 
this.budget = +salaryAmount.value;

// start.style.display = 'none';
//         cancel.style.display = 'block';
//         salaryAmount.setAttribute('disabled', '');

//         incomeItem.forEach(function(item){
//             item.querySelector('.income-title').setAttribute('disabled', 'disabled');
//             item.querySelector('.income-amount').setAttribute('disabled', 'disabled');
//         });

//         additionalIncomeItem.forEach(function(item){
//             item.setAttribute('disabled', '');
//         });

//         expensesItems.forEach(function(item){
//             item.querySelector('.expenses-title').setAttribute('disabled', 'disabled');
//             item.querySelector('.expenses-amount').setAttribute('disabled', 'disabled');
//         });

//         additionalExpensesItem.setAttribute('disabled', 'disabled');
//         depositCheck.setAttribute('disabled', 'disabled');
//         targetAmount.setAttribute('disabled', 'disabled');



this.getExpInc();
this.getAddExpenses();
this.getAddIncome();
this.getExpensesMonth();
this.getInfoDeposit();
this.getBudget();


this.showResult();


start.style.display = 'none';
cancel.style.display = 'block';

};

AppData.prototype.reset = function(){     
    
    this.income = {};   //yt знаю правильно это или нет
	this.incomeMonth = 0;
	this.addIncome = [];
	this.expenses = {};
	this.addExpenses = [];
	this.deposit = false;
	this.percentDeposit = 0;
	this.moneyDeposit = 0;
	this.budget = 0;
	this.budgetDay = 0;
	this.budgetMonth = 0;
	this.expensesMonth = 0;

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
depositCheck.checked = false;
periodSelect.value = '1';
titlePeriodAmount.innerText = '1';
additionalIncomeItem[0].value = '';
additionalIncomeItem[1].value = '';
additionalExpensesItem.value = '';
targetAmount.value = '';
budgetMonthValue.value = '';
budgetDayValue.value = '';
expensesMonthValue.value = '';
additionalIncomeValue.value = '';
additionalExpensesValue.value = '';
incomePeriodValue.value = '';
targetMonthValue.value = '';

};

AppData.prototype.showResult = function(){
    const _this = this;
budgetMonthValue.value = this.budgetMonth; 
budgetDayValue.value = Math.round(this.budgetDay); 
expensesMonthValue.value = +this.expensesMonth; 
additionalExpensesValue.value = this.addExpenses.join(', ');    
additionalIncomeValue.value = this.addIncome.join(', ');    
targetMonthValue.value = Math.ceil(this.getTargetMonth());  
incomePeriodValue.value = this.calcSavedMoney();  
periodSelect.addEventListener('input', function(){

    titlePeriodAmount.textContent = periodSelect.value;

    if(_this.budgetMonth){
        incomePeriodValue.value = _this.calcSavedMoney();
    }
});  

};

AppData.prototype.addExpensesBlock = function() {
let cloneExpensesItem = expensesItems[0].cloneNode(true);
expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesButton);
expensesItems = document.querySelectorAll('.expenses-items');
if(expensesItems.length === 3){
    expensesButton.style.display = 'none';
}

};

AppData.prototype.addIncomeBlock = function(){
    let cloneIncomeItem = incomeItem[0].cloneNode(true);
    incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomeButton);
    incomeItem = document.querySelectorAll('.income-items');
    if(incomeItem.length === 3){
        incomeButton.style.display = 'none';
    }

};

AppData.prototype.getExpenses = function(){
    const _this = this;
expensesItems.forEach(function(item){
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if(itemExpenses !== '' && cashExpenses !== ''){
        _this.expenses[itemExpenses] = cashExpenses;
    }
});

};

AppData.prototype.getIncome = function(){
    const _this = this;
incomeItem.forEach(function(item){
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if(itemIncome !== '' && cashIncome !== ''){
        _this.income[itemIncome] = cashIncome;
    }
});


for (let key in this.income){
    this.incomeMonth += +this.income[key];  
}

};

AppData.prototype.getExpInc = function(){

    // const count = item => {
    //     const startStr = item.className.split('-')[0];
    //     const itemTitle = item.querySelector(`.${startStr}-title`).value;
    //     const itemAmount = item.querySelector(`.${startStr}-amount`).value;
    //     if(itemTitle !== '' && itemAmount !== ''){
    //         this[startStr][itemTitle] = itemAmount;
    //     }
    // };
    
    //     incomeItem.forEach(count);
    //     expensesItems.forEach(count);

    //     for (let key in this.income){
    //         this.incomeMonth += +this.income[key];  
    //     }
    const count = item => {

		const startStr = item.className.split('-')[0];//получаем income
		const itemTitle = item.querySelector(`.${startStr}-title`).value;
		const itemAmount = item.querySelector(`.${startStr}-amount`).value;
		if (itemTitle !== '' && itemAmount !== '') {
			this[startStr][itemTitle] = itemAmount;
		}
	};
	incomeItem.forEach(count);
	expensesItems.forEach(count);

	for (let key in this.income) {
		this.incomeMonth += +this.income[key];//складываем дополн. заработок
	}
    };
    

AppData.prototype.getAddExpenses = function(){
let addExpenses = additionalExpensesItem.value.split(',');
const _this = this;
addExpenses.forEach(function(item){
    item = item.trim();
    if(item !== ''){
        _this.addExpenses.push(item);
    }
});

};


AppData.prototype.getAddIncome = function(){
    const _this = this;
additionalIncomeItem.forEach(function(item){
    let itemValue = item.value.trim();
    if(itemValue !== ''){
        _this.addIncome.push(itemValue);

    }
});

};

AppData.prototype.getExpensesMonth = function(){
for(let key in this.expenses){                  
    this.expensesMonth += this.expenses[key];   
}

};


AppData.prototype.getBudget = function(){
this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;  
this.budgetDay = this.budgetMonth / 30;
      
};

AppData.prototype.getStatusIncome = function(){
if (this.budgetDay >= 800){               
    return ('Высокий уровень дохода');
} else if (800 > this.budgetDay >= 300){   
    return ('Средний уровень дохода');
} else if (300 > this.budgetDay === 0){    
    return ('Низкий уровень дохода');
} else {
    return ('Что то пошло не так');
}

};


AppData.prototype.getTargetMonth = function(){
let achievGoal = targetAmount.value / this.budgetMonth; 
for ( let i = 1; i <= 1; i++){
  if (achievGoal < 0) {
      console.log('Цель не будет достигнута!');
  }
  if (achievGoal > 0){
      console.log ('Цель будет достигнута!');
  }
}
  return achievGoal;

};


AppData.prototype.getInfoDeposit = function(){
    if(this.deposit){                                                 
            this.percentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value;
    }
};

AppData.prototype.calcSavedMoney = function(){
return this.budgetMonth * periodSelect.value;

};

// EventListeners

AppData.prototype.eventsListeners = function(){
    start.addEventListener('click', this.start.bind(appData));                           
    expensesButton.addEventListener('click', this.addExpensesBlock);
    incomeButton.addEventListener('click', this.addIncomeBlock);
    cancel.addEventListener('click', bindReset);    
};


depositCheck.addEventListener('change', function (){
    if(depositCheck.checked){
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        appData.deposit = 'true';
        depositBank.addEventListener('change', function(){
            let selectIndex = this.options[this.selectedIndex].value;
            if(selectIndex === 'other'){
                depositPercent.style.display = 'inline-block';
                depositPercent.value = '';
            }else {
                depositPercent.style.display = 'none';
                depositPercent.value = selectIndex;
            }
            });
    } else {
        depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        depositAmount.value = '';
        appData.deposit = 'false';
    }
});





const appData = new AppData();
let bindReset = appData.reset.bind(appData);
appData.eventsListeners();





