var graph = {
  a: ['c'],
  b: ['c'],
  c: ['s', 'r'],
  d: ['a'],
  s: ['a', 'c'],
  r: ['d'],
  z: ['z'],
  q: [],
 }

var doesPathExist = function(graph, start, target) {
  // Initialize cache
  const visited = {};

  // Create starting conditions
  let queue = [start];
  let head = 0;
  let tail = 0;

  // Breadth First with Pointers
  while (head <= tail) {
    const currVertex = queue[head];
    const edges = graph[currVertex];
    visited[currVertex] = true;
    head++;

    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      if (edge === target) return true;
      else if (!visited[edge]) {
        queue.push(edge);
        tail++
      }
    }
  }
  return false;
}

console.log('RETURNED:', doesPathExist(graph, 'q', 'q')) // false
console.log('RETURNED:', doesPathExist(graph, 'a', 's')) // true
console.log('RETURNED:', doesPathExist(graph, 'a', 'b')) // false
console.log('RETURNED:', doesPathExist(graph, 'a', 'd')) // true
