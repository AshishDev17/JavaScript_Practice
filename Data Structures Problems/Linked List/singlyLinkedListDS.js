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

  /*insert function accepts two arguments, first one is 'element' that is inserted in the linked list
  and other is 'item' (if given), after which 'element' is inserted in the linked list. If 'item' is not
  given then 'element' will be inserted in the end pf the linked list*/
  insert(newElement, item) {
    const node = new Node(newElement);
    let current;

    if (item === undefined){
      if (this.head === null) this.head = node;
      else {
        current = this.head;

        while (current.next){
          current = current.next;
        }

        current.next = node;
      }
    }
    else {
      let insertAfter = find(item);

      if (insertAfter !== null){
        node.next = insertAfter.next;
        insertAfter.next = node;
      }
    }
  }

  //remove() function accepts an argument 'item', and removes the node whose element is equal to item
  remove(item) {
    let previousNode = findPrevious(item);

    if (previousNode.next !== null){
      previousNode.next = previousNode.next.next;
    }
  }

  //contains() function accepts an argument 'item', and returns true if any node in the linked list contains
  //an element whose value is equal to 'item'
  contains(item) {
    let node = find(item);

    if(node.element === item) return true;

    return false;
  }

  //find() function accepts an argument 'element', and returns node whose element is equal to 'element'
  find(item) {
    let currentNode = this.head;

    while (currentNode.element !== item){
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  //findPrevious() function accepts an argument 'item', and returns node that exists previous to the node
  //whose element is equal to 'item'
  findPrevious(item) {
    let currentNode = this.head;

    while (currentNode.next !== null && currentNode.next.element !== item){
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}
