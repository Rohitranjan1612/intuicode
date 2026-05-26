import { createTopic } from './shared.js';

export const strings = createTopic({
  slug: 'strings',
  name: 'Strings',
  subtitle: 'Linear data structures - Text',
  difficulty: 'Easy',
  type: 'Data structure',
  color: 'teal',
  summary:
    'Treat strings as character arrays with extra rules around immutability, encoding, and pattern matching.',
  what:
    'A string is an ordered sequence of characters. Many string problems are array problems in disguise, but strings add details: characters may repeat, case may matter, and in many languages strings are immutable. That means repeated concatenation can be expensive. Common interview tasks include palindrome checks, anagrams, substring windows, parsing, compression, and matching patterns.',
  when:
    'Use string techniques when order and character identity matter. Choose two pointers for palindromes and reversal, hashing or frequency arrays for anagrams, sliding windows for substrings, and stack-like logic for parsing nested or removable characters. Always clarify whether input is lowercase English letters, ASCII, Unicode, case-sensitive, or allowed to contain spaces and punctuation.',
  complexity: [
    { label: 'Index', value: 'O(1)', tone: 'good' },
    { label: 'Scan', value: 'O(n)', tone: 'good' },
    { label: 'Concat loop', value: 'Costly', tone: 'bad' },
    { label: 'Freq array', value: 'O(1)', tone: 'good' },
    { label: 'Substring', value: 'Varies', tone: 'ok' },
    { label: 'Space', value: 'O(n)', tone: 'ok' },
  ],
  patterns: [
    {
      name: 'Two pointers',
      detail: 'Move inward for palindrome checks or outward/forward for reversal and cleanup.',
    },
    {
      name: 'Frequency count',
      detail: 'Count characters with an array of 26 slots or a map when the alphabet is larger.',
    },
    {
      name: 'Sliding substring',
      detail: 'Maintain counts inside a moving window for longest or shortest substring problems.',
    },
    {
      name: 'Builder pattern',
      detail: 'Collect characters in a list and join once instead of repeatedly concatenating immutable strings.',
    },
  ],
  code: `def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

def is_anagram(a, b):
    if len(a) != len(b):
        return False
    count = {}
    for ch in a:
        count[ch] = count.get(ch, 0) + 1
    for ch in b:
        count[ch] = count.get(ch, 0) - 1
    return all(value == 0 for value in count.values())`,
  practice: [
    { title: 'Valid Palindrome', difficulty: 'Easy', source: 'LeetCode #125' },
    { title: 'Valid Anagram', difficulty: 'Easy', source: 'LeetCode #242' },
    { title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', source: 'LeetCode #3' },
    { title: 'Minimum Window Substring', difficulty: 'Hard', source: 'LeetCode #76' },
  ],
});
