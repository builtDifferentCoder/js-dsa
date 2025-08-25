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
}
