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
      if (head === null) head = node;
      else{
        current = head;

        while (current.next){
          current = current.next;
        }

        current.next = node;
      }
    }
  }
}
