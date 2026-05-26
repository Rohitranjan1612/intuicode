import { createTopic } from './shared.js';

export const prefixSum = createTopic({
  slug: 'prefix-sum',
  name: 'Prefix Sum',
  subtitle: 'Arrays - Precomputation',
  difficulty: 'Easy',
  type: 'Pattern',
  color: 'teal',
  summary:
    'Precompute running totals so repeated range sum questions become constant-time lookups.',
  what:
    'Prefix sum stores cumulative information from the start of an array up to each index. If prefix[i] means the sum before index i, then the sum from l to r inclusive is prefix[r + 1] - prefix[l]. This extra leading zero is the cleanest way to avoid special cases. The same idea works for counts, frequency balances, parity, XOR, and 2D matrices.',
  when:
    'Use prefix sums when many queries ask about ranges, or when a subarray condition can be rewritten as a difference between two prefixes. It is especially useful for subarray sum equals k, equilibrium index, range sum queries, and counting how often a cumulative value has appeared. The key question is: can the answer for a range be computed from information before the range and after the range?',
  complexity: [
    { label: 'Build', value: 'O(n)', tone: 'good' },
    { label: 'Query', value: 'O(1)', tone: 'good' },
    { label: 'Space', value: 'O(n)', tone: 'ok' },
    { label: 'Updates', value: 'Costly', tone: 'bad' },
    { label: '2D build', value: 'O(nm)', tone: 'ok' },
    { label: '2D query', value: 'O(1)', tone: 'good' },
  ],
  patterns: [
    {
      name: 'Leading zero',
      detail: 'Use prefix length n + 1 so every range uses the same formula: prefix[r + 1] - prefix[l].',
    },
    {
      name: 'Subarray sum k',
      detail: 'If current_prefix - old_prefix = k, then the section between those prefixes sums to k.',
    },
    {
      name: 'Balance transform',
      detail: 'Convert values into +1 and -1, then use prefixes to find equal counts or balanced ranges.',
    },
    {
      name: '2D inclusion-exclusion',
      detail: 'Rectangle sum equals big area minus top and left areas plus the overlap added back.',
    },
  ],
  code: `def build_prefix(nums):
    prefix = [0]
    for x in nums:
        prefix.append(prefix[-1] + x)
    return prefix

def range_sum(prefix, left, right):
    return prefix[right + 1] - prefix[left]

def subarray_sum_equals_k(nums, k):
    seen = {0: 1}
    total = 0
    answer = 0
    for x in nums:
        total += x
        answer += seen.get(total - k, 0)
        seen[total] = seen.get(total, 0) + 1
    return answer`,
  practice: [
    { title: 'Range Sum Query - Immutable', difficulty: 'Easy', source: 'LeetCode #303' },
    { title: 'Subarray Sum Equals K', difficulty: 'Medium', source: 'LeetCode #560' },
    { title: 'Find Pivot Index', difficulty: 'Easy', source: 'LeetCode #724' },
    { title: 'Range Sum Query 2D', difficulty: 'Medium', source: 'LeetCode #304' },
  ],
});
