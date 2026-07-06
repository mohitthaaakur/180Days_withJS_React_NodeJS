function AddExpense (name, amount, category, date){
  return {
    name, amount, category, date,
  }
}
const expense1 = new AddExpense('Lunch at Dhaba', '$120', 'Food', '06-07-2026');
const expense2 = new AddExpense('Purchased Car', '$120000', 'Transport', '02-07-2026');
const expense3 = new AddExpense('Electricity Bill', '$850', 'Bills', '04-07-2026');
const expense4 = new AddExpense('GYM Supplement', '$2200', 'Other', '10-07-2026');
const expense5 = new AddExpense('Bus Ticket', '$40', 'Transport', '09-07-2026');
let allExpenses = {
  expense1, expense2, expense3, expense4, expense5,
};
function totalAmount(){
  let totalAmount = 0;
  for (let keys in allExpenses){
    totalAmount += +(allExpenses[keys].amount.substring(1));
  }
  return `$` + totalAmount;
}
function getMax (){
  let maxExpense = 0;
  for(let keys in allExpenses){
    let currentAmount = +(allExpenses[keys].amount.substring(1));
    if ( currentAmount > maxExpense)
    { maxExpense = currentAmount};
  }
  return maxExpense
}
function getMin (){
  let minExpense = getMax();
  for(let keys in allExpenses){
    let currentAmount = +(allExpenses[keys].amount.substring(1));
    if ( currentAmount < minExpense)
    { minExpense = currentAmount};
  }
  return minExpense;
}
let numberOfExpense = Object.keys(allExpenses).length;
let avgExpenses = totalAmount().substring(1) / numberOfExpense;
function convertToInr (){
  let inrAmount = totalAmount().substring(1) * 95;
  return '\u20B9'+inrAmount;
};
function convertToPound(){
  let poundAmount = totalAmount().substring(1) * 0.75;
  return '\u00A3'+Math.round(poundAmount);
}
function chooseConversion(currency){
  if ( currency === 'Rupee'){
    return convertToInr();
  } else if ( currency === 'Pound'){
    return convertToPound();
  } else {
    return totalAmount();
  }
}
