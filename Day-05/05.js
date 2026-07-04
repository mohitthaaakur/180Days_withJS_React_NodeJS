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
function validTotal(){
  do {
    totalAmount = prompt('enter the total bill amount');
  } while (!(isFinite(totalAmount)));
  return totalAmount;
  };
function validPeople(){
    do {
      numOfPeople = prompt('enter the number of person');
    } while (!(isFinite(numOfPeople)));
    return numOfPeople;
  };
  validTotal();
  validPeople();
function splitBill (){
  let splitAmount = totalAmount / numOfPeople;
  return {
    exact: splitAmount,
    round: Math.round(splitAmount), 
  }
}
let share = splitBill();
alert(`Exact share = ${share.exact}`);
alert(`Rounded share = ${share.round}`);
// Floating point bug
let val1 = 0.1 * 10;
let val2 = 0.2 * 10;
let sum = (val1 + val2) / 10;
alert(sum === 0.3)
// OTP generator
function generateOtp (){
  let code = Math.random() * 6e5;
  return Math.round(code) ;
}
alert(generateOtp());
// Marks grader
let student = {  
  sub1: +prompt('enter 1st subject marks ?/50'),
  sub2: +prompt('enter 2nd subject marks ?/50'),
  total:  function () {
    return (this.sub1 + this.sub2)
  }
}
function marksGrader () {
  if ( student.total() > 100){
    alert('Enter Valid Marks')
  } else if ( student.total() >= 90){
    alert('A Grade')
  } else if ( student.total() < 90 && student.total() >= 75){
    alert('B Grade')
  } else if( student.total() < 75 && student.total() >= 50){
    alert('C Grade')
  } else {
    alert('Fail')
  }
};
marksGrader();
