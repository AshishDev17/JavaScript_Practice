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

  //addFirst() or addToHead() function accepts an argument 'element', and add node of value equal to element at the head of LL
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
}
