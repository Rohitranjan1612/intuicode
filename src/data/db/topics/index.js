import { problemSolvingBasics } from './problem-solving-basics.js';
import { timeComplexity } from './time-complexity.js';
import { arrays } from './arrays.js';
import { prefixSum } from './prefix-sum.js';
import { carryForward } from './carry-forward.js';
import { subarrays } from './subarrays.js';
import { twoDMatrices } from './2d-matrices.js';
import { sorting } from './sorting.js';

export const topicList = [
  problemSolvingBasics,
  timeComplexity,
  arrays,
  prefixSum,
  carryForward,
  subarrays,
  twoDMatrices,
  sorting,
];

export const topics = Object.fromEntries(topicList.map((topic) => [topic.slug, topic]));
