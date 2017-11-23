class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  //insert() function accepts an argument, 'key', and insert that key in the binary tree
  insert(key) {
    this.length++;
    const node = new Node(key);

    if (!this.root) {
      this.root = node;
    }
    else {
      this.insertNode(this.root, node);
    }
  }

  //insertNode() is a helper functiin that accepts two arguments, first argument is 'node' existed in BST, and second asrgument is 'newNode' that needs to be inserted in the BST
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode;
      }
      else {
        this.insertNode(node.left, newNode);
      }
    }
    else {
      if (!node.right) {
        node.right = newNode;
      }
      else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  //depthFirstTraversee() function takes two arguments, first argument is  'callback' function, and second argument is 'order' which is the order of traversing BST
  depthFirstTraverse(callback, order) {
    this.traverseNode(this.root, callback, order);
  }

  //traverseNode() is a helper function that accepts three arguments, first argument is 'node' which is current node in the BST, second argument is 'callback' function, and third argument is 'order' which is the order of traversing BST
  traverseNode(node, callback, order) {
    if (node) {
      if (order === 'preOrder') callback(node.key);
      this.traverseNode(node.left, callback, order);
      if (order === 'inOrder') callback(node.key);
      this.traverseNode(node.right, callback, order);
      if (order === 'postOrder') callback(node.key);
    }
  }

  //breadthFirstTraverse() function accepts an argument 'callback' and travserses BST in breadth first order
  breadthFirstTraverse(callback) {
    const arr = [this.root];
    let node;

    while (arr.length > 0) {
      node = arr.shift();
      callback(node.key);

      if (node.left) arr.push(node.left);
      if (node.right) arr.push(node.right);
    }
  }

  //contains() or search() function accepts an argument 'key', and return true if BST contains any node with key equals to 'key', otherwise returns false
  search(key) {
   return this.searchNode(this.root, key);
  }

  //serachNode() is a helper function that accepts two arguments, first argument is 'node' which is a current node of BST, and second argument is 'key' that needs to be searched in BST
  searchNode(node, key) {
    if (node.key === key) {
      return true;
    }

    if (key < node.key) {
      if (!node.left){
        return false;
      }
      else {
        return this.searchNode(node.left, key);
      }
    }
    else {
      if(!node.right) {
        return false;
      }
      else{
        return this.searchNode(node.right, key);
      }
    }
  }

  //size() function returns the number of nodes in BST
  size() {
    return this.length;
  }

  //getRoot() function returns root of BST
  getRoot() {
    return this.root;
  }

  //min() function returns the key of the node that has minimum value of the key in BST
  min() {
    return this.minNode(this.root);
  }

  //minNode() is a helper function that accepts an argument 'node', and returns the key of the node that has minimum value of the key in BST
  minNode(node) {
     if (node) {
      if (!node.left) {
        return node.key;
      }
      else {
        return this.minNode(node.left);
      }
    }
  }
}

const printBST = (key) => {
  console.log(key);
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log('-------InOrder Traversal--------');
nums.depthFirstTraverse(printBST, 'inOrder');
console.log('-------PreOrder Traversal--------');
nums.depthFirstTraverse(printBST, 'preOrder');
console.log('-------PostOrder Traversal--------');
nums.depthFirstTraverse(printBST, 'postOrder');
console.log('-------BreadthFirst Traversal--------');
nums.breadthFirstTraverse(printBST);
console.log('-------Test search() function--------');
console.log('nums.search(3) returns ', nums.search(3));
console.log('nums.search(46) returns ', nums.search(46));
console.log('-------Test min() function--------');
console.log('minimum key in BST is ', nums.min());
