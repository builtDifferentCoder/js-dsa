class DirectedGraph {
  constructor() {
    this.edges = {};
  }
  addVertex(v) {
    this.edges[v] = {};
  }
  addEdge(orgV, destV, w) {
    if (w == undefined) {
      w = 0;
    }
    this.edges[orgV][destV] = w;
  }
  removeEdge(orgV, destV) {
    if (this.edges[orgV] && this.edges[orgV][destV] != undefined) {
      delete this.edges[orgV][destV];
    }
  }
  removeVertex(v) {
    for (const adj in this.edges[v]) {
      this.removeEdge(adj, v);
    }
    delete this.edges[v];
  }
  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  findMin(q, dist) {
    let minDist = Infinity;
    let nodeWithMinDistance = null;
    for (let node in q) {
      if (dist[node] <= minDist) {
        minDist = dist[node];
        nodeWithMinDistance = node;
      }
    }
    return nodeWithMinDistance;
  }
  dijkstra(source) {
    let Q = {};
    let dist = {};
    for (let v in this.edges) {
      dist[v] = Infinity;
      Q[v] = this.edges[v];
    }
    dist[source] = 0;
    while (this.isEmpty(Q)) {
      var u = this.findMin(Q, dist);
      delete Q[u];

      for (let neighbor in this.edges[u]) {
        var alt = dist[u] + this.edges[u][neighbor];
        if (alt < dist[neighbor]) {
          dist[neighbor] = alt;
        }
      }
    }
    return dist;
  }
  helper(v, visited, stack) {
    visited[v] = true;
    for (let item in this.edges[v]) {
      if (!visited[item]) {
        this.helper(item, visited, stack);
      }
    }
    stack.unshift(v);
  }
  topologicalSort() {
    let visited = {};
    let stack = [];
    for (let item in this.edges) {
      if (!visited[item]) {
        this.helper(item, visited, stack);
      }
    }
    return stack;
  }
}

// var digraph1 = new DirectedGraph();
// digraph1.addVertex("A");
// digraph1.addVertex("B");
// digraph1.addVertex("C");
// digraph1.addVertex("D");
// digraph1.addEdge("A", "B", 1);
// digraph1.addEdge("B", "C", 1);
// digraph1.addEdge("C", "A", 1);
// digraph1.addEdge("A", "D", 1);
// console.log(digraph1);
// console.log(digraph1.dijkstra("A"));

var g = new DirectedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("B", "A");
g.addEdge("D", "C");
g.addEdge("D", "B");
g.addEdge("B", "A");
g.addEdge("A", "F");
g.addEdge("E", "C");
var topologicalOrder = g.topologicalSort();
console.log(g);
// DirectedGraph {
// V: 6,
// E: 6,
// edges:
//  { A: { F: 0 },
//    B: { A: 0 },
//    C: {},
//    D: { C: 0, B: 0 },
//    E: { C: 0 },
//    F: {} } }
console.log(topologicalOrder);
