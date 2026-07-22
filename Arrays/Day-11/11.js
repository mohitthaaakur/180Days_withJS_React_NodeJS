let orders = [
  { id: 1, item: 'laptop', qty: 2, priority: false},
  { id: 2, item: 'mouse', qty: 10, priority: true},
  { id: 3, item: 'keyboard', qty: 5, priority: false},
  { id: 4, item: 'monitor', qty: 3, priority: true},
  { id: 5, item: 'cable', qty: 20, priority: false},
 ];
 let priorityQueue = [];
 let normalQueue = [];
 orders.forEach((item) => {
  if ( item.priority === true){
    priorityQueue.push(item);
  } else {
    normalQueue.push(item);
  }
 });
 priorityQueue.forEach((item) => {
  console.log(`order #${item.id}: ${item.item} x${item.qty}`);
 });
 normalQueue.forEach((item => {
  console.log(`order #${item.id}: ${item.item} x${item.qty}`);
 }));
 let backorderQueue = [];
 priorityQueue.forEach((item,index,array) => {
  if ( item.qty > 8){
    array.splice(item);
    backorderQueue.push(item)
  }
 })
 console.log(backorderQueue)
 console.log(priorityQueue)