import { createTopic } from './shared.js';

export const sorting = createTopic({
  slug: 'sorting',
  name: 'Sorting',
  subtitle: 'Algorithms - Ordering',
  difficulty: 'Medium',
  type: 'Algorithm family',
  color: 'purple',
  summary:
    'Understand how ordering unlocks binary search, two pointers, grouping, greedy choices, and cleaner comparisons.',
  what:
    'Sorting rearranges data into a defined order, usually ascending or descending. In interviews, sorting is rarely the final goal by itself. It is a tool that exposes structure: equal values become adjacent, smallest and largest values are easy to access, intervals can be processed in order, and two-pointer strategies become possible. Comparison sorts such as merge sort and quick sort are usually O(n log n), while counting-style sorts can be faster when values are bounded.',
  when:
    'Use sorting when order helps eliminate choices or makes relationships local. If a problem asks for pairs, intervals, duplicates, ranks, closest values, or greedy selection, sorting may simplify it. Be careful: sorting changes original order, costs O(n log n), and may not be allowed if the problem depends on stable positions. Always ask whether a hash map or single pass can solve it without sorting.',
  complexity: [
    { label: 'Built-in', value: 'O(n log n)', tone: 'ok' },
    { label: 'Merge sort', value: 'O(n log n)', tone: 'good' },
    { label: 'Quick avg', value: 'O(n log n)', tone: 'good' },
    { label: 'Quick worst', value: 'O(n^2)', tone: 'bad' },
    { label: 'Counting', value: 'O(n+k)', tone: 'good' },
    { label: 'Space', value: 'Varies', tone: 'ok' },
  ],
  patterns: [
    {
      name: 'Sort then scan',
      detail: 'After sorting, duplicates, gaps, and intervals can often be handled with one linear pass.',
    },
    {
      name: 'Sort then two pointers',
      detail: 'For pair sums or closest values, sorted order tells you which pointer to move.',
    },
    {
      name: 'Custom key',
      detail: 'Sort by the property that makes the greedy decision obvious, such as end time or start time.',
    },
    {
      name: 'Stability and original indices',
      detail: 'If original positions matter, store pairs like (value, index) before sorting.',
    },
  ],
  code: `def merge_intervals(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []

    for start, end in intervals:
        if not merged or start > merged[-1][1]:
            merged.append([start, end])
        else:
            merged[-1][1] = max(merged[-1][1], end)
    return merged

def two_sum_sorted(nums, target):
    nums = sorted((value, index) for index, value in enumerate(nums))
    left, right = 0, len(nums) - 1
    while left < right:
        total = nums[left][0] + nums[right][0]
        if total == target:
            return [nums[left][1], nums[right][1]]
        if total < target:
            left += 1
        else:
            right -= 1`,
  practice: [
    { title: 'Merge Intervals', difficulty: 'Medium', source: 'LeetCode #56' },
    { title: 'Sort Colors', difficulty: 'Medium', source: 'LeetCode #75' },
    { title: 'Meeting Rooms II', difficulty: 'Medium', source: 'LeetCode #253' },
    { title: 'K Closest Points to Origin', difficulty: 'Medium', source: 'LeetCode #973' },
  ],
});
