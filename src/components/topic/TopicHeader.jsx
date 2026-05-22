import { Badge } from '../common/Badge.jsx';

export function TopicHeader({ topic }) {
  return (
    <header className="topic-header">
      <div>
        <h1>{topic.name}</h1>
        <p>{topic.subtitle}</p>
      </div>
      <div className="topic-badges">
        <Badge tone={topic.difficulty}>{topic.difficulty}</Badge>
        <Badge>{topic.type}</Badge>
      </div>
    </header>
  );
}
