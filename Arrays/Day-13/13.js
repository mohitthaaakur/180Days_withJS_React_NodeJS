let rawData = [
  { name: 'laptop stand', price: '2500'},
  { name: 'usb hub', price: '800'},
  { name: 'mechanical keyboard', price: '7500'},
  { name: 'mouse pad', price: '350'},
  { name: 'monitor arm', price: '4500'},
 ];
 let formattedRawData = rawData.map((item) => {
  let firstLetter = item.name.slice(0, 1);
  item.name = firstLetter.toUpperCase() + item.name.slice(1);
  item.price = Number(item.price);
  item.discountedPrice = item.price - ((item.price * 10) / 100);
  if ( item.price < 1000){
    item.label = 'Budget'
  } else if ( item.price > 1000 && item.price < 5000) {
    item.label = 'Mid'
  } else { item.label = 'Premium'}
  return item;
 })
 console.log(formattedRawData);
 let employees = [
  { name: 'rahul', dept: 'engineering', experience: 5, salary: 80000},
  { name: 'priya', dept: 'marketing', experience: 3, salary: 60000},
  { name: 'amit', dept: 'engineering', experience: 5, salary: 90000},
  { name: 'sara', dept: 'marketing', experience: 7, salary: 85000},
  { name: 'john', dept: 'engineering', experience: 2, salary: 50000},
  { name: 'zara', dept: 'marketing', experience: 3, salary: 55000},
 ];
 function sortEmployees (array){
  array.sort((item, item2) => item.name.localeCompare(item2.name));
  array.sort((item, item2) => item2.salary - item.salary);
  array.sort((item, item2) => item2.experience - item.experience);
  array.sort((item, item2) => item.dept.localeCompare(item2.dept));          
  return array
 }
 console.log(sortEmployees(employees));
 let conversation = [
  { user: 'rahul', msg: 'hey!'},
  { user: 'priya', msg: 'hello!'},
  { user: 'rahul', msg: 'how are you?'},
  { user: 'priya', msg: 'i am good, you?'},
  { user: 'rahul', msg: 'doing great!'},
  { user: 'priya', msg: `that's mice!`},
 ];
 console.log(conversation.slice(-3));
 console.log(conversation.slice(-3).reverse());
 function reverseConvo (array){
  let reverseArr = array.sort((a, b) => array.indexOf(b) - array.indexOf(a));
  return reverseArr; 
 };
 console.log(reverseConvo(conversation));