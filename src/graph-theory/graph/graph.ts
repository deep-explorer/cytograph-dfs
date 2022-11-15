import cytoscape, {
  Core,
} from 'cytoscape'
import { Node } from '../tree/tree.interface'
import { IEdge, IGraph, IVertex, GraphData } from './graph.interface'
import { Parser } from '../parser/parser';
import { treeData } from '../tree/tree.data';
/**
 * (1) Implement IGraph interface
 */
export class Graph implements IGraph {
  cy: Core;

  constructor(treeData: Node) {
    /**
     * (2) Use Parser interface to parse Node
     */
    const parsedTree = this.parseTree(treeData);

    /**
     * (3) Initialize cy with parsed data
     */
    this.cy = cytoscape({
      elements: {
        nodes: parsedTree.vertices.map(item => ({ data: item })),
        edges: parsedTree.edges.map(item => ({ data: item }))
      }
    })
  }

  parseTree: Parser = (tree: Node) => {
    const vertices: IVertex[] = [{
      id: tree.id,
      name: tree.name
    }
    ];
    const edges: IEdge[] = [];
    tree.children.forEach((item) => {
      edges.push({ source: tree.id, target: item.id });
      const childResult = this.parseTree(item);
      vertices.push(...childResult.vertices);
      edges.push(...childResult.edges);
    })
    return { vertices: vertices, edges: edges }
  }

  /**
   * (4) Use cytoscape under the hood
   */
  bfs(visit: (v: IVertex, e: IEdge) => void) {
    this.cy.elements().bfs({
      root: '#A',
      visit: (v, e, u, i, depth) => {
        visit({
          id: v.id(),
          name: v.data('name')
        }, {
          source: e ? e.data('source') : '',
          target: e ? e.data('target') : ''
        })
      }
    })
  }
  /**
   * (5) Use cytoscape under the hood
   */
  dfs(visit: (v: IVertex, e: IEdge) => void) {
    this.cy.elements().dfs({
      root: '#A',
      visit: (v, e, u, i, depth) => {
        visit({
          id: v.id(),
          name: v.data('name')
        }, {
          source: e ? e.data('source') : '',
          target: e ? e.data('target') : ''
        })
      }
    })
  }
}
