export function createTopic({
  slug,
  name,
  subtitle,
  difficulty,
  type,
  color,
  summary,
  what,
  when,
  complexity,
  patterns,
  code,
  codeExamples,
  sampleOutput,
  practice,
  visualizer = 'sort-bars',
}) {
  return {
    slug,
    name,
    subtitle,
    difficulty,
    type,
    color,
    summary,
    what,
    when,
    complexity,
    patterns,
    code,
    codeExamples,
    sampleOutput,
    practice,
    visualizer,
  };
}

export const defaultComplexity = [
  { label: 'Learn', value: 'Core', tone: 'good' },
  { label: 'Practice', value: 'Daily', tone: 'ok' },
  { label: 'Recall', value: 'High', tone: 'good' },
  { label: 'Pitfalls', value: 'Many', tone: 'bad' },
  { label: 'Interview', value: 'Must', tone: 'good' },
  { label: 'Depth', value: 'Layered', tone: 'ok' },
];

export const starterPractice = [
  { title: 'Two Sum', difficulty: 'Easy', source: 'LeetCode #1' },
  { title: 'Valid Anagram', difficulty: 'Easy', source: 'LeetCode #242' },
  { title: 'Maximum Subarray', difficulty: 'Medium', source: 'LeetCode #53' },
];
