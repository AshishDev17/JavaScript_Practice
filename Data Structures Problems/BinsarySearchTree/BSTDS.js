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
        insertNode(node.left, newNode);
      }
    }
    else {
      if (!node.right) {
        node.right = newNode;
      }
      else {
        insertNode(node.right, newNode);
      }
    }
  }

}
