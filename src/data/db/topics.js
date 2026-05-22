const basePractice = [
  { title: 'Two Sum', difficulty: 'Easy', source: 'LeetCode #1' },
  { title: 'Maximum Subarray', difficulty: 'Medium', source: 'LeetCode #53' },
  { title: 'Product of Array Except Self', difficulty: 'Medium', source: 'LeetCode #238' },
];

export const topics = {
  arrays: {
    slug: 'arrays',
    name: 'Arrays',
    summary: 'Fast indexed access, prefix sums, Kadane pattern, and array tradeoffs.',
    subtitle: 'Fundamentals - Data structure',
    difficulty: 'Easy',
    type: 'Data structure',
    color: 'teal',
    what:
      'A contiguous block of memory holding elements of the same type. Index-based access is instant, O(1), because the address is computed directly.',
    when:
      'Use arrays when you need fast index access, memory efficiency, or a known order of items. Avoid them when frequent middle insertions are the main operation.',
    complexity: [
      { label: 'Access', value: 'O(1)', tone: 'good' },
      { label: 'Search', value: 'O(n)', tone: 'ok' },
      { label: 'Insert end', value: 'O(1)*', tone: 'good' },
      { label: 'Insert mid', value: 'O(n)', tone: 'bad' },
      { label: 'Delete', value: 'O(n)', tone: 'bad' },
      { label: 'Space', value: 'O(n)', tone: 'ok' },
    ],
    patterns: [
      { name: 'Prefix sum', detail: 'Precompute cumulative sums for O(1) range queries.' },
      { name: "Kadane's algo", detail: 'Track a running best sum while scanning once.' },
      { name: 'Dutch flag', detail: 'Partition 0s, 1s, and 2s in one pass.' },
      { name: 'Frequency map', detail: 'Count occurrences beside an array scan.' },
    ],
    code: `# Array basics in Python
arr = [5, 2, 8, 1, 9]

first = arr[0]       # O(1) access
arr.append(7)        # O(1) amortized
arr.insert(2, 99)    # O(n), shifts right
arr.pop(0)           # O(n), shifts left

def max_subarray(nums):
    best = cur = nums[0]
    for n in nums[1:]:
        cur = max(n, cur + n)
        best = max(best, cur)
    return best`,
    visualizer: 'sort-bars',
    practice: basePractice,
  },
  strings: makeTopic({
    slug: 'strings',
    name: 'Strings',
    subtitle: 'Arrays & strings - Data structure',
    difficulty: 'Easy',
    color: 'teal',
    what: 'A string is an ordered sequence of characters. Most interview problems treat it like an array with extra rules around immutability and encoding.',
    when: 'Use string patterns for matching, counting, palindrome checks, and transformations where character order matters.',
    patterns: ['Two-pass counting', 'Palindrome window', 'Anagram map', 'KMP prefix table'],
  }),
  'sliding-window': makeTopic({
    slug: 'sliding-window',
    name: 'Sliding window',
    subtitle: 'Arrays & strings - Pattern',
    difficulty: 'Medium',
    color: 'teal',
    what: 'A window is a moving slice of an array or string. Instead of recomputing every slice, you add the new item and remove the old item.',
    when: 'Reach for it when a problem asks for longest, shortest, max, min, or count over contiguous subarrays or substrings.',
    patterns: ['Fixed window', 'Variable window', 'Frequency map', 'At most K'],
  }),
  'two-pointers': makeTopic({
    slug: 'two-pointers',
    name: 'Two pointers',
    subtitle: 'Arrays & strings - Pattern',
    difficulty: 'Easy',
    color: 'teal',
    what: 'Two pointers scan from opposite ends or at different speeds. Each move throws away work you no longer need.',
    when: 'Best for sorted arrays, pair sums, reversing, partitioning, and linked-list cycle style movement.',
    patterns: ['Left/right scan', 'Fast/slow', 'Partitioning', 'Pair sum'],
  }),
  'bubble-sort': {
    slug: 'bubble-sort',
    name: 'Bubble sort',
    summary: 'Adjacent swaps, early exit, stability, and sorting intuition.',
    subtitle: 'Sorting - Algorithm',
    difficulty: 'Easy',
    type: 'Algorithm',
    color: 'purple',
    what:
      'Bubble sort repeatedly swaps adjacent elements that are out of order. Each full pass bubbles the largest unsorted value into place.',
    when:
      'Almost never use it in production. Use it to build sorting intuition because every comparison and swap is easy to see.',
    complexity: [
      { label: 'Best', value: 'O(n)', tone: 'good' },
      { label: 'Average', value: 'O(n^2)', tone: 'bad' },
      { label: 'Worst', value: 'O(n^2)', tone: 'bad' },
      { label: 'Space', value: 'O(1)', tone: 'good' },
      { label: 'Stable', value: 'Yes', tone: 'good' },
      { label: 'In-place', value: 'Yes', tone: 'good' },
    ],
    patterns: [
      { name: 'Early exit', detail: 'Stop if a pass made zero swaps.' },
      { name: 'Stable sort', detail: 'Equal elements keep their relative order.' },
      { name: 'Adjacent swap', detail: 'Local fixes compound into global order.' },
      { name: 'Learning visual', detail: 'A great first algorithm to animate.' },
    ],
    code: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr`,
    visualizer: 'sort-bars',
    practice: [
      { title: 'Sort an Array', difficulty: 'Medium', source: 'LeetCode #912' },
      { title: 'Sort Colors', difficulty: 'Medium', source: 'LeetCode #75' },
    ],
  },
  'merge-sort': makeTopic({
    slug: 'merge-sort',
    name: 'Merge sort',
    subtitle: 'Sorting - Algorithm',
    difficulty: 'Medium',
    color: 'purple',
    what: 'Merge sort splits the array, sorts each half, then merges two sorted lists into one sorted list.',
    when: 'Use when predictable O(n log n) time matters and extra O(n) memory is acceptable.',
    patterns: ['Divide and conquer', 'Merge step', 'Stable ordering', 'External sorting'],
  }),
  'quick-sort': makeTopic({
    slug: 'quick-sort',
    name: 'Quick sort',
    subtitle: 'Sorting - Algorithm',
    difficulty: 'Medium',
    color: 'purple',
    what: 'Quick sort chooses a pivot, partitions smaller and larger values around it, then recursively sorts both sides.',
    when: 'Use when in-place average O(n log n) sorting is useful and worst-case risk is controlled by good pivot choices.',
    patterns: ['Partition', 'Random pivot', 'Hoare scheme', 'Lomuto scheme'],
  }),
  'binary-search': {
    slug: 'binary-search',
    name: 'Binary search',
    summary: 'Halve the search space for sorted data or monotonic answers.',
    subtitle: 'Searching - Algorithm',
    difficulty: 'Medium',
    type: 'Algorithm',
    color: 'amber',
    what:
      'Binary search divides a sorted search space in half every step. Each comparison eliminates everything on one side.',
    when:
      'Use it for sorted arrays and monotonic answer spaces, such as finding the minimum speed that satisfies a condition.',
    complexity: [
      { label: 'Time', value: 'O(log n)', tone: 'good' },
      { label: 'Space', value: 'O(1)', tone: 'good' },
      { label: 'Recursive', value: 'O(log n)', tone: 'ok' },
      { label: 'Requires', value: 'Sorted', tone: 'ok' },
      { label: 'Lower bound', value: 'O(log n)', tone: 'good' },
      { label: 'Upper bound', value: 'O(log n)', tone: 'good' },
    ],
    patterns: [
      { name: 'Classic search', detail: 'Find the exact target in sorted data.' },
      { name: 'Lower bound', detail: 'First index where value is at least target.' },
      { name: 'Upper bound', detail: 'First index where value is greater than target.' },
      { name: 'Search answer', detail: 'Binary search the result, not the array.' },
    ],
    code: `def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1`,
    visualizer: 'search-bars',
    practice: [
      { title: 'Binary Search', difficulty: 'Easy', source: 'LeetCode #704' },
      { title: 'Search in Rotated Sorted Array', difficulty: 'Medium', source: 'LeetCode #33' },
      { title: 'Koko Eating Bananas', difficulty: 'Medium', source: 'LeetCode #875' },
    ],
  },
  'binary-search-tree': makeTopic({
    slug: 'binary-search-tree',
    name: 'Binary search tree',
    subtitle: 'Trees & graphs - Data structure',
    difficulty: 'Medium',
    color: 'red',
    what: 'A BST is a binary tree where left values are smaller and right values are larger than the current node.',
    when: 'Use the idea for ordered lookup, validation, range queries, and tree recursion practice.',
    patterns: ['Validate bounds', 'Inorder traversal', 'Insert/search', 'Lowest common ancestor'],
  }),
  bfs: makeTopic({
    slug: 'bfs',
    name: 'BFS',
    subtitle: 'Trees & graphs - Traversal',
    difficulty: 'Medium',
    color: 'red',
    what: 'Breadth-first search explores one level at a time using a queue.',
    when: 'Use BFS for shortest path in unweighted graphs, level order traversal, and minimum steps problems.',
    patterns: ['Queue frontier', 'Visited set', 'Level count', 'Multi-source BFS'],
  }),
  dfs: makeTopic({
    slug: 'dfs',
    name: 'DFS',
    subtitle: 'Trees & graphs - Traversal',
    difficulty: 'Medium',
    color: 'red',
    what: 'Depth-first search follows one path as far as possible before backtracking.',
    when: 'Use DFS for recursion, connected components, cycle detection, topological sort, and backtracking.',
    patterns: ['Recursive stack', 'Visited set', 'Backtracking', 'Postorder'],
  }),
  'dp-intro': {
    slug: 'dp-intro',
    name: 'DP intro',
    summary: 'Store overlapping subproblems so expensive recursion becomes a table.',
    subtitle: 'Dynamic programming - Technique',
    difficulty: 'Hard',
    type: 'Technique',
    color: 'coral',
    what:
      'Dynamic programming breaks a problem into overlapping subproblems, solves each once, then reuses the stored answer.',
    when:
      'Look for count ways, min or max score, can you achieve X, and repeated choices where future answers depend on earlier states.',
    complexity: [
      { label: 'Fibonacci', value: 'O(n)', tone: 'good' },
      { label: 'Knapsack', value: 'O(nW)', tone: 'ok' },
      { label: 'LCS', value: 'O(nm)', tone: 'ok' },
      { label: 'Edit dist', value: 'O(nm)', tone: 'ok' },
      { label: 'Coin change', value: 'O(na)', tone: 'ok' },
      { label: 'Space opt', value: 'O(1)-O(n)', tone: 'good' },
    ],
    patterns: [
      { name: '1D DP', detail: 'State from the last one or two values.' },
      { name: '2D DP', detail: 'Grid, string matching, and pair states.' },
      { name: 'Interval DP', detail: 'Solve every subarray or range.' },
      { name: 'Bitmask DP', detail: 'Represent chosen items as bits.' },
    ],
    code: `def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for total in range(1, amount + 1):
        for coin in coins:
            if coin <= total:
                dp[total] = min(dp[total], dp[total - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1`,
    visualizer: 'dp-grid',
    practice: [
      { title: 'Climbing Stairs', difficulty: 'Easy', source: 'LeetCode #70' },
      { title: 'House Robber', difficulty: 'Medium', source: 'LeetCode #198' },
      { title: 'Coin Change', difficulty: 'Medium', source: 'LeetCode #322' },
    ],
  },
  knapsack: makeTopic({
    slug: 'knapsack',
    name: 'Knapsack',
    subtitle: 'Dynamic programming - Pattern',
    difficulty: 'Hard',
    color: 'coral',
    what: 'Knapsack asks which items to pick when every item has a cost and a value, and capacity is limited.',
    when: 'Use it when each choice is include or skip, and capacity or budget is part of the state.',
    patterns: ['0/1 choices', 'Unbounded reuse', 'Capacity state', 'Space compression'],
  }),
};

function makeTopic({ slug, name, subtitle, difficulty, color, what, when, patterns }) {
  return {
    slug,
    name,
    summary: what,
    subtitle,
    difficulty,
    type: subtitle.split(' - ')[1] ?? 'Topic',
    color,
    what,
    when,
    complexity: [
      { label: 'Learn', value: 'Core', tone: 'good' },
      { label: 'Practice', value: '3+', tone: 'ok' },
      { label: 'Recall', value: 'High', tone: 'good' },
      { label: 'Time', value: 'Varies', tone: 'ok' },
      { label: 'Space', value: 'Varies', tone: 'ok' },
      { label: 'Level', value: difficulty, tone: difficulty === 'Hard' ? 'bad' : 'good' },
    ],
    patterns: patterns.map((pattern) => ({
      name: pattern,
      detail: `Use this as a mental handle when solving ${name.toLowerCase()} problems.`,
    })),
    code: `# ${name} starter pattern
def solve(input_data):
    # Build the state you need.
    # Move one deliberate step at a time.
    return input_data`,
    visualizer: 'sort-bars',
    practice: basePractice,
  };
}
