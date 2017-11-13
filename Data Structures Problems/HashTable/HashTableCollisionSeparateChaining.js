//const LinkedList = require('../LinkedList/DoublyLinkedListDS');

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

//Struct function accepts two arguments. first is 'key' and second is 'value', and returns
// an object with properties: key and value, and a function toString()
class Struct {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  //displays the key and value of the node
  toString() {
    return '[' + this.key + ' - ' + this.value + ']';
  }
}


class HashTable {

  constructor() {
    this.numOfBuckets = 37;
    this.bucket = [];
  }

  //hash function accepts an argument 'key', and returns the hash of the key
  hash(key) {
    let sum = 0;

    for (let i = 0; i < key.length; i++){
      sum += key.charCodeAt(i);
    }

    sum = sum % this.numOfBuckets;

    return sum;
  }

  //set() or put() accepts two arguments, first argument is 'key' and second argument is 'value'
  //and adds the node with key and value to the respective bucket
  set(key, value) {
    const index = this.hash(key);

    if (!this.bucket[index]) {
      this.bucket[index] = new DoublyLinkedList();
    }

    const node = this.searchNodeWithKey(this.bucket[index], key);

    if (node) {
      node.element.value = value;
    }
    else {
      const struct = new Struct(key, value);
      this.bucket[index].add(struct);
    }
  }

  //get() function accepts an argument 'key', and returns the value
  get(key) {
    const index = this.hash(key);
    if (!this.bucket[index]) return null;

    const node = this.searchNodeWithKey(this.bucket[index], key);

    if (node) return node.element.value;
  }

  //remove() function accepts an argument 'key' , returns true if remove the entry otherwise return false
  remove(key) {
    const index = this.hash(key);

    if (!this.bucket[index]) return false;

    const node = this.searchNodeWithKey(this.bucket[index], key);

    if (node) {
      this.bucket[index].remove(node.element);
      return true;
    }

    return false;
  }

  //hasKey() function accepts an argument 'key', and returns true if Hash Table has entry whose element's key
  //property is equal to 'key'
  hasKey(key) {
    const index = this.hash(key);

    if (!this.bucket[index]) return false;

    const node = this.searchNodeWithKey(this.bucket[index], key);

    return !!node;
  }

  //dsiplayHashTable() function displays the entries of Hash Table on the console.log
  displayHashTable() {
    for (let i = 0; i < this.numOfBuckets; i++) {
      if (this.bucket[i]) {
        console.log('Bucket ' + ( i + 1));
        this.bucket[i].display();
        console.log()
      }
    }
  }

  //searchNodeWithKey() accepts an argument 'key', and if node is present in the hashtable with that 'key'
  //then returns it, otherwise returns null
  searchNodeWithKey(linkedList, key) {
    let currentNode = linkedList.head;

    while (currentNode) {
      if (currentNode.element.key === key) return currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }
}

const hTable = new HashTable();
console.log('------Testing set() function----');
hTable.set('Gandalf', 'gandalf@email.com');
hTable.set('John', 'johnsnow@email.com');
hTable.set('Tyrion', 'tyrion@email.com');
hTable.set('Aaron', 'aaron@email.com');
hTable.set('Donnie', 'donnie@email.com');
hTable.set('Ana', 'ana@email.com');
hTable.set('Jonathan', 'jonathan@email.com');
hTable.set('Jamie', 'jamie@email.com');
hTable.set('Sue', 'sue@email.com');
hTable.set('Mindy', 'mindy@email.com');
hTable.set('Paul', 'paul@email.com');
hTable.set('Nathan', 'nathan@email.com');
hTable.displayHashTable();
console.log();
console.log('------Testing get() function----');
console.log(`value of 'Gandalf' in hash table is `, hTable.get('Gandalf'));
console.log(`value of 'Michael' in hash table is `, hTable.get('Michael'));
console.log();
console.log('------Testing hasKey() function----');
console.log(`Hash table has key 'Gandalf'? `, hTable.hasKey('Gandalf'));
console.log(`Hash table has key 'Micahel'? `, hTable.hasKey('Michael'));
console.log();
