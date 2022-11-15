import { Core } from 'cytoscape'

export type IVertex = {
  id: string
  name: string
}

export type IEdge = {
  source: string
  target: string
}

export type Visit<TVertex, TEdge> = (
  vertex: TVertex,
  incomingEdge: TEdge,
) => void

export interface GraphData<
  TVertex extends IVertex = IVertex,
  TEdge extends IEdge = IEdge,
> {
  vertices: Array<TVertex>
  edges: Array<TEdge>
}

export interface IGraph<
  TVertex extends IVertex = IVertex,
  TEdge extends IEdge = IEdge,
> {
  cy: Core
  bfs: (visit: Visit<TVertex, TEdge>) => void
  dfs: (visit: Visit<TVertex, TEdge>) => void
}
