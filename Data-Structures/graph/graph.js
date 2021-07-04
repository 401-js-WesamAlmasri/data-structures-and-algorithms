'use strict';

const { Queue } = require('../stacksAndQueues/stacks-and-queues');

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const newVertex = new Vertex(value);
    this.adjacencyList.set(newVertex, []);
    return newVertex;
  }

  addDirectedEdge(vertex1, vertex2, weight = 1) {
    if (!this.isVertexExists(vertex1) || !this.isVertexExists(vertex2)) {
      throw new Error('One or both the vertices not exists in the graph');
    }

    const list = this.adjacencyList.get(vertex1);
    list.push(new Edge(vertex2, weight));
  }

  getVertices() {
    const vertices = new Set();
    for (let vertex of this.adjacencyList.keys()) {
      vertices.add(vertex);
    }
    return vertices;
  }

  getNeighbors(vertex) {
    const neighborsVertices = new Set();
    for (let edge of this.adjacencyList.get(vertex)) {
      neighborsVertices.add({
        vertex: edge.vertex,
        weight: edge.weight,
      });
    }
    return neighborsVertices;
  }

  size() {
    return this.adjacencyList.size;
  }

  isVertexExists(vertex) {
    return this.adjacencyList.has(vertex);
  }

  BreadthFirst(node) {
    const visited = [];
    const queue = new Queue();
    queue.enqueue(node);
    visited.push(node);
    // loop until traverse all the graph
    while (!queue.isEmpty()) {
      const tail = queue.dequeue();
      const children = this.adjacencyList.get(tail);
      for (let child of children) {
        if (!visited.includes(child.vertex)) {
          visited.push(child.vertex);
          queue.enqueue(child.vertex);
        }
      }
    }
    return visited;
  }
}

module.exports = {
  Vertex,
  Edge,
  Graph,
};
