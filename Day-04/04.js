// Sum numbers from the visitor
let n1 = Number(prompt('enter number 1'));
let n2 = Number(prompt('enter number 2'))
let sum = n1 + n2;
alert(sum);
// Why 6.35.toFixed(1) ==6.3?
console.log(6.35.toFixed(20));
console.log((6.35 * 10).toFixed(20));
alert(Math.round(6.35 * 10) / 10);
// Repeat until the input is a number
function readNumber (){
  let num;
  do{
    num = prompt('enter a number', '')
  } while (!isFinite(num));
  if (num === null || num === '') {
    return null
  } else {
    return +num
  }
}
alert(`Read ${readNumber()}`);
// An occasional infinite loop
// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
let i = 0;
while(i < 11){
  i += 0.2;
  if(i > 9.8 && i < 10.2){
    alert(i);
  }
} // i != 10 because, i will never become 10 when adding decimal like 0.2 here, such precision loss happens while adding decimal numbers
// A random number from Min to Max
function random(min, max){
  return min + Math.random() * (max - min);
}
alert(random(1,5));
function randomInteger(min, max){
  let int = min + Math.random() * (max + 1 - min);
  return Math.floor(int);
}
alert(randomInteger(1, 5));      
