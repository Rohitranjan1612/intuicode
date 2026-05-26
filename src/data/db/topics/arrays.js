import { createTopic } from './shared.js';

export const arrays = createTopic({
  slug: 'arrays',
  name: 'Arrays',
  subtitle: 'Linear data structures - Core',
  difficulty: 'Easy',
  type: 'Data structure',
  color: 'teal',
  summary:
    'Master indexed storage, traversal, in-place updates, and the tradeoffs that power most DSA patterns.',
  what:
    'An array is an ordered collection where each element has an index. The big advantage is direct access: if you know the index, reading or writing an element is O(1). The tradeoff is that inserting or deleting in the middle requires shifting elements. Arrays are the base layer for many patterns: prefix sums, sliding windows, two pointers, sorting, binary search, and dynamic programming tables.',
  when:
    'Use arrays whenever order matters and you need to scan, index, compare neighbors, or store a compact sequence. Interview array questions often ask you to avoid unnecessary extra space, detect repeated work, or transform the array in place. Watch for edge cases: empty arrays, one element, duplicates, negative numbers, sorted versus unsorted input, and whether you are allowed to modify the original array.',
  complexity: [
    { label: 'Access', value: 'O(1)', tone: 'good' },
    { label: 'Update', value: 'O(1)', tone: 'good' },
    { label: 'Search', value: 'O(n)', tone: 'ok' },
    { label: 'Insert mid', value: 'O(n)', tone: 'bad' },
    { label: 'Delete mid', value: 'O(n)', tone: 'bad' },
    { label: 'Space', value: 'O(n)', tone: 'ok' },
  ],
  patterns: [
    {
      name: 'Index thinking',
      detail: 'Translate positions into indices carefully. Most bugs come from wrong start, end, or inclusive range decisions.',
    },
    {
      name: 'In-place update',
      detail: 'Use write pointers or swaps when the problem asks for O(1) extra space.',
    },
    {
      name: 'Neighbor relation',
      detail: 'Compare nums[i] with nums[i - 1] or nums[i + 1] for peaks, sorted runs, duplicates, and transitions.',
    },
    {
      name: 'Scan state',
      detail: 'Carry a running best, current sum, count, min, max, or last seen value while traversing once.',
    },
  ],
  code: `def remove_duplicates_sorted(nums):
    if not nums:
        return 0

    write = 1
    for read in range(1, len(nums)):
        if nums[read] != nums[read - 1]:
            nums[write] = nums[read]
            write += 1
    return write

def max_profit(prices):
    best = 0
    min_price = float('inf')
    for price in prices:
        min_price = min(min_price, price)
        best = max(best, price - min_price)
    return best`,
  practice: [
    { title: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', source: 'LeetCode #26' },
    { title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', source: 'LeetCode #121' },
    { title: 'Product of Array Except Self', difficulty: 'Medium', source: 'LeetCode #238' },
    { title: 'Rotate Array', difficulty: 'Medium', source: 'LeetCode #189' },
  ],
});
