let logs = ['info', 'error_404', 'info', 'error_500', 'error_404', 'info', 'error_500', 'error_404', 'error_500'];
console.log(logs.indexOf('error_404'));
console.log(logs.lastIndexOf('error_404'));
let occurOfError500 = (array) =>{
 let total = 0;
 for (let item of array) {
   if ( item === 'error_500'){
     total++;
   }            
 } 
 return total;
}
console.log(occurOfError500(logs));
let userRoles = ['admin', 'editor', 'viewer'];
function hasPermission (userRoles, requiredRoles){
 return userRoles.includes(requiredRoles);
}
console.log(hasPermission(userRoles, 'superuser'));
console.log(hasPermission(userRoles, 'viewer'));
let cart = [
 {name: 'laptop', price: 50000, stock: 3},
 {name: 'phone', price: 25000, stock: 10},
 {name: 'headphones', price: 3000, stock: 4},
 {name: 'charger', price: 1500, stock: 2},
 {name: 'case', price: 500, stock: 8},
]
console.log(cart.findIndex((item) => item.name === 'headphones'));
let transactions = [
 { id: 1, amount: 3000, status: 'success', method: 'upi', daysAgo: 1},
 { id: 2, amount: 8000, status: 'failed', method: 'card', daysAgo: 2},
 { id: 3, amount: 500, status: 'success', method: 'upi', daysAgo: 4},
 { id: 4, amount: 12000, status: 'success', method: 'upi', daysAgo: 2},
 { id: 5, amount: 200, status: 'failed', method: 'upi', daysAgo: 1},
 { id: 6, amount: 7500, status: 'success', method: 'card', daysAgo: 3},
];
console.log(transactions.filter((item) => item.amount > 5000));
console.log(transactions.filter((item) => item.status === 'failed'));
console.log(transactions.filter((item) => item.method === 'upi' && item.daysAgo <= 3));