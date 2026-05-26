import { problemSolvingBasics } from './problem-solving-basics.js';
import { timeComplexity } from './time-complexity.js';
import { arrays } from './arrays.js';
import { prefixSum } from './prefix-sum.js';
import { carryForward } from './carry-forward.js';
import { subarrays } from './subarrays.js';
import { twoDMatrices } from './2d-matrices.js';
import { sorting } from './sorting.js';
import { hashing } from './hashing.js';
import { strings } from './strings.js';
import { bitManipulation } from './bit-manipulation.js';
import { interviewProblems } from './interview-problems.js';

export const topicList = [
  problemSolvingBasics,
  timeComplexity,
  arrays,
  prefixSum,
  carryForward,
  subarrays,
  twoDMatrices,
  sorting,
  hashing,
  strings,
  bitManipulation,
  interviewProblems,
];

export const topics = Object.fromEntries(topicList.map((topic) => [topic.slug, topic]));
