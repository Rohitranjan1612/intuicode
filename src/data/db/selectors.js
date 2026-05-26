import { topics, topicList } from './topics/index.js';

export function getTopicBySlug(slug) {
  return topics[slug] ?? topics['problem-solving-basics'];
}

export function getAllTopics() {
  return topicList;
}
