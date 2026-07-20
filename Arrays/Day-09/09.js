let products = [
  { name: 'laptop', price: 50000, category: 'electronics'},
  { name: 'phone', price: 25000, category: 'electronics'},
  { name: 'shirt', price: 800, category: 'clothing'},
  { name: 'headphones', price: 3000, category: 'electronics'},
  { name: 'jeans', price: 1500, category: 'clothing'},
] 
let electricProducts = products.filter((product) => product.category === 'electronics');
console.log(electricProducts);
let productNames = electricProducts.map((product) => product.name);
console.log(productNames);
let totalPrice = electricProducts.reduce((previous, current) => previous += current.price, 0);
console.log(totalPrice);
// Transform an Array
let users = [
  { firstname: 'john', lastname: 'doe', age: 25},
  { firstname: 'priya', lastname: 'sharma', age: 22},
  { firstname: 'rahul', lastname: 'verma', age: 30},
  { firstname: 'sara', lastname: 'khan', age: 19},
];
let formattedStr = users.map( ( user) => `${user.firstname} ${user.lastname} (${user.age})`);
console.log(formattedStr);
let people = [
  { name: 'rahul', age: 25},
  { name: 'amit', age: 22},
  { name: 'priya', age: 25},
  { name: 'zara', age: 19},
  { name: 'arjun', age: 22},
];
people.sort((a, b) => {
  if ( a.age !== b.age){
    return a.age - b.age
  }
  return a.name.localeCompare(b.name)
});
console.log(people);