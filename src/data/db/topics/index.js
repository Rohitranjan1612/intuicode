import { problemSolvingBasics } from './problem-solving-basics.js';
import { timeComplexity } from './time-complexity.js';
import { arrays } from './arrays.js';
import { prefixSum } from './prefix-sum.js';

export const topicList = [problemSolvingBasics, timeComplexity, arrays, prefixSum];

export const topics = Object.fromEntries(topicList.map((topic) => [topic.slug, topic]));
