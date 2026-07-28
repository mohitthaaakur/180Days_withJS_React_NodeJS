// Filter range
function filterRange(arr, a, b){
  // let range = []
  // arr.map(value => {          
  //   if ( value >= a && value <= b){
  //    range.push(value);
  //   }
  // })
  // return range;
  return arr.filter(value => (value >= a && value <=b));
};
let arr = [5,3,8,1];
let filteredArr = filterRange(arr, 1, 4);
console.log(filteredArr);
console.log(arr);
// Filter range 'in place'
let arr2 = [6, 5, 4, 3];
function filterRangeInPlace(arr, a, b){
  arr.filter(item => (item >= a && item <= b))
};
filterRangeInPlace(arr2, 1, 4);
console.log(arr2);