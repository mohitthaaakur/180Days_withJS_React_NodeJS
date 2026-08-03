// Fibonacci iterable
let fibonacci = {
  n: 9,        
}; 
// Reverse string iterator
let str = '𝒳😂𩷶𝒳😂𩷶';
function reverseIterable(str){
  let str2 = Array.from(str).reverse();
  let arr = [];
  for (let iterator of str2) {
    arr.push(iterator);
  }
  return arr;
};
console.log(reverseIterable(str));