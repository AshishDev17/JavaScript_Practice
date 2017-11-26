/*
  REACTO: Tree Traversal

  DESCRIPTION: Today you will write a series of iterator functions for trees. Each of these function will take a node of the tree and iterate through all other nodes. The difference between them is the order in which they iterate.

  REFERENCE IMAGE: https://www.cpp.edu/~ftang/courses/CS241/notes/images/trees/tree1.bmp
*/

/*
  Breadth First Implementation
*/
function breadthFirst (startingNode, iterFunc) {
  const queue = [startingNode];
  for (let head = 0; head < queue.length; head++) {
    let node = queue[head];
    iterFunc(node.value);
    queue.push(...node.children);
    // queue = queue.concat(node.children)
  }
}

/*
  Depth First: Pre-Order
*/
function depthFirstPreOrder(startingNode, iterFunc) {
  iterFunc(startingNode.value);
  startingNode.children.forEach(function(child) {
    depthFirstPreOrder(child, iterFunc);
  });
}

/*
  Depth First: Post-Order
*/
function depthFirstPostOrder(startingNode, iterFunc) {
  startingNode.children.forEach(function(child) {
    depthFirstPostOrder(child, iterFunc);
  });
  iterFunc(startingNode.value);
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

console.log('Breadth First')
breadthFirst(a, (nodeValue) => console.log(nodeValue))
console.log('Depth First: Pre-Order')
depthFirstPreOrder(a, (nodeValue) => console.log(nodeValue))
console.log('Depth First: Post-Order')
depthFirstPostOrder(a, (nodeValue) => console.log(nodeValue))
