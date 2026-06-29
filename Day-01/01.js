// 01 - Basic Object with Method
let person = {
  name: 'Johnny',
  age: 23,
  city: 'Shimla',
  introduce() {
    return `hi i'm ${this.name}, ${this.age} years old from ${this.city} `
  }
} 
alert(person.introduce())
// 02 - Bank Account using This
let bankAccount = {
  balance: 1000,
  deposit(amount){
    return this.balance += amount
  },
  withdraw(amount){
    return this.balance -= amount
  },
}
alert(bankAccount.withdraw(2000))
// 03 - For...In Loop with Condition 
let scores = {
  student1 : 66,
  student2 : 71,
  student3 : 80,
  student4 : 90,
  student5 : 70,
  merit(){
    for(let key in this) {
      if ( this[key] > 70) // only above 70, not 70 or above 70
      alert(this[key])
    }
  }
  }
scores.merit()
// 04 - Method Chaining with Counter
let counter = {
  count: 0,
  increment(value) {
    this.count += value;
    return this
  },
  decrement(value){
    this.count -= value;
    return this
  },
  reset(){
    this.count = 0;
    return this
  },
  show(){
    alert(this.count)
  },
}
counter.increment(5).decrement(2).reset().show()
// 05 - Deep Copy using structuredClone
let original = {
  address: 'himachal',
  address2: {
    permanentAddress: 'solan',
    alternate: 'shimla'
  },
}
let duplicate = structuredClone(original);
duplicate.address2.permanentAddress = 'sanjauli';
alert(duplicate.address2.permanentAddress)
alert(original.address2.permanentAddress)