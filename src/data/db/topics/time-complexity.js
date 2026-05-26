import { createTopic, starterPractice } from './shared.js';

export const timeComplexity = createTopic({
  slug: 'time-complexity',
  name: 'Time Complexity',
  subtitle: 'Foundations - Analysis',
  difficulty: 'Easy',
  type: 'Foundation',
  color: 'teal',
  summary:
    'Learn to estimate how runtime and memory grow as input size grows, before writing or optimizing code.',
  what:
    'Time complexity describes how the number of operations grows when the input gets larger. Instead of measuring seconds, we measure growth: O(1), O(log n), O(n), O(n log n), O(n^2), and so on. This lets you compare solutions independent of machine speed. Space complexity does the same for extra memory. In interviews, complexity is the language you use to justify why a solution will pass.',
  when:
    'Use complexity analysis before choosing an approach and after implementing it. If n is around 100, O(n^2) may be fine; if n is 100000, it probably is not. Count loops, nested loops, recursion branches, and data structures. Drop constants and lower-order terms, but do not ignore meaningful extra memory such as hash maps, prefix arrays, recursion stacks, and matrices.',
  complexity: [
    { label: 'O(1)', value: 'Best', tone: 'good' },
    { label: 'O(log n)', value: 'Great', tone: 'good' },
    { label: 'O(n)', value: 'Good', tone: 'good' },
    { label: 'O(n log n)', value: 'Sort', tone: 'ok' },
    { label: 'O(n^2)', value: 'Small n', tone: 'bad' },
    { label: 'O(2^n)', value: 'Tiny n', tone: 'bad' },
  ],
  patterns: [
    {
      name: 'Single pass',
      detail: 'One loop over n items is O(n), even when each step has several constant-time checks.',
    },
    {
      name: 'Nested loops',
      detail: 'A loop inside another loop over the same input usually becomes O(n^2), unless the pointers only move forward overall.',
    },
    {
      name: 'Halving',
      detail: 'When each step cuts the search space in half, the growth is O(log n), as in binary search.',
    },
    {
      name: 'Sort plus scan',
      detail: 'Sorting dominates many solutions at O(n log n), followed by an O(n) scan.',
    },
  ],
  code: `# Complexity examples
def single_pass(nums):
    total = 0
    for x in nums:      # O(n)
        total += x
    return total

def nested_pairs(nums):
    count = 0
    for i in range(len(nums)):       # O(n)
        for j in range(i + 1, len(nums)):  # O(n)
            count += nums[i] == nums[j]
    return count                     # O(n^2)

def binary_steps(n):
    steps = 0
    while n > 1:
        n //= 2
        steps += 1
    return steps                     # O(log n)`,
  practice: [
    { title: 'Binary Search', difficulty: 'Easy', source: 'LeetCode #704' },
    { title: 'Contains Duplicate', difficulty: 'Easy', source: 'LeetCode #217' },
    ...starterPractice,
  ],
});
