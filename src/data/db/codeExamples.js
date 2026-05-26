export const codeExamplesBySlug = {
  'problem-solving-basics': {
    Java: `class Solution {
    Object solveProblem(Object inputData) {
        // 1. Restate the goal in one sentence.
        // 2. Write a brute force idea.
        // 3. Identify repeated work or useful structure.
        // 4. Implement the improved approach.
        // 5. Test edge cases.
        return inputData;
    }
}`,
    'C++': `#include <bits/stdc++.h>
using namespace std;

string solveProblem(string inputData) {
    // 1. Restate the goal in one sentence.
    // 2. Write a brute force idea.
    // 3. Identify repeated work or useful structure.
    // 4. Implement the improved approach.
    // 5. Test edge cases.
    return inputData;
}`,
    JS: `function solveProblem(inputData) {
  // 1. Restate the goal in one sentence.
  // 2. Write a brute force idea.
  // 3. Identify repeated work or useful structure.
  // 4. Implement the improved approach.
  // 5. Test edge cases.
  return inputData;
}`,
  },
  'time-complexity': {
    Java: `class Solution {
    int singlePass(int[] nums) {
        int total = 0;
        for (int x : nums) total += x;
        return total;
    }

    int nestedPairs(int[] nums) {
        int count = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) count++;
            }
        }
        return count;
    }

    int binarySteps(int n) {
        int steps = 0;
        while (n > 1) {
            n /= 2;
            steps++;
        }
        return steps;
    }
}`,
    'C++': `#include <bits/stdc++.h>
using namespace std;

int singlePass(vector<int>& nums) {
    int total = 0;
    for (int x : nums) total += x;
    return total;
}

int nestedPairs(vector<int>& nums) {
    int count = 0;
    for (int i = 0; i < nums.size(); i++) {
        for (int j = i + 1; j < nums.size(); j++) {
            if (nums[i] == nums[j]) count++;
        }
    }
    return count;
}

int binarySteps(int n) {
    int steps = 0;
    while (n > 1) {
        n /= 2;
        steps++;
    }
    return steps;
}`,
    JS: `function singlePass(nums) {
  let total = 0;
  for (const x of nums) total += x;
  return total;
}

function nestedPairs(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
  }
  return count;
}

function binarySteps(n) {
  let steps = 0;
  while (n > 1) {
    n = Math.floor(n / 2);
    steps++;
  }
  return steps;
}`,
  },
  arrays: {
    Java: `class Solution {
    int removeDuplicatesSorted(int[] nums) {
        if (nums.length == 0) return 0;
        int write = 1;
        for (int read = 1; read < nums.length; read++) {
            if (nums[read] != nums[read - 1]) {
                nums[write] = nums[read];
                write++;
            }
        }
        return write;
    }

    int maxProfit(int[] prices) {
        int best = 0;
        int minPrice = Integer.MAX_VALUE;
        for (int price : prices) {
            minPrice = Math.min(minPrice, price);
            best = Math.max(best, price - minPrice);
        }
        return best;
    }
}`,
    'C++': `#include <bits/stdc++.h>
using namespace std;

int removeDuplicatesSorted(vector<int>& nums) {
    if (nums.empty()) return 0;
    int write = 1;
    for (int read = 1; read < nums.size(); read++) {
        if (nums[read] != nums[read - 1]) {
            nums[write] = nums[read];
            write++;
        }
    }
    return write;
}

int maxProfit(vector<int>& prices) {
    int best = 0, minPrice = INT_MAX;
    for (int price : prices) {
        minPrice = min(minPrice, price);
        best = max(best, price - minPrice);
    }
    return best;
}`,
    JS: `function removeDuplicatesSorted(nums) {
  if (nums.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[read - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }
  return write;
}

function maxProfit(prices) {
  let best = 0;
  let minPrice = Infinity;
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    best = Math.max(best, price - minPrice);
  }
  return best;
}`,
  },
  'prefix-sum': {
    Java: `import java.util.*;

class Solution {
    int[] buildPrefix(int[] nums) {
        int[] prefix = new int[nums.length + 1];
        for (int i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        return prefix;
    }

    int rangeSum(int[] prefix, int left, int right) {
        return prefix[right + 1] - prefix[left];
    }

    int subarraySumEqualsK(int[] nums, int k) {
        Map<Integer, Integer> seen = new HashMap<>();
        seen.put(0, 1);
        int total = 0, answer = 0;
        for (int x : nums) {
            total += x;
            answer += seen.getOrDefault(total - k, 0);
            seen.put(total, seen.getOrDefault(total, 0) + 1);
        }
        return answer;
    }
}`,
    'C++': `#include <bits/stdc++.h>
using namespace std;

vector<int> buildPrefix(vector<int>& nums) {
    vector<int> prefix(nums.size() + 1, 0);
    for (int i = 0; i < nums.size(); i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    return prefix;
}

int rangeSum(vector<int>& prefix, int left, int right) {
    return prefix[right + 1] - prefix[left];
}

int subarraySumEqualsK(vector<int>& nums, int k) {
    unordered_map<int, int> seen;
    seen[0] = 1;
    int total = 0, answer = 0;
    for (int x : nums) {
        total += x;
        answer += seen[total - k];
        seen[total]++;
    }
    return answer;
}`,
    JS: `function buildPrefix(nums) {
  const prefix = [0];
  for (const x of nums) {
    prefix.push(prefix[prefix.length - 1] + x);
  }
  return prefix;
}

function rangeSum(prefix, left, right) {
  return prefix[right + 1] - prefix[left];
}

function subarraySumEqualsK(nums, k) {
  const seen = new Map([[0, 1]]);
  let total = 0;
  let answer = 0;
  for (const x of nums) {
    total += x;
    answer += seen.get(total - k) ?? 0;
    seen.set(total, (seen.get(total) ?? 0) + 1);
  }
  return answer;
}`,
  },
  'carry-forward': {
    Java: `import java.util.*;

class Solution {
    int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int best = 0;
        for (int price : prices) {
            best = Math.max(best, price - minPrice);
            minPrice = Math.min(minPrice, price);
        }
        return best;
    }

    List<Integer> leaders(int[] nums) {
        List<Integer> answer = new ArrayList<>();
        int maxRight = Integer.MIN_VALUE;
        for (int i = nums.length - 1; i >= 0; i--) {
            if (nums[i] > maxRight) answer.add(nums[i]);
            maxRight = Math.max(maxRight, nums[i]);
        }
        Collections.reverse(answer);
        return answer;
    }
}`,
    'C++': `#include <bits/stdc++.h>
using namespace std;

int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX, best = 0;
    for (int price : prices) {
        best = max(best, price - minPrice);
        minPrice = min(minPrice, price);
    }
    return best;
}

vector<int> leaders(vector<int>& nums) {
    vector<int> answer;
    int maxRight = INT_MIN;
    for (int i = nums.size() - 1; i >= 0; i--) {
        if (nums[i] > maxRight) answer.push_back(nums[i]);
        maxRight = max(maxRight, nums[i]);
    }
    reverse(answer.begin(), answer.end());
    return answer;
}`,
    JS: `function maxProfit(prices) {
  let minPrice = Infinity;
  let best = 0;
  for (const price of prices) {
    best = Math.max(best, price - minPrice);
    minPrice = Math.min(minPrice, price);
  }
  return best;
}

function leaders(nums) {
  const answer = [];
  let maxRight = -Infinity;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > maxRight) answer.push(nums[i]);
    maxRight = Math.max(maxRight, nums[i]);
  }
  return answer.reverse();
}`,
  },
  subarrays: {
    Java: `import java.util.*;

class Solution {
    int maxSubarray(int[] nums) {
        int best = nums[0], current = nums[0];
        for (int i = 1; i < nums.length; i++) {
            current = Math.max(nums[i], current + nums[i]);
            best = Math.max(best, current);
        }
        return best;
    }

    int countSubarraysSumK(int[] nums, int k) {
        Map<Integer, Integer> seen = new HashMap<>();
        seen.put(0, 1);
        int prefix = 0, count = 0;
        for (int x : nums) {
            prefix += x;
            count += seen.getOrDefault(prefix - k, 0);
            seen.put(prefix, seen.getOrDefault(prefix, 0) + 1);
        }
        return count;
    }
}`,
    'C++': `#include <bits/stdc++.h>
using namespace std;

int maxSubarray(vector<int>& nums) {
    int best = nums[0], current = nums[0];
    for (int i = 1; i < nums.size(); i++) {
        current = max(nums[i], current + nums[i]);
        best = max(best, current);
    }
    return best;
}

int countSubarraysSumK(vector<int>& nums, int k) {
    unordered_map<int, int> seen;
    seen[0] = 1;
    int prefix = 0, count = 0;
    for (int x : nums) {
        prefix += x;
        count += seen[prefix - k];
        seen[prefix]++;
    }
    return count;
}`,
    JS: `function maxSubarray(nums) {
  let best = nums[0];
  let current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    best = Math.max(best, current);
  }
  return best;
}

function countSubarraysSumK(nums, k) {
  const seen = new Map([[0, 1]]);
  let prefix = 0;
  let count = 0;
  for (const x of nums) {
    prefix += x;
    count += seen.get(prefix - k) ?? 0;
    seen.set(prefix, (seen.get(prefix) ?? 0) + 1);
  }
  return count;
}`,
  },
  sorting: {
    Java: `import java.util.*;

class Solution {
    int[][] mergeIntervals(int[][] intervals) {
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));
        List<int[]> merged = new ArrayList<>();
        for (int[] interval : intervals) {
            if (merged.isEmpty() || interval[0] > merged.get(merged.size() - 1)[1]) {
                merged.add(interval);
            } else {
                int[] last = merged.get(merged.size() - 1);
                last[1] = Math.max(last[1], interval[1]);
            }
        }
        return merged.toArray(new int[merged.size()][]);
    }
}`,
    'C++': `#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> mergeIntervals(vector<vector<int>>& intervals) {
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> merged;
    for (auto interval : intervals) {
        if (merged.empty() || interval[0] > merged.back()[1]) {
            merged.push_back(interval);
        } else {
            merged.back()[1] = max(merged.back()[1], interval[1]);
        }
    }
    return merged;
}`,
    JS: `function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (const [start, end] of intervals) {
    if (merged.length === 0 || start > merged[merged.length - 1][1]) {
      merged.push([start, end]);
    } else {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end);
    }
  }
  return merged;
}`,
  },
  hashing: {
    Java: `import java.util.*;

class Solution {
    int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int need = target - nums[i];
            if (seen.containsKey(need)) return new int[]{seen.get(need), i};
            seen.put(nums[i], i);
        }
        return new int[]{-1, -1};
    }
}`,
    'C++': `#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int need = target - nums[i];
        if (seen.count(need)) return {seen[need], i};
        seen[nums[i]] = i;
    }
    return {-1, -1};
}`,
    JS: `function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }
  return [-1, -1];
}`,
  },
  strings: {
    Java: `import java.util.*;

class Solution {
    boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) return false;
            left++;
            right--;
        }
        return true;
    }

    boolean isAnagram(String a, String b) {
        if (a.length() != b.length()) return false;
        Map<Character, Integer> count = new HashMap<>();
        for (char ch : a.toCharArray()) count.put(ch, count.getOrDefault(ch, 0) + 1);
        for (char ch : b.toCharArray()) count.put(ch, count.getOrDefault(ch, 0) - 1);
        for (int value : count.values()) if (value != 0) return false;
        return true;
    }
}`,
    'C++': `#include <bits/stdc++.h>
using namespace std;

bool isPalindrome(string s) {
    int left = 0, right = s.size() - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
}

bool isAnagram(string a, string b) {
    if (a.size() != b.size()) return false;
    unordered_map<char, int> count;
    for (char ch : a) count[ch]++;
    for (char ch : b) count[ch]--;
    for (auto [ch, value] : count) if (value != 0) return false;
    return true;
}`,
    JS: `function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  const count = new Map();
  for (const ch of a) count.set(ch, (count.get(ch) ?? 0) + 1);
  for (const ch of b) count.set(ch, (count.get(ch) ?? 0) - 1);
  return [...count.values()].every((value) => value === 0);
}`,
  },
  'bit-manipulation': {
    Java: `class Solution {
    int singleNumber(int[] nums) {
        int answer = 0;
        for (int x : nums) answer ^= x;
        return answer;
    }

    int countBits(int n) {
        int count = 0;
        while (n != 0) {
            n &= n - 1;
            count++;
        }
        return count;
    }

    boolean hasBit(int mask, int i) {
        return (mask & (1 << i)) != 0;
    }
}`,
    'C++': `#include <bits/stdc++.h>
using namespace std;

int singleNumber(vector<int>& nums) {
    int answer = 0;
    for (int x : nums) answer ^= x;
    return answer;
}

int countBits(int n) {
    int count = 0;
    while (n) {
        n &= n - 1;
        count++;
    }
    return count;
}

bool hasBit(int mask, int i) {
    return (mask & (1 << i)) != 0;
}`,
    JS: `function singleNumber(nums) {
  let answer = 0;
  for (const x of nums) answer ^= x;
  return answer;
}

function countBits(n) {
  let count = 0;
  while (n !== 0) {
    n &= n - 1;
    count++;
  }
  return count;
}

function hasBit(mask, i) {
  return (mask & (1 << i)) !== 0;
}`,
  },
  'interview-problems': {
    Java: `class Solution {
    Object interviewTemplate(Object inputData) {
        // Clarify constraints, empty input, duplicates, and negatives.
        // Explain brute force first.
        // Pick the pattern that removes repeated work.
        // Implement and test edge cases.
        Object answer = null;
        return answer;
    }
}`,
    'C++': `#include <bits/stdc++.h>
using namespace std;

string interviewTemplate(string inputData) {
    // Clarify constraints, empty input, duplicates, and negatives.
    // Explain brute force first.
    // Pick the pattern that removes repeated work.
    // Implement and test edge cases.
    string answer = "";
    return answer;
}`,
    JS: `function interviewTemplate(inputData) {
  // Clarify constraints, empty input, duplicates, and negatives.
  // Explain brute force first.
  // Pick the pattern that removes repeated work.
  // Implement and test edge cases.
  const answer = null;
  return answer;
}`,
  },
};

export const sampleOutputBySlug = {
  'problem-solving-basics': 'Input: [2, 7, 11, 15], target = 9\\nOutput: [0, 1]\\nWhy: clarify goal, find brute force, then store seen values.',
  'time-complexity': 'singlePass([1,2,3]) -> 6\\nnestedPairs([1,1,2]) -> 1\\nbinarySteps(16) -> 4',
  arrays: 'removeDuplicatesSorted([1,1,2,2,3]) -> 3\\nmaxProfit([7,1,5,3,6,4]) -> 5',
  'prefix-sum': 'prefix([2,4,1]) -> [0,2,6,7]\\nrangeSum(prefix, 0, 1) -> 6\\nsubarraySumEqualsK([1,1,1], 2) -> 2',
  'carry-forward': 'maxProfit([7,1,5,3,6,4]) -> 5\\nleaders([16,17,4,3,5,2]) -> [17,5,2]',
  subarrays: 'maxSubarray([-2,1,-3,4,-1,2,1,-5,4]) -> 6\\ncountSubarraysSumK([1,1,1], 2) -> 2',
  sorting: 'mergeIntervals([[1,3],[2,6],[8,10]]) -> [[1,6],[8,10]]',
  hashing: 'twoSum([2,7,11,15], 9) -> [0,1]',
  strings: 'isPalindrome("racecar") -> true\\nisAnagram("listen", "silent") -> true',
  'bit-manipulation': 'singleNumber([4,1,2,1,2]) -> 4\\ncountBits(13) -> 3\\nhasBit(5, 2) -> true',
  'interview-problems': 'Output: a clear solution plan, complexity, implementation, and edge-case tests.',
};
