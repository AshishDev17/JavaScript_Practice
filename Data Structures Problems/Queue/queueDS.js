class Queue {
  constructor() {
    this.dataStore = [];
    this.head = 0;
    this.tail = 0;
  }

  //enqueue() function adds an element to the end of a queue
  enqueue(element) {
    this.dataStore[this.tail++] = element;
  }

  //dequeue() function removes an element from the front of a queue
  dequeue() {
    return this.dataStore[this.head++];
  }

  //front() function returns the front element of the queue
  front() {
    return this.dataStore[this.head];
  }
  //back() function returns the back element of the queue
  back() {
    return this.dataStore[this.tail];
  }

  //toString() function displays all the elements in a queue
  toString() {
    return this.dataStore.toString();
  }

  //empty()function lets us know if a queue is empty
  empty() {
    if (this.tail - this.head <= 0) return true;

    return false;
  }
}
