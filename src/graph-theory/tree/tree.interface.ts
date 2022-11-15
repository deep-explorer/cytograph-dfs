export interface Tree {
  root: Node
}

export interface Node {
  id: string
  name: string
  children: Array<Node>
}
