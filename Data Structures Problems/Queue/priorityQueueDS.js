class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.dataStore = [];
  }

  //enqueue() function adds an element to the end of a queue
  enqueue(element, priority) {
    const queueElement = new QueueElement(element, priority);
    let added = false;

    for (let i = 0; i < this.dataStore.length; i++){
      if (queueElement.priority < this.dataStore[i].priority){
        this.dataStore.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) this.dataStore.push(queueElement);
  }

  //dequeue() function removes an element from the front of a queue
  dequeue() {
    return this.dataStore.shift();
  }

  //front() function returns the front element of the queue
  front() {
    return this.dataStore[0];
  }

  //back() function returns the back element of the queue
  back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  //toString() function displays all the elements in a queue
  toString() {
    return this.dataStore.toString();
  }

  size() {
    return this.dataStore.length;
  }

  //empty()function lets us know if a queue is empty
  isEmpty() {
    if (this.dataStore.length === 0) return true;

    return false;
  }

  //clear() function clears the queue
  clear() {
    this.dataStore = [];
  }

  //print() function prints the queue to console
  print() {
    for (let i = 0; i < this.dataStore.length; i++){
      console.log(`${this.dataStore[i].element} - ${this.dataStore[i].priority}`);
    }
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('John', 2);
priorityQueue.enqueue('Jack', 1);
priorityQueue.enqueue('Camila', 1);
priorityQueue.print();
