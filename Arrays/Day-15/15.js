let breadCrumbs = ['home', 'products', 'electronics', 'laptops', 'gaming'];
let pathStr = breadCrumbs.reduceRight((preVal, curVal) => {
 return preVal += ' > ' + curVal
});
console.log(pathStr);
let nestedArr = [1, [2, [3, [4, [5]]]]];
let nestedObj = { id: 1, id2: { a: 'sadasd'}, s: 'dfds',}
function deepFlatten (array) {
 let deepFlattenArr = [];
 if ( !(Array.isArray(array))) return array;
  array.forEach(element => {
   if ( (Array.isArray(element))) {
     
   }
  }); 
};
console.log(deepFlatten(nestedArr));