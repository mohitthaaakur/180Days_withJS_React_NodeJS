// Object to Map and back
let obj = {
  a: 1, b: 2, c:3
};
console.log(obj)
let map = Object.entriesntries(new Map(item => item * 2));
console.log(map);
let obj2 = Object.fromEntries(map);
console.log(obj2);
// Set intersection/union/difference
// Group by first letter using Map
// Cache/ memorize with Map
// Map iteration check