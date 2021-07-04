'use strict';
const { Vertex, Edge, Graph } = require('../Data-Structures/graph/graph');

describe('Vertex Class', () => {
  it('should create vertex successfully', () => {
    // Arrange
    const value = 'wesam';
    // Act
    const vertex = new Vertex(value);
    // Assert
    expect(vertex.value).toEqual(value);
  });
});

describe('Edge Class', () => {
  it('should create vertex successfully', () => {
    // Arrange
    const value = 'wesam';
    const weight = 5;
    const vertex = new Vertex(value);
    // Act
    const edge = new Edge(vertex, weight);
    // Assert
    expect(edge.vertex).toEqual(vertex);
    expect(edge.weight).toEqual(weight);
  });
});

describe('Graph Class', () => {
  it('should create graph successfully', () => {
    // Arrange
    // Act
    const graph = new Graph();
    // Assert
    expect(graph.adjacencyList).not.toBeNull();
  });

  it('should return true if vertex exists in the graph', () => {
    // Arrange
    const graph = new Graph();
    const value = 'wesam';
    const vertex = graph.addVertex(value);
    // Act
    const isExists = graph.isVertexExists(vertex);
    // Assert
    expect(isExists).toBe(true);
  });

  it('should return false if vertex does nit exist in the graph', () => {
    // Arrange
    const graph = new Graph();
    const value = 'wesam';
    const vertex = new Vertex(value);
    // Act
    const isExists = graph.isVertexExists(vertex);
    // Assert
    expect(isExists).toBe(false);
  });

  it('should add one vertex to the graph successfully', () => {
    // Arrange
    const graph = new Graph();
    const value = 'wesam';
    // Act
    graph.addVertex(value);
    // Assert
    expect(graph.adjacencyList.size).toBe(1);
    expect(Array.from(graph.adjacencyList.entries())[0][0].value).toBe(value);
    expect(Array.from(graph.adjacencyList.entries())[0][1]).toEqual([]);
  });

  it('should add multiple vertices to the graph successfully', () => {
    // Arrange
    const graph = new Graph();
    const value1 = 'wesam';
    const value2 = 'rawhi';
    const value3 = 'almasri';
    // Act
    const vertex1 = graph.addVertex(value1);
    const vertex2 = graph.addVertex(value2);
    const vertex3 = graph.addVertex(value3);
    // Assert
    expect(graph.adjacencyList.size).toBe(3);
    expect(graph.adjacencyList.has(vertex1)).toBe(true);
    expect(graph.adjacencyList.has(vertex2)).toBe(true);
    expect(graph.adjacencyList.has(vertex3)).toBe(true);
  });

  it('should add directed edge to the graph successfully', () => {
    // Arrange
    const graph = new Graph();
    const value1 = 'wesam';
    const value2 = 'rawhi';
    const value3 = 'almasri';
    const vertex1 = graph.addVertex(value1);
    const vertex2 = graph.addVertex(value2);
    const vertex3 = graph.addVertex(value3);
    // Act
    graph.addDirectedEdge(vertex1, vertex2, 5);
    graph.addDirectedEdge(vertex1, vertex3, 10);
    // Assert
    expect(graph.adjacencyList.get(vertex1).length).toBe(2);
    expect(graph.adjacencyList.get(vertex1)[0].vertex).toEqual(vertex2);
    expect(graph.adjacencyList.get(vertex1)[0].weight).toBe(5);
    expect(graph.adjacencyList.get(vertex1)[1].vertex).toEqual(vertex3);
    expect(graph.adjacencyList.get(vertex1)[1].weight).toBe(10);
  });

  it('should get all vertices in the graph successfully', () => {
    // Arrange
    const graph = new Graph();
    const value1 = 'wesam';
    const value2 = 'rawhi';
    const value3 = 'almasri';
    const vertex1 = graph.addVertex(value1);
    const vertex2 = graph.addVertex(value2);
    const vertex3 = graph.addVertex(value3);
    // Act
    const vertices = graph.getVertices();
    // Assert
    expect(vertices.size).toBe(3);
    expect(Array.from(vertices.keys())).toEqual([vertex1, vertex2, vertex3]);
  });

  it('should get all vertex Neighbors in the graph with the weights successfully', () => {
    // Arrange
    const graph = new Graph();
    const value1 = 'wesam';
    const value2 = 'rawhi';
    const value3 = 'almasri';
    const vertex1 = graph.addVertex(value1);
    const vertex2 = graph.addVertex(value2);
    const vertex3 = graph.addVertex(value3);
    graph.addDirectedEdge(vertex1, vertex2, 5);
    graph.addDirectedEdge(vertex1, vertex3, 10);
    // Act
    const vertices1Neighbors = graph.getNeighbors(vertex1);
    const vertices2Neighbors = graph.getNeighbors(vertex2);
    // Assert
    expect(vertices1Neighbors.size).toBe(2);
    expect(Array.from(vertices1Neighbors.keys())).toEqual([
      {
        vertex: vertex2,
        weight: 5,
      },
      {
        vertex: vertex3,
        weight: 10,
      },
    ]);

    expect(vertices2Neighbors.size).toBe(0);
    expect(Array.from(vertices2Neighbors.keys())).toEqual([]);
  });

  it('should return the size of the graph successfully', () => {
    // Arrange
    const graph = new Graph();
    const value1 = 'wesam';
    const value2 = 'rawhi';
    const value3 = 'almasri';
    const vertex1 = graph.addVertex(value1);
    const vertex2 = graph.addVertex(value2);
    const vertex3 = graph.addVertex(value3);
    // Act
    const size = graph.size();
    // Assert
    expect(size).toBe(3);
  });

  it('should get an array of all vertices in the graph traversed in breadth first successfully', () => {
    // Arrange
    const graph = new Graph();
    const value1 = 'pandora';
    const value2 = 'arendella';
    const value3 = 'metrovelle';
    const value4 = 'monstropolis';
    const value5 = 'narnia';
    const value6 = 'naboo';
    const vertex1 = graph.addVertex(value1);
    const vertex2 = graph.addVertex(value2);
    const vertex3 = graph.addVertex(value3);
    const vertex4 = graph.addVertex(value4);
    const vertex5 = graph.addVertex(value5);
    const vertex6 = graph.addVertex(value6);
    // add edges
    graph.addDirectedEdge(vertex1, vertex2, 1);
    graph.addDirectedEdge(vertex2, vertex3, 1);
    graph.addDirectedEdge(vertex2, vertex4, 1);
    graph.addDirectedEdge(vertex3, vertex4, 1);
    graph.addDirectedEdge(vertex3, vertex5, 1);
    graph.addDirectedEdge(vertex3, vertex6, 1);
    graph.addDirectedEdge(vertex5, vertex6, 1);
    graph.addDirectedEdge(vertex4, vertex6, 1);

    //         1 ----> 2 ---> 4 -------
    //                 |      |       |
    //                 -----> 3 ----> 6
    //                        |       |
    //                        5 -------

    // Act
    const result = graph.BreadthFirst(vertex1);
    // Assert
    expect(result.length).toBe(6);
    expect(result).toEqual([vertex1, vertex2, vertex3, vertex4, vertex5, vertex6]);
  });
});
