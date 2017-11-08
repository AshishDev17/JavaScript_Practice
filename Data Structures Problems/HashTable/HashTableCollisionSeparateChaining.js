const LinkedList = require('../LinkedList/DoublyLinkedListDS');

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
      this.bucket[index] = new LinkedList();
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
      console.log('Bucket ' + ( i + 1) + ' - ' + this.bucket[i].display());
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
