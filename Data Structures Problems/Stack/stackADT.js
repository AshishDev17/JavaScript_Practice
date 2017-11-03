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
