// Rotate left
let series = [ 1, 2, 3, 4, 5,];
function rotateLeft(array, rotateby){
    for ( let i = 0; i < rotateby; i++){
    array.push(array.shift());
  }               
 return array;         
}
console.log(rotateLeft(series, 2));
// Flaten 2d array
let multidimArr = [
  [ 1, 2, 3,],
  [ 4, 5, 6,],
  [ 7, 8, 9,],
]
function flatten(array){
  let flattenArr = [];
  for ( let values of array){
    for (let innerval of values) {
      flattenArr.push(innerval)
    }
  }
  return flattenArr;
}
console.log(flatten(multidimArr));
// Remove duplicates
let duplicateArr = [ 1, 2, 2, 3, 3, 3, 4, 5, 5, 5,];
function removeDuplication(array){
  let distinctArr = [];
  // let index = [];
  // let finalIndex = [];
  // for (let values of array) {    
  //   index.push(array.indexOf(values));            
  // }
  // for ( let  key of index){
  //     if ( finalIndex.indexOf(key) === -1){
  //       finalIndex.push(key);
  //     }
  //   }
  //   for (let i of finalIndex) {
  //     distinctArr.push(array[i]);
  //   }
  for ( let values of array){
    if ( distinctArr.indexOf(values) === -1){
      distinctArr.push(values)
    }
  }
   return distinctArr;
}
console.log(removeDuplication(duplicateArr));