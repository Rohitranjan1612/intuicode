import { createTopic } from './shared.js';

export const bitManipulation = createTopic({
  slug: 'bit-manipulation',
  name: 'Bit Manipulation',
  subtitle: 'Math - Binary operations',
  difficulty: 'Medium',
  type: 'Technique',
  color: 'purple',
  summary:
    'Use binary representation and bitwise operators to solve parity, masks, subsets, and uniqueness problems.',
  what:
    'Bit manipulation works directly with the binary representation of numbers. Operators like AND, OR, XOR, NOT, left shift, and right shift let you inspect, set, clear, toggle, and combine bits. The most famous interview trick is XOR cancellation: x ^ x = 0 and x ^ 0 = x, so paired values disappear. More advanced problems use bitmasks to represent sets compactly.',
  when:
    'Use bit manipulation when the problem mentions binary, powers of two, parity, subsets, flags, masks, or values appearing twice except one. It is also useful when n is small enough that all subsets can be represented by numbers from 0 to 2^n - 1. Be careful with negative numbers, language-specific integer sizes, and operator precedence.',
  complexity: [
    { label: 'Bit check', value: 'O(1)', tone: 'good' },
    { label: 'Scan bits', value: 'O(log n)', tone: 'ok' },
    { label: 'XOR scan', value: 'O(n)', tone: 'good' },
    { label: 'Subsets', value: 'O(2^n)', tone: 'bad' },
    { label: 'Space', value: 'O(1)', tone: 'good' },
    { label: 'Readability', value: 'Risk', tone: 'bad' },
  ],
  patterns: [
    {
      name: 'XOR cancellation',
      detail: 'Use XOR when duplicate pairs should vanish and one value should remain.',
    },
    {
      name: 'Check a bit',
      detail: 'num & (1 << i) tells whether the ith bit is set.',
    },
    {
      name: 'Clear lowest set bit',
      detail: 'n & (n - 1) removes the rightmost 1 bit and is useful for counting set bits.',
    },
    {
      name: 'Mask as set',
      detail: 'Represent a chosen subset with a bitmask where each bit means included or not included.',
    },
  ],
  code: `def single_number(nums):
    answer = 0
    for x in nums:
        answer ^= x
    return answer

def count_bits(n):
    count = 0
    while n:
        n &= n - 1
        count += 1
    return count

def has_bit(mask, i):
    return (mask & (1 << i)) != 0`,
  practice: [
    { title: 'Single Number', difficulty: 'Easy', source: 'LeetCode #136' },
    { title: 'Number of 1 Bits', difficulty: 'Easy', source: 'LeetCode #191' },
    { title: 'Counting Bits', difficulty: 'Easy', source: 'LeetCode #338' },
    { title: 'Subsets', difficulty: 'Medium', source: 'LeetCode #78' },
  ],
});
