import { EdgeSingular, NodeSingular } from 'cytoscape'
import { IEdge, IGraph, IVertex } from './graph.interface'
import { treeData } from '../tree/tree.data'
import { Graph } from './graph'

describe('Tree specs', () => {
  let graph: IGraph

  beforeAll(() => {
    graph = new Graph(treeData)
  })
  it('can perform breadth first search', () => {
    const visitedVertices: Array<string> = []

    graph.bfs((v: IVertex, e: IEdge) => {
      visitedVertices.push(v.id)
    })

    expect(visitedVertices).toMatchObject([
      'A',
      'B',
      'E',
      'G',
      'C',
      'F',
      'H',
      'D',
    ])
  })

  it('can perform depth first search', () => {
    const visitedVertices: Array<string> = []

    graph.dfs((v: IVertex, e: IEdge) => {
      visitedVertices.push(v.id)
    })

    expect(visitedVertices).toMatchObject([
      'A',
      'G',
      'H',
      'E',
      'F',
      'B',
      'C',
      'D',
    ])
  })
})
