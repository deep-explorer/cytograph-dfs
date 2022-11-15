import { Node } from './tree.interface'

export const treeData: Node = {
  id: 'A',
  name: 'Row',
  children: [
    {
      id: 'B',
      name: 'Col',
      children: [
        {
          id: 'C',
          name: 'Link',
          children: [
            {
              id: 'D',
              name: 'Text',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 'E',
      name: 'Col',
      children: [
        {
          id: 'F',
          name: 'Button',
          children: [],
        },
      ],
    },
    {
      id: 'G',
      name: 'Col',
      children: [
        {
          id: 'H',
          name: 'Image',
          children: [],
        },
      ],
    },
  ],
}
