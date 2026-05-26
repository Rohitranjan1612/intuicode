import { createTopic } from './shared.js';

export const twoDMatrices = createTopic({
  slug: '2d-matrices',
  name: '2D Matrices',
  subtitle: 'Arrays - Grids',
  difficulty: 'Medium',
  type: 'Data structure',
  color: 'teal',
  summary:
    'Model rows, columns, neighbors, rectangles, and grid traversal without getting lost in indices.',
  what:
    'A 2D matrix is an array of arrays, usually addressed as matrix[row][col]. Matrix problems are about coordinates, boundaries, directions, and sometimes treating the grid as a graph. Common tasks include traversal, search, rotation, flood fill, path counting, and rectangle queries. The most important habit is to name rows and columns clearly and centralize boundary checks.',
  when:
    'Use matrix techniques when data is naturally arranged in rows and columns or when movement happens up, down, left, and right. For sorted matrices, exploit row/column order. For connected cells, use BFS or DFS. For rectangle sums, build a 2D prefix table. For transformations like rotation, understand whether you can modify in place or need a separate matrix.',
  complexity: [
    { label: 'Traverse', value: 'O(nm)', tone: 'good' },
    { label: 'Cell access', value: 'O(1)', tone: 'good' },
    { label: 'BFS/DFS', value: 'O(nm)', tone: 'ok' },
    { label: '2D prefix', value: 'O(nm)', tone: 'ok' },
    { label: 'Query', value: 'O(1)', tone: 'good' },
    { label: 'Space', value: 'Varies', tone: 'ok' },
  ],
  patterns: [
    {
      name: 'Direction arrays',
      detail: 'Represent neighbor movement with pairs like (1,0), (-1,0), (0,1), and (0,-1).',
    },
    {
      name: 'Boundary guard',
      detail: 'A helper such as in_bounds(r, c) keeps traversal code readable and prevents index mistakes.',
    },
    {
      name: 'Layer traversal',
      detail: 'Spiral and rotation problems often process the grid one outer layer at a time.',
    },
    {
      name: '2D prefix',
      detail: 'Use inclusion-exclusion to answer rectangle sum queries in constant time after preprocessing.',
    },
  ],
  code: `DIRS = [(1, 0), (-1, 0), (0, 1), (0, -1)]

def in_bounds(grid, r, c):
    return 0 <= r < len(grid) and 0 <= c < len(grid[0])

def count_islands(grid):
    rows, cols = len(grid), len(grid[0])
    seen = set()

    def dfs(r, c):
        if not in_bounds(grid, r, c) or grid[r][c] == '0' or (r, c) in seen:
            return
        seen.add((r, c))
        for dr, dc in DIRS:
            dfs(r + dr, c + dc)

    islands = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1' and (r, c) not in seen:
                islands += 1
                dfs(r, c)
    return islands`,
  practice: [
    { title: 'Number of Islands', difficulty: 'Medium', source: 'LeetCode #200' },
    { title: 'Spiral Matrix', difficulty: 'Medium', source: 'LeetCode #54' },
    { title: 'Rotate Image', difficulty: 'Medium', source: 'LeetCode #48' },
    { title: 'Search a 2D Matrix II', difficulty: 'Medium', source: 'LeetCode #240' },
  ],
});
