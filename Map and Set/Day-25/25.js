let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');
console.log(map.get(1));
console.log(map.get('1'))
console.log(map.size);
let john = { name: 'john'};
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
console.log( visitsCountMap.get(john));