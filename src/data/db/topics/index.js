import { problemSolvingBasics } from './problem-solving-basics.js';

export const topicList = [problemSolvingBasics];

export const topics = Object.fromEntries(topicList.map((topic) => [topic.slug, topic]));
