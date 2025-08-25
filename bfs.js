function bfs(v) {
  visited = {};
  q = [];
  q.push(v);
  while (q.length) {
    const node = q.shift();
    if (!visited[node]) {
      visited[node] = true;
    }

    for (const adj in edges[node]) {
      q.push(adj);
    }
  }
}
