//You can assume priorities are number values
//In case of a tie, priority goes to earlier insertion

class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next;
  }
}

class PriorityQueue {
  constructor() {
    this.first;
  }

  insert(data, priority) {
    if (!this.first || this.first.priority < priority) {
        // First case handles both empty PQ and higher priority than anything else
        const prevFirst = this.first;
        this.first = new Node(data, priority);
        this.first.next = prevFirst;
    } else {
        // Second case finds the place to insert the new item and inserts it
        let pointer = this.first;
        while (pointer.next && pointer.next.priority >= priority) {
            pointer = pointer.next;
        }
        const newItem = new Node(data, priority);
        newItem.next = pointer.next;
        pointer.next = newItem;
    }
  }

  peek() {
    return this.first.data;
  }

  popMax() {
    var retVal = this.first.data;
    this.first = this.first.next;
    return retVal;
  }
}

var pq = new PriorityQueue();
pq.insert('Jill, concussion', 7);
pq.insert('John, stomach pain', 5);
console.log(pq.peek()) // ==> 'Jill, concussion'
console.log(pq.peek()) // ==> 'Jill, concussion'  // Jill is still in the PQ
pq.insert('Dave, sprained ankle', 1);
pq.insert('Bob, breathing problems', 8)
console.log(pq.peek()) // ==> 'Bob, breathing problems'
console.log(pq.popMax()) // ==> 'Bob, breathing problems'
console.log(pq.peek()) // ==> 'Jill, concussion' // Bob has been removed from the PQ
