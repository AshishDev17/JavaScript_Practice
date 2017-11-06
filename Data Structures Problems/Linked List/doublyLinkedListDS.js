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

  //addBefore() function accepts two arguments, first argument is 'newElement' that is added to LL, and second is 'item' before which
  //'newElement' is added in LL
  addBefore(newElement, item) {
    let node = new Node(newElement);

    let addBeforeNode = this.find(item);

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

  //removeFirst() or removeHead() function removes the first Node or Head of LL
  removeFirst() {

  }
}
