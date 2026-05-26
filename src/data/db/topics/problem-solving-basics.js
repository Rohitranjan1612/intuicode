import { createTopic, defaultComplexity, starterPractice } from './shared.js';

export const problemSolvingBasics = createTopic({
  slug: 'problem-solving-basics',
  name: 'Problem Solving Basics',
  subtitle: 'Foundations - Thinking framework',
  difficulty: 'Easy',
  type: 'Foundation',
  color: 'teal',
  summary:
    'A practical framework for turning an unfamiliar coding question into constraints, examples, patterns, and a clean solution.',
  what:
    'Problem solving basics are the habits you use before writing code: restating the problem, clarifying inputs and outputs, testing tiny examples, identifying constraints, and choosing a pattern deliberately. Strong candidates do not jump straight to syntax. They first build a mental model of the problem, then use code to express that model. This topic trains the repeatable loop: understand, brute force, improve, prove, implement, and test.',
  when:
    'Use this process on every interview problem, especially when the question feels vague or intimidating. Start by asking what the input size allows, what edge cases can break the obvious solution, and what operation is repeated. If the brute force solution is too slow, look for saved work, sorted order, hashing, prefix information, two pointers, or a different representation. The goal is not to memorize tricks; it is to create a calm path from confusion to a defendable solution.',
  complexity: defaultComplexity,
  patterns: [
    {
      name: 'Understand before coding',
      detail:
        'Rewrite the task in your own words, name the input and output, and confirm whether duplicates, negatives, empty values, or large values are possible.',
    },
    {
      name: 'Brute force first',
      detail:
        'A simple correct solution reveals the real work being repeated. Optimization becomes easier once you can point to the waste.',
    },
    {
      name: 'Use constraints',
      detail:
        'Input size hints at acceptable complexity. Around 10^5 usually needs O(n) or O(n log n), while tiny n may allow backtracking.',
    },
    {
      name: 'Dry run and test',
      detail:
        'Walk through normal, edge, and adversarial examples. Good dry runs catch off-by-one mistakes before the compiler does.',
    },
  ],
  code: `def solve_problem(input_data):
    # 1. Restate the goal in one sentence.
    # 2. Write a brute force idea.
    # 3. Identify repeated work or useful structure.
    # 4. Implement the improved approach.
    # 5. Test edge cases.
    return input_data

def interview_loop(problem):
    examples = build_examples(problem)
    brute_force = describe_simple_solution(problem)
    optimized = remove_repeated_work(brute_force)
    return implement_and_test(optimized, examples)`,
  practice: [
    { title: 'Contains Duplicate', difficulty: 'Easy', source: 'LeetCode #217' },
    { title: 'Two Sum', difficulty: 'Easy', source: 'LeetCode #1' },
    { title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', source: 'LeetCode #121' },
    ...starterPractice.slice(2),
  ],
});
