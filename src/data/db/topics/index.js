import { problemSolvingBasics } from './problem-solving-basics.js';
import { timeComplexity } from './time-complexity.js';
import { arrays } from './arrays.js';

export const topicList = [problemSolvingBasics, timeComplexity, arrays];

export const topics = Object.fromEntries(topicList.map((topic) => [topic.slug, topic]));
