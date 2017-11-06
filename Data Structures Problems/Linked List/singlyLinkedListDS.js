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
      let previousNode = this.findNode(item);

      if (previousNode){
        node.next = previousNode.next;
        previousNode.next = node;
      }
    }
  }

  //remove() function accepts an argument 'item', and removes the node whose element is equal to item
  remove(item) {
    let previousNode = this.findPreviousNode(item);

    if (previousNode !== null && previousNode.next !== null){
      previousNode.next = previousNode.next.next;
    }
  }

  //contains() function accepts an argument 'item', and returns true if any node in the linked list contains
  //an element whose value is equal to 'item'
  contains(item) {
    let node = this.findNode(item);

    if(node === null) return false;

    return true;
  }

  //display() function display the element of each node
  display() {
    let currentNode = this.head;

    while (currentNode !== null){
      console.log('Node element = ', currentNode.element);
      currentNode = currentNode.next;
    }
  }

  //findNode() function accepts an argument 'element', and returns node whose element is equal to 'element'
  findNode(item) {
    let currentNode = this.head;

    while (currentNode !== null){
      if (currentNode.element === item) return currentNode;

      currentNode = currentNode.next;
    }

    return null;
  }

  //findPreviousNode() function accepts an argument 'item', and returns node that exists previous to the node
  //whose element is equal to 'item'
  findPreviousNode(item) {
    let currentNode = this.head;

    while (currentNode !== null){
      if (currentNode.next.element === item) return currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }
}

var cities = new SinglyLinkedList();
cities.insert('Conway');
cities.insert('Russellville');
cities.insert('Carlisle', 'Conway');
cities.insert('Alma', 'Carlisle');
cities.remove('Carlisle');
cities.display();
console.log('Does LL contains Conway ', cities.contains('Conway'));
console.log('Does LL contains Richie ', cities.contains('Richie'));
