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
      if(!node.left) {
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

  //inOrderTraverse() function takes an argument 'callBack', and executes that 'callBack' function on each key of the BST in a 'InOrder' traversal order
  inOrderTraverse(callBack) {
    this.inOrderTraverseNode(this.root, callBack);
  }

  //inOrderTraverseNode() function accepts two arguments, first argument is 'node' which is current node in the BST, and second argument is 'callBack' function
  inOrderTraverseNode(node, callBack) {
    if (node) {
      this.inOrderTraverseNode(node.left, callBack);
      callBack(node.key);
      this.inOrderTraverseNode(node.right, callBack);
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
nums.inOrderTraverse(printBST);
