class Stack {
  constructor() {
    this.top = 0;
    this.dataStore = [];
  }

  //push() function adds the element to the top of the stack
  push(element) {
    this.dataStore[this.top++] = element;
  }

  //pop() function returns the element in the top position of the stack
  pop() {
    return this.dataStore[--this.top];
  }

  //peek() function returns the value stored at the top of a stack without removing it from the stack
  peek() {
   return this.dataStore[this.top - 1];
  }

  //clear() function clears the stack
  clear() {
    this.top = 0;
    this.dataStore = [];
  }

  //length() function returns number of elements stored in stack
  length() {
    return this.top;
  }

  //toString() function returns string representation of list
  toString() {
    return this.dataStore.toString();
  }

  //isEmpty() function checks whether the stack is empty or not
  isEmpty() {
    return this.top === 0;
  }
}


//application of stack that converts from base 10 to any base

const baseConverter = (number, base) =>{
  let convertedStr = '';
  const digits = '0123456789ABCDEF';
  const stack = new Stack();

  while (number > 0){
    stack.push(Math.floor(number % base));
    number = Math.floor(number / base);
  }

  while (stack.length() > 0){
    convertedStr += digits[stack.pop()];
  }

  return convertedStr;
};

console.log('baseConverter(100345, 2) = ', baseConverter(100345, 2));
console.log('baseConverter(100345, 8) = ', baseConverter(100345, 8));
console.log('baseConverter(100345, 16) = ', baseConverter(100345, 16));
