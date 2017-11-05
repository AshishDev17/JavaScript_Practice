class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
  }

  insert(element, after) {
    const node = new Node(element);
    let current;

    if (after === undefined){
      if (this.head === null) this.head = node;
      else {
        current = this.head;

        while (current.next){
          current = current.next;
        }

        current.next = node;
      }
    }


  }

  find(element) {
    let currentNode = this.head;

    while (currentNode.element !== element){
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}
