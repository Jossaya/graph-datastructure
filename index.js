// Try edit message
class Graph {
  constructor() {
    this.vertices = [];
    this.edges = [];
    this.totalEdges = 0;
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }
  removeVertex() {
    const index = this.vertices.indexOf(vertex);
    if (~index) {
      this.vertices.splice(index, 1);
    }
  }
  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
    ++this.totalEdges;
  }
  removeEdge() {}
  traverseDFS(vertex, fn) {
    if (!~this.vertices.indexOf(vertex)) {
      return console.log("Vertex not found");
    }
    const visited = [];
    this._traverseDFS(vertex, visited, fn);
  }
  _traverseDFS(vertex, visited, fn) {
    visited[vertex] = true;

    if (this.edges[vertex] !== undefined) {
      fn(vertex);
    }
    for (let i = 0; i < this.edges[vertex].length; i++) {
      if (!visited[this.edges[vertex][i]]) {
        this._traverseDFS(this.edges[vertex][i], visited, fn);
      }
    }
  }
  traverseBFS(vertex, fn) {
    if (!~this.vertices.indexOf(vertex)) {
      return console.log("Vertex not found");
    }

    let queue = [];
    queue.push(vertex);
    let visited = [];
    visited[vertex] = true;

    while (queue.length) {
      vertex = queue.shift();
      fn(vertex);
      for (let i = 0; i < this.edges[vertex].length; i++) {
        if (!visited[this.edges[vertex][i]]) {
          visited[this.edges[vertex][i]] = true;
          queue.push(this.edges[vertex][i]);
        }
      }
    }
  }
  print() {
    console.log(
      this.vertices
        .map(function(vertex) {
          return (vertex + " -> " + this.edges[vertex].join(", ")).trim();
        }, this)
        .join(" | ")
    );
  }
}
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.print();
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(4, 6);
graph.print();
graph.traverseBFS(3, vertex => {
  console.log(vertex);
});
console.log("______________________________________");
graph.traverseDFS(3, vertex => {
  console.log(vertex);
});
