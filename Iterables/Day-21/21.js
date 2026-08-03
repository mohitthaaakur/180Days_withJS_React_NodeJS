let range = {
  from: 1,
  to: 5,
};
range[Symbol.iterator] = function(){
  return {
    current: this.from,
    final: this.to,
    next(){
      if ( this.current <= this.final){
       return {done: false, value: this.current++ };
      } else {
       return { done: true};
      }
    }
  }
};
for (let iterator of range) {
  console.log(iterator);
}; 
let range2 = {
  from: 5,
  to: 1,
  [Symbol.iterator] (){
    this.current = this.from;
    return this
  },
  next() {
    if (this.current >= this.to){
      return { done: false, value: this.current-- };
    } else {
      return { done: true };
    }
  }
};
for (let iterator of range2) {
  console.log(iterator)
};
