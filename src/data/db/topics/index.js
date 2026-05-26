import { problemSolvingBasics } from './problem-solving-basics.js';
import { timeComplexity } from './time-complexity.js';

export const topicList = [problemSolvingBasics, timeComplexity];

export const topics = Object.fromEntries(topicList.map((topic) => [topic.slug, topic]));
