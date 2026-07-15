// splice
let arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(2, 2, 'x', 'y');
console.log(arr);
// slice
let nums = [10, 20, 30, 40, 50, 60,];
nums.slice(1, 5);
console.log(nums);
console.log(nums.slice(1, 5));
// concat
let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b));
// For each
let prices = [100, 250, 75, 500]
prices.forEach((price) => {
  console.log(`price: ${price}, 
  With Tax: ${price + (price * 18 / 100)}`)
} );
// indexOf/Includes
let allowed = ['john', 'sara', 'mike'];
let userInput;
function canLogin (array){
  userInput = prompt('enter your name');
  if ( array.includes(userInput)){
    return true
  } else {
    return false
  }
}
console.log(canLogin(allowed)) 
let users = [
  {id: 1 , name: 'john'},
  {id: 2, name: 'july'},
  {id: 3, name: 'john'},
]
let user = users.find(item => item.id === 1);
console.log(user.name)
console.log(users.findIndex(user => user.name === 'john'));
console.log(users.findLastIndex(user => user.name === 'john'));
let johnUser = users.filter(user => user.name === 'john');
console.log(johnUser);
let products = [
  {name: 'Laptop', price: 50000},
  {name: 'Phone', price: 40000},
  {name: 'Watch', price: 30000},
  {name: 'Laptop', price: 35442},
]
console.log(products.find(product => product.price > 34999 )); // only returns the first matching value
console.log(products.findIndex(product => product.name === 'Phone'));
console.log(products.filter(product => product.price > 34999)); // returns all matching values
console.log(products.findLastIndex(product => product.name === 'Laptop'));
let students = [
  {name: 'amy', pass: true},
  {name: 'ravi', pass: false},
  {name: 'sam', pass: true},
];
function isPass(array){
let passStudents = array.filter(ispass => ispass.pass === true);
passStudents.forEach(item => {
  console.log(item.name);
});
}
isPass(students);
