import { topics } from './topics.js';

export function getTopicBySlug(slug) {
  return topics[slug] ?? topics.arrays;
}

export function getAllTopics() {
  return Object.values(topics);
}
