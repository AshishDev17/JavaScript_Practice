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
    this.dataStore.shift();
    return this.dataStore[this.head++];
  }

  //front() function returns the front element of the queue
  front() {
    return this.dataStore[this.head];
  }


  //back() function returns the back element of the queue
  back() {
    return this.dataStore[this.tail - 1];
  }

  //toString() function displays all the elements in a queue
  toString() {
    return this.dataStore.toString();
  }

  size() {
    return this.tail - this.head;
  }

  //empty()function lets us know if a queue is empty
  isEmpty() {
    if (this.tail - this.head <= 0) return true;

    return false;
  }

  //clear() function clears the queue
  clear() {
    this.dataStore = [];
    this.head = 0;
    this.tail = 0;
  }
}

var q = new Queue();
q.enqueue('Meredith');
q.enqueue('Cynthia');
q.enqueue('Jennifer');
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log('Front of queue: ' + q.front());
console.log('Back of queue: ' + q.back());
console.log('size of queue ', q.size());
