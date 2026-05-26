import { createTopic } from './shared.js';

export const carryForward = createTopic({
  slug: 'carry-forward',
  name: 'Carry Forward',
  subtitle: 'Arrays - Scan pattern',
  difficulty: 'Easy',
  type: 'Pattern',
  color: 'teal',
  summary:
    'Carry useful information from previous elements so each new element can be processed in constant time.',
  what:
    'Carry forward is the idea of scanning once while keeping the best information seen so far. Instead of looking backward for every index, you carry a running minimum, maximum, count, last position, prefix value, or best answer. It often converts O(n^2) brute force into O(n). The pattern is simple but powerful: decide what past information would make the current decision easy, then update that information after each step.',
  when:
    'Use carry forward when the current answer depends on something before or after the current index. Common examples include stock profit, leaders in an array, nearest important index, maximum subarray, count pairs with a condition, and contribution counting. If you catch yourself asking "for each i, scan all previous j", try carrying the relevant previous value instead.',
  complexity: [
    { label: 'Scan', value: 'O(n)', tone: 'good' },
    { label: 'Per step', value: 'O(1)', tone: 'good' },
    { label: 'Space', value: 'O(1)', tone: 'good' },
    { label: 'Two pass', value: 'O(n)', tone: 'ok' },
    { label: 'State', value: 'Small', tone: 'good' },
    { label: 'Risk', value: 'Order', tone: 'bad' },
  ],
  patterns: [
    {
      name: 'Running best',
      detail: 'Keep the minimum, maximum, or best answer seen so far and update it as the scan moves.',
    },
    {
      name: 'Right-to-left scan',
      detail: 'When the useful information is on the right, scan backward and carry future state.',
    },
    {
      name: 'Count contribution',
      detail: 'Track how many useful previous values exist, then add their contribution when the current value appears.',
    },
    {
      name: 'Update order',
      detail: 'Decide whether to use the carried state before or after updating it; this controls whether current index pairs with itself.',
    },
  ],
  code: `def max_profit(prices):
    min_price = float('inf')
    best = 0
    for price in prices:
        best = max(best, price - min_price)
        min_price = min(min_price, price)
    return best

def leaders(nums):
    answer = []
    max_right = float('-inf')
    for i in range(len(nums) - 1, -1, -1):
        if nums[i] > max_right:
            answer.append(nums[i])
        max_right = max(max_right, nums[i])
    return answer[::-1]`,
  practice: [
    { title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', source: 'LeetCode #121' },
    { title: 'Maximum Subarray', difficulty: 'Medium', source: 'LeetCode #53' },
    { title: 'Find All Leaders in an Array', difficulty: 'Easy', source: 'GFG' },
    { title: 'Trapping Rain Water', difficulty: 'Hard', source: 'LeetCode #42' },
  ],
});
