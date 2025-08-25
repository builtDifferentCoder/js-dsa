function dfs(v) {
  visited = {};
  this.helperDfs(v, visited);
}
function helperDfs(v, visited) {
  visited[v] = true;
  for (const adj in edges[v]) {
    if (!visited[adj]) {
      helperDfs(adj, visited);
    }
  }
}
