import { createTopic } from './shared.js';

export const subarrays = createTopic({
  slug: 'subarrays',
  name: 'Subarrays',
  subtitle: 'Arrays - Contiguous ranges',
  difficulty: 'Medium',
  type: 'Pattern',
  color: 'teal',
  summary:
    'Understand contiguous ranges, how to enumerate them, and how prefix/window ideas make them efficient.',
  what:
    'A subarray is a contiguous part of an array. That one word, contiguous, separates subarrays from subsequences. For n elements there are O(n^2) subarrays, because every start index can pair with many end indices. Most subarray problems ask you to find a best range, count ranges, or check whether a range with a property exists. The main tools are prefix sums, carry-forward state, sliding window, and Kadane-style dynamic choices.',
  when:
    'Use subarray thinking whenever the problem says contiguous, segment, range, window, or consecutive. Start with the O(n^2) enumeration to understand the target. Then ask whether the range property can be updated as the right end moves, computed from prefix differences, or optimized by dropping harmful previous elements. Be careful with negative numbers: they often break simple sliding window assumptions.',
  complexity: [
    { label: 'All ranges', value: 'O(n^2)', tone: 'bad' },
    { label: 'Kadane', value: 'O(n)', tone: 'good' },
    { label: 'Prefix count', value: 'O(n)', tone: 'good' },
    { label: 'Window', value: 'O(n)', tone: 'good' },
    { label: 'Space', value: 'O(1)-O(n)', tone: 'ok' },
    { label: 'Negative nums', value: 'Tricky', tone: 'bad' },
  ],
  patterns: [
    {
      name: 'Enumerate starts and ends',
      detail: 'The brute force model is useful: fix left, expand right, and update the running range value.',
    },
    {
      name: 'Kadane choice',
      detail: 'At each index choose between extending the previous subarray or starting fresh at the current value.',
    },
    {
      name: 'Prefix difference',
      detail: 'A subarray sum from l to r is a difference between two cumulative sums.',
    },
    {
      name: 'Window when positive',
      detail: 'If all numbers are positive, expanding increases sum and shrinking decreases it, enabling two pointers.',
    },
  ],
  code: `def max_subarray(nums):
    best = current = nums[0]
    for x in nums[1:]:
        current = max(x, current + x)
        best = max(best, current)
    return best

def count_subarrays_sum_k(nums, k):
    seen = {0: 1}
    prefix = 0
    count = 0
    for x in nums:
        prefix += x
        count += seen.get(prefix - k, 0)
        seen[prefix] = seen.get(prefix, 0) + 1
    return count`,
  practice: [
    { title: 'Maximum Subarray', difficulty: 'Medium', source: 'LeetCode #53' },
    { title: 'Subarray Sum Equals K', difficulty: 'Medium', source: 'LeetCode #560' },
    { title: 'Minimum Size Subarray Sum', difficulty: 'Medium', source: 'LeetCode #209' },
    { title: 'Maximum Product Subarray', difficulty: 'Medium', source: 'LeetCode #152' },
  ],
});
