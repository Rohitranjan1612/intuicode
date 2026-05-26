import { problemSolvingBasics } from './problem-solving-basics.js';
import { timeComplexity } from './time-complexity.js';
import { arrays } from './arrays.js';
import { prefixSum } from './prefix-sum.js';
import { carryForward } from './carry-forward.js';

export const topicList = [problemSolvingBasics, timeComplexity, arrays, prefixSum, carryForward];

export const topics = Object.fromEntries(topicList.map((topic) => [topic.slug, topic]));
