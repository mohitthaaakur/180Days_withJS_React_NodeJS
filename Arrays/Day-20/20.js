// Get average age
let john = { name: 'john', age: 25};
let pete = { name: 'pete', age: 30};
let mary = { name: 'mary', age: 29};
function getAverageAge(users){
  let avgAge = users.reduce((prevUser, currUser) => ( prevUser + currUser.age), 0);
  return avgAge / users.length;
};
let arr = [ john, pete, mary];
console.log(getAverageAge(arr));
// Find unique array members
let strings = ['asus', 'acer', 'acer', 'lenovo', 'acer','asus' , 'asus', 'lenovo', 'lenovo', ':-0'];
function unique(arr){
  let uniqueStr = [];
  for (let item of arr) {
    if ( !(uniqueStr.includes(item))){
      uniqueStr.push(item);
    }
  };
  return uniqueStr;  
};
console.log(unique(strings));
// Create keyed object from array
let users = [
  { id: 'john', name: 'john smith', age: 20},
  { id: 'ann', name: 'ann smith', age: 24},
  { id: 'pete', name: 'pete smith', age: 31},
];
function groupById(arr){
  return arr.reduce((preVal, curVal) => (` ${preVal.id} : {${curVal}}`))
};
let usersById = groupById(users);
console.log(usersById);