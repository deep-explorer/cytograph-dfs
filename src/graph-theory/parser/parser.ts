import { GraphData } from '../graph/graph.interface'
import { Node } from '../tree/tree.interface'

export type Parser = (tree: Node) => GraphData
