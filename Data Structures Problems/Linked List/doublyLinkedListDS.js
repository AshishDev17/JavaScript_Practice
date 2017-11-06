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
}
