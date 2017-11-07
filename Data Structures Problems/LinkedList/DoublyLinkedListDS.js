class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //findNode() function accepts an argument 'element', and returns node whose element is equal to 'element'
  findNode(item) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.element === item) return currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  //add() function accepts an argument 'element', and adds node with the element property in LL
  add(element) {
    let node = new Node(element);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
      node.previous = currentNode;
      this.tail = node;
    }
  }

  //addFirst() or addToHead() function accepts an argument 'element', and add node with property element at the head of LL
  addFirst(element) {
    let node = new Node(element);

    if (this.head) {
      this.head.previous = node;
      node.next = this.head;
    }
    else {
      this.tail = node;
    }

    this.head = node;
  }

  //addLast() or addToTail() function accepts an argument 'element', and add node of value equal to element at the tail of LL
  addLast(element) {
    let node = new Node(element);

    if (this.tail) {
      this.tail.next = node;
      node.previous = this.tail;
    }
    else {
      this.head = node;
    }

    this.tail = node;
  }

  //addBefore() function accepts two arguments, first argument is 'newElement' that is added to LL, and second is 'item' before which
  //'newElement' is added in LL
  addBefore(newElement, item) {
    let node = new Node(newElement);

    let addBeforeNode = this.findNode(item);

    if (addBeforeNode !== null) {
      if (addBeforeNode.previous !== null) {
        addBeforeNode.previous.next = node;
        node.previous = addBeforeNode.previous;
        node.next = addBeforeNode;
        addBeforeNode.previous = node;
      }
      else {
        node.next = addBeforeNode;
        addBeforeNode.previous = node;
        this.head = node;
      }

      return true;
    }

    return false;
  }

  //addAfter() function accepts two arguments, first argument is 'newElement' that is added to LL, and second is 'item' after which
  //'newElement' is added in LL
  addAfter(newElement, item) {
    let node = new Node(newElement);

    let addAfterNode = this.findNode(item);

    if (addAfterNode !== null ) {
      if (addAfterNode.next !== null) {
        addAfterNode.next.previous = node;
        node.next = addAfterNode.next;
        addAfterNode.next = node;
        node.previous = addAfterNode;
      }
      else {
        addAfterNode.next = node;
        node.previous = addAfterNode;
        this.tail = node;
      }

      return true;
    }

    return false;
  }

  //removeFirst() or removeHead() function removes the first Node or Head of LL and returns true if removed otherwise returns false
  removeFirst() {
    if (this.head !== null) {
      if (this.head.next === null) {
        this.head = null;
        this.tail = null;
      }
      else {
        let newHead = this.head.next;
        this.head.next.previous = null;
        this.head.next = null;
        this.head = newHead;
      }

      return true;
    }

    return false;
  }

  //removeLast() or removeTail() function removes the last Node or Tail of LL and returns true if removed otherwise returns false
  removeLast() {
    if (this.tail !== null) {
      if (this.tail.previous === null) {
        this.head = null;
        this.tail = null;
      }
      else {
        let newTail = this.tail.previous;

        this.tail.previous.next = null;
        this.tail.previous = null;
        this.tail = newTail;
      }

      return true;
    }

    return false;
  }

  //remove() function accepts an argument 'item' and removes the node whose element is equal to 'item', if removed return
  //true otherwise returns false;
  remove(item) {
    let nodeToBeRemoved = this.findNode(item);

    if (nodeToBeRemoved !== null) {
      if (nodeToBeRemoved === this.head && nodeToBeRemoved === this.tail) {
        this.head = null;
        this.tail = null;
      }
      else if (nodeToBeRemoved === this.head) {
        let newHead = this.head.next;
        this.head.next.previous = null;
        this.head.next = null;
        this.head = newHead;
      }
      else if (nodeToBeRemoved === this.tail) {
        let newTail = this.tail.previous;
        this.tail.previous.next = null;
        this.tail.previous = null;
        this.tail = newTail;
      }
      else {
        let nodeBefore = nodeToBeRemoved.previous;
        let nodeAfter = nodeToBeRemoved.next;
        nodeBefore.next = nodeAfter;
        nodeAfter.previous = nodeBefore;
        nodeToBeRemoved.next = null;
        nodeToBeRemoved.previous = null;
      }

      return true;
    }

    return false;
  }

  //count() function returns number of nodes in the LL
  count() {
    let currentNode = this.head;
    let count = 0;

    while (currentNode !== null) {
      ++count;
      currentNode = currentNode.next;
    }

    return count;
  }

  //display() function display the element of each node
  display() {
    let currentNode = this.head;

    while (currentNode !== null){
      console.log('Node element = ', currentNode.element);
      currentNode = currentNode.next;
    }
  }
}

module.exports = DoublyLinkedList;

var cities = new DoublyLinkedList();
console.log('------Testing add() function------');
cities.add('Conway');
cities.add('Russellville');
cities.display();
console.log();
console.log('------Testing addFirst() function------');
cities.addFirst('Rachel');
cities.display();
console.log();
console.log('------Testing addLast() function------');
cities.addLast('Mike');
cities.display();
console.log();
console.log('------Testing addBefore() function------');
cities.addBefore('Shelly', 'Mike');
cities.display();
console.log();
console.log('------Testing addAfter() function------');
cities.addAfter('Jane', 'Mike');
cities.display();
console.log();
console.log('------Testing add() function------');
cities.add('John');
cities.add('Collin');
cities.display();
console.log('------Testing addBefore() function------');
cities.addBefore('Nick', 'Rachel');
cities.display();
console.log();
console.log('------Testing addAfter() function------');
cities.addAfter('Willy', 'Rachel');
cities.display();
console.log();
console.log('------Testing removeFirst() function------');
cities.removeFirst();
cities.display();
console.log();
console.log('------Testing removeLast() function------');
cities.removeLast();
cities.display();
console.log();
console.log('------Testing remove() function------');
console.log(`cities.remove('Willy') returns `, cities.remove('Willy'));
cities.display();
console.log('------Testing remove() function------');
console.log(`cities.remove('Jena') returns `, cities.remove('Jena'));
cities.display();
console.log('------Testing count() function------');
console.log(`number of nodes in cities linked list `, cities.count());
