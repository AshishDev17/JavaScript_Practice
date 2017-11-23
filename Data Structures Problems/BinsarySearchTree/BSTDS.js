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
  }

  //insert() function accepts an argument, 'key', and insert that key in the binary tree
  insert(key) {
    const node = new Node(key);

    if (!this.root) {
      this.root = node;
    }
    else {
      this.insertNode(this.root, node);
    }
  }

  //insertNode() functiin accepts two arguments, first argument is 'node' existed in BST, and second asrgument is 'newNode' that needs to be inserted in the BST
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

  //traverseNode() function accepts three arguments, first argument is 'node' which is current node in the BST, second argument is 'callback' function, and third argument is 'order' which is the order of traversing BST
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
