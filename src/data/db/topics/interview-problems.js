import { createTopic } from './shared.js';

export const interviewProblems = createTopic({
  slug: 'interview-problems',
  name: 'Interview Problems',
  subtitle: 'Practice - Strategy',
  difficulty: 'Medium',
  type: 'Practice system',
  color: 'coral',
  summary:
    'Bring the patterns together: classify the problem, explain tradeoffs, code cleanly, and test like an interviewer is watching.',
  what:
    'Interview problems are less about isolated tricks and more about controlled problem solving under time pressure. A strong answer combines pattern recognition, communication, correctness, complexity analysis, and clean implementation. The same problem can often be solved multiple ways, so your job is to choose a reasonable path, explain why it fits the constraints, and handle edge cases without panic.',
  when:
    'Use this topic after learning the building blocks. For each problem, first identify the category: array scan, prefix sum, hashing, sorting, string window, matrix traversal, or bit manipulation. Then state a brute force solution, optimize it, code the improved version, dry run it, and give time and space complexity. If stuck, reduce the problem to a smaller example and name what information would make each step easier.',
  complexity: [
    { label: 'Clarify', value: '1-2 min', tone: 'good' },
    { label: 'Brute force', value: '2-4 min', tone: 'ok' },
    { label: 'Optimize', value: '5-10 min', tone: 'ok' },
    { label: 'Code', value: '10-20 min', tone: 'good' },
    { label: 'Test', value: '3-5 min', tone: 'good' },
    { label: 'Explain', value: 'Always', tone: 'good' },
  ],
  patterns: [
    {
      name: 'Pattern diagnosis',
      detail: 'Look for signals: contiguous means subarray/window, duplicates means hashing, sorted means binary search or two pointers.',
    },
    {
      name: 'Tradeoff language',
      detail: 'Say what you are trading: extra memory for speed, sorting cost for simpler logic, or preprocessing for faster queries.',
    },
    {
      name: 'Edge-case checklist',
      detail: 'Test empty input, one item, duplicates, negatives, sorted/reversed order, and the smallest valid answer.',
    },
    {
      name: 'Recovery plan',
      detail: 'When stuck, return to brute force and ask which repeated work can be stored, skipped, or ordered.',
    },
  ],
  code: `def interview_template(input_data):
    # Clarify:
    # - What are the constraints?
    # - Can input be empty?
    # - Are duplicates or negatives allowed?

    # Brute force:
    # Explain the simplest correct idea first.

    # Optimize:
    # Pick the pattern that removes repeated work.

    # Implement:
    answer = None

    # Test:
    # Walk through normal and edge cases.
    return answer`,
  practice: [
    { title: 'Top Interview 150', difficulty: 'Mixed', source: 'LeetCode Study Plan' },
    { title: 'Blind 75 Array Problems', difficulty: 'Mixed', source: 'NeetCode / Blind 75' },
    { title: 'Grind 75', difficulty: 'Mixed', source: 'Tech Interview Handbook' },
    { title: 'Mock Interview Set', difficulty: 'Mixed', source: '45 minute sessions' },
  ],
});
