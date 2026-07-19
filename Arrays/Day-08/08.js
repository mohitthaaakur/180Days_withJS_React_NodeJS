// Every Check
let scores = [ 80, 90, 76, 60,];
console.log(scores.every((value) => value > 50,));
// Fill practice
let arr = Array(5).fill(0);
arr.fill(9, 1, 4);
console.log(arr);
// reduceRight
let letters = ['a', 'b', 'c',];
let str = letters.reduceRight((current, str) => str += current);
console.log(str);