// Age validator
let userAge;
function validAge(){
  do{
    userAge = prompt('enter your age')
  } while(
   !(isFinite(userAge))
  )
  if (userAge < 1 || userAge > 120){
    alert('enter valid age')
  } else {
    alert('valid age');
  }
}
validAge();
// Bill splitter
let totalAmount;
let numOfPeople;
function ValidInput(input){
  do {
    input = prompt('enter the total bill amount');
  } while (!(isFinite(input)));
  return input;
  };
  totalAmount = new ValidInput(totalAmount);
  numOfPeople = new ValidInput(numOfPeople);
function splitBill (){
  let splitAmount = totalAmount / numOfPeople;
  return {
    exact: splitAmount,
    round: Math.round(splitAmount), 
  }
}
let share = splitBill();
alert(share.exact);
alert(share.round);
// Floating point bug
let val1 = 0.5;
let val2 = 0.4;
let sum = val1 + val2;
alert(sum)
// OTP generator
function generateOtp (){
  let code = Math.random() * 6e5;
  return Math.round(code) ;
}
alert(generateOtp());
// Marks grader
let student = {
  sub1: +prompt('enter 1st subject marks'),
  sub2: +prompt('enter 2nd subject marks'),
  total:  function () {
    return (this.sub1 + this.sub2)
  }
}