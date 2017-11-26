function breadthFirst (startingNode) {
  // we use a queue to iterate over the tree, progressively adding the children as we go
  // The tree begins with the first node
  const queue = [startingNode];
  // you might want to consider handling edges cases such as not receiving a properly formatted node
  // or make a proper Node constructor/prototype (see below)
  while(queue.length) {
    // we shift off the array instead of iterating with a counter, as we are treating it as a queue (FIFO)
    let node = queue.shift();
    console.log(node.value);
    // es6 format:
    queue.push(...node.children);
    // es5 might look like this if queue were a var (or let) instead of const
    // queue = queue.concat(node.children)
    // or:
    // queue.push.apply(queue, node.children)
  }
}

// depth first seems trivial in comparison! Simply log the value
// and then call the function on each node
function depthFirstPreOrder(startingNode) {
  console.log(startingNode.value);
  startingNode.children.forEach(function(child) {
    depthFirstPreOrder(child);
  });
}

function depthFirstPostOrder(startingNode) {
  startingNode.children.forEach(function(child) {
    depthFirstPostOrder(child);
  });
  console.log(startingNode.value);
}

function node(value) {
  return {
    value,
    children: []
  }
}

var a = node('a');
var b = node('b');
var c = node('c');
var d = node('d');
var e = node('e');
var f = node('f');
var g = node('g');
var h = node('h');
var i = node('i');
var j = node('j');
var k = node('k');
var l = node('l');
var m = node('m');

a.children.push(b,c,d);
b.children.push(e);
e.children.push(k,l);
c.children.push(f,g,h);
h.children.push(m);
d.children.push(i,j);

// will print the alphabet in order a-m
console.log('breadthFirst')
breadthFirst(a)
console.log('----------')

// will print the alphabet ('abeklcfghmdij')
console.log('depthFirstPre')
depthFirstPreOrder(a)
console.log('----------')

console.log('depthFirstPost')
depthFirstPostOrder(a)
console.log('----------')


//  ------------------------------------------------
//  Here's another potential solution using a class and instance methods
class Tree {
  constructor(value) {
    this.value = value
    this.children = []
  }

  // add by value(s)
  addChildren(...vals) {
    vals.forEach(val => {
      this.children.push(new Tree(val))
    })
  }

  // add children node(s)
  addChildNodes(...trees) {
    trees.forEach(tree => {
      if (tree instanceof Tree) {
        this.children.push(tree)
      }
    })
  }

  breadthFirstPrint() {
    const queue = [this]
    while (queue.length) {
      const node = queue.shift()
      console.log(node.value)
      queue.push(...node.children)
    }
  }

  depthFirstPreOrderPrint() {
    console.log(this.value)
    this.children.forEach(tree => tree.depthFirstPreOrderPrint())
  }
}

let A = new Tree('a');
A.addChildren('b', 'c', 'd')

console.log('class solution (with shorter data)')
A.breadthFirstPrint();
