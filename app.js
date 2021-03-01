const totalEl = document.querySelector('#detail-container h1 span');
const incomeEl = document.querySelector('#income-amount span');
const expenseEl = document.querySelector('#expense-amount span');

let total = parseInt(totalEl.textContent);
let income = parseInt(incomeEl.textContent);
let expense = parseInt(expenseEl.textContent);
console.log(`${total} ${income} ${expense}`);

//tabs input field
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', e => {
    if(e.target.tagName == 'LI'){
        const li = tabs.children;
        Array.from(li).forEach(item => {
            if(item.classList.contains('active')){
                item.classList.remove('active');
            }
        });
        e.target.classList.add('active');

        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(panel => {
            if(targetPanel == panel){
                panel.classList.add('active');
            }
            else{
                panel.classList.remove('active');
            }
        });
    }
});

const list = document.querySelector('#detail-list ul');

const IncomeinputForm = document.forms['income-form'];
IncomeinputForm.addEventListener('submit', e => {
    e.preventDefault();
    const activity = IncomeinputForm.querySelector("input[type='text']#activity");
    const amount = IncomeinputForm.querySelector("input[type='text']#amount");

    const li = document.createElement('li');
    const activityEl = document.createElement('span');
    const amountEl = document.createElement('span');

    activityEl.classList.add('activity');
    amountEl.classList.add('amount');

    activityEl.textContent = activity.value;
    amountEl.textContent = amount.value + '$';
    amountEl.style.fontWeight = 'bold';

    li.append(activityEl);
    li.append(amountEl);
    li.classList.add('income');
    list.append(li);

    console.log(amount.value);
    income += parseInt(amount.value);
    total += parseInt(amount.value);
    totalEl.textContent = `${total}$`;
    incomeEl.textContent = `${income}$`;

    activity.value = "";
    amount.value = "";
});

const ExpenseinputForm = document.forms['expense-form'];
ExpenseinputForm.addEventListener('submit', e => {
    e.preventDefault();
    const activity = ExpenseinputForm.querySelector("input[type='text']#activity");
    const amount = ExpenseinputForm.querySelector("input[type='text']#amount");

    const li = document.createElement('li');
    const activityEl = document.createElement('span');
    const amountEl = document.createElement('span');

    activityEl.classList.add('activity');
    amountEl.classList.add('amount');

    activityEl.textContent = activity.value;
    amountEl.textContent = `-${amount.value}$`;
    amountEl.style.fontWeight = 'bold';

    li.append(activityEl);
    li.append(amountEl);
    li.classList.add('expense');
    list.append(li);

    expense += parseInt(amount.value);
    total -= parseInt(amount.value);
    totalEl.textContent = `${total}$`;
    expenseEl.textContent = `${expense}$`;

    activity.value = "";
    amount.value = "";
});