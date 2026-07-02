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
    num = Number(prompt('enter a value'))
  } while (Number.isNaN(num));
  if (Number.isFinite(num)){
    return num;
  } else {
    return null;
  }
}
alert(readNumber());