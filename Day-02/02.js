// Two functions – one object
let object = {}
function A(){
  return object;
}
function B(){
  return object;
}
let a = new A();
let b = new B();
alert(a === b);
// Create new Calculator
function Calculator(){
 this.number1;
 this.number2;
 this.read = function(){
  this.number1 = +prompt('enter A value', 0);
  this.number2 = +prompt('enter a value', 0);
 };
 this.sum = function(){
  return this.number1 + this.number2;
 };
 this.mul = function(){
  return this.number1 * this.number2
 }
}
let calculator = new Calculator();
calculator.read();
alert(`sum = ${calculator.sum()}`)
alert(`mul = ${calculator.mul()}`)
// Create new Accumulator
function Accumulator(startingValue){
  this.value = startingValue;
  this.read = function(){
  this.value += +prompt('enter a value');
  return this.value   
  }
}
let accumulator = new Accumulator(23);
accumulator.read();
alert(accumulator.value);
// Car Constructor with new operator
function Car(brand, year){
  this.brand = brand;
  this.year = year;
  this.info = function(){
    return `${this.brand}, ${this.year}`;
  }
}
let car1 = new Car('maruti 800', 1997);
let car2 = new Car('mahindra', 2027);
alert(car1.info());
alert(car2.info());
// Safe property access using optional chaining 
let student = {
  principal: {
    name: 'mohan',
    city: 'shimla',
  }
};
let student2 = {
  studentName: 'koasamc',
  greet(){
    alert(`${this.studentName} say hi`)
  }
};  
alert(student?.principal?.name);
alert(student2?.principal?.name);
student2.greet?.();
student.greet?.();
let key = 'studentName';
alert(student?.[key]);
alert(student2?.[key]);