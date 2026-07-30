// Create an extendable Calculator
function Calculator() {
  let extendableCalc = {
    calculate(str){
      let arr = str.split(' ');
      let result = [];
  arr.forEach(element => {
    if ( isNaN(element)){
      result.push(element);
    } else { result.push(Number(element))}
  });   
  let sign = result.filter((value) => typeof value === 'string'); 
  let num = result.filter((value) => typeof value === 'number');
  let sol;
  if ( this.methods[sign])  {
    sol = num.reduce(this.methods[sign]);                 
  };
  return sol;
    },
    methods : {
      '+' : (a, b) => a + b,             
    },
    addMethod(name, func){
      this.methods[name] = func
    },          
  }
  return extendableCalc;
}
let calc = new Calculator;
console.log(calc.calculate('3 + 7'));
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate('2 ** 3');
console.log(result)
console.log(powerCalc.calculate('3 * 4'));
// Map to names
let john = { name: 'john', age: 25};
let pete = { name: 'pete', age: 30};
let mary = { name: 'mary', age: 28};
let users = [john, pete, mary];
let names = users.map(user => user.name);
console.log(names);
// Map to objects
let john2 = { name: 'john', surname: 'smith', id: 1 };
let pete2 = { name: 'pete', surname: 'hunt', id: 2 };
let mary2 = { name: 'mary', surname: 'key', id: 3 };
let users2 = [ john2, pete2, mary2];
let usersMapped = users2.map(user => {
  return { fullname: `${user.name} ${user.surname}`, id: user.id }
});
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullname);
// Sort users by age
let arr = [ pete, john, mary];
function sortByAge(arr){
  return arr.sort((a, b) => a.age - b.age);
};      
sortByAge(arr);
console.log(arr);
// Shuffle an array
let arr2 = [ 1, 2 ,3];
function shuffle(arr){
  let shuffledArr = [];
  
  return shuffledArr
}
console.log(shuffle(arr2));