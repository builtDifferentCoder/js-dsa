class UndirectedGraph {
  constructor() {
    this.edges = {};
  }
  addVertex(vertex) {
    this.edges[vertex] = {};
  }
  addEdge(v1, v2, w) {
    if (w == undefined) w = 0;
    this.edges[v1][v2] = w;
    this.edges[v2][v1] = w;
  }
  removeEdge(v1, v2) {
    if (this.edges[v1] && this.edges[v1][v2] != undefined) {
      delete this.edges[v1][v2];
    }
    if (this.edges[v2] && this.edges[v2][v1] != undefined) {
      delete this.edges[v2][v1];
    }
  }
  removeVertex(v) {
    for (const adj in this.edges[v]) {
      this.removeEdge(v, adj);
    }
    delete this.edges[v];
  }
}

var graph2 = new UndirectedGraph();
graph2.addVertex(1);
graph2.addVertex(2);
graph2.addEdge(1, 2, 1);
console.log(graph2.edges); // 1: {2: 0},  2: {1: 0}
graph2.addVertex(3);
graph2.addVertex(4);
graph2.addVertex(5);
graph2.addEdge(2, 3, 8);
graph2.addEdge(3, 4, 10);
graph2.addEdge(4, 5, 100);
graph2.addEdge(1, 5, 88);
console.log(graph2.edges);
graph2.removeVertex(5);
graph2.removeVertex(1);
console.log(graph2.edges);
graph2.removeEdge(2, 3);
console.log(graph2.edges);
