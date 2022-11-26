class Graph {
  constructor(V) {
    this.V = V;
    this.g = new Array(V + 1);
    for (let i = 0; i < V + 1; i++) {
      this.g[i] = new Array(V + 1);
      for (let j = 0; j < V + 1; j++) {
        this.g[i][j] = 0;
      }
    }

    for (let i = 1; i <= V; i++) this.g[i][i] = 1;
  }

  // add edge between nodes
  addEdge(v, w) {
    this.g[v][w] = 1;
    this.g[w][v] = 1;
  }

  // reachbale nodes
  isReachable(s, d) {
    if (this.g[s][d] == 1) return true;
    else return false;
  }

  computePaths() {
    for (let i = 1; i <= this.V; i++) {
      for (let j = 1; j <= this.V; j++) {
        for (let k = 1; k <= this.V; k++)
          this.g[j][k] =
            this.g[j][k] | (this.g[k][i] != 0 && this.g[i][k] != 0 ? 1 : 0);
      }
    }
  }
}

let graph = new Graph(3);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.computePaths();

let a = 0,
  b = 2;
if (graph.isReachable(a, b)) {
  console.log("Reachable");
} else {
  console.log("Not Reachable");
}
