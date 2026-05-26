import { createTopic } from './shared.js';

export const hashing = createTopic({
  slug: 'hashing',
  name: 'Hashing',
  subtitle: 'Data structures - Fast lookup',
  difficulty: 'Easy',
  type: 'Data structure',
  color: 'amber',
  summary:
    'Use hash maps and sets to trade memory for fast lookup, counting, grouping, and seen-state checks.',
  what:
    'Hashing maps a key to a bucket so lookup, insertion, and deletion are O(1) on average. In practice, interview hashing means using a set when you only need existence and a map when you need a value such as count, index, list, or latest position. Hashing is often the fastest way to remove repeated scans: instead of searching the past every time, store what you have seen.',
  when:
    'Use hashing for duplicates, frequency counts, pair complements, grouping anagrams, prefix-sum counts, first/last occurrence, and visited states. It is strongest when order is not the main constraint. Be mindful of memory, key design, and mutation. For compound state, use tuples or stable strings as keys. If sorted order is required, a regular hash map is not enough.',
  complexity: [
    { label: 'Lookup', value: 'O(1) avg', tone: 'good' },
    { label: 'Insert', value: 'O(1) avg', tone: 'good' },
    { label: 'Delete', value: 'O(1) avg', tone: 'good' },
    { label: 'Worst', value: 'O(n)', tone: 'bad' },
    { label: 'Space', value: 'O(n)', tone: 'ok' },
    { label: 'Order', value: 'No', tone: 'bad' },
  ],
  patterns: [
    {
      name: 'Seen set',
      detail: 'Store values already processed to answer "have I seen this before?" in constant time.',
    },
    {
      name: 'Complement map',
      detail: 'For pair problems, look for target - current before adding current to the map.',
    },
    {
      name: 'Frequency map',
      detail: 'Count occurrences for anagrams, majority checks, character windows, and multiset comparisons.',
    },
    {
      name: 'Group by signature',
      detail: 'Convert items to a canonical key, such as sorted letters, then group equal signatures together.',
    },
  ],
  code: `def two_sum(nums, target):
    seen = {}
    for i, x in enumerate(nums):
        need = target - x
        if need in seen:
            return [seen[need], i]
        seen[x] = i

def group_anagrams(words):
    groups = {}
    for word in words:
        key = tuple(sorted(word))
        groups.setdefault(key, []).append(word)
    return list(groups.values())`,
  practice: [
    { title: 'Two Sum', difficulty: 'Easy', source: 'LeetCode #1' },
    { title: 'Group Anagrams', difficulty: 'Medium', source: 'LeetCode #49' },
    { title: 'Longest Consecutive Sequence', difficulty: 'Medium', source: 'LeetCode #128' },
    { title: 'Subarray Sum Equals K', difficulty: 'Medium', source: 'LeetCode #560' },
  ],
});
