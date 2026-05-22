import { Badge } from '../common/Badge.jsx';

export function PracticePanel({ topic }) {
  return (
    <div className="panel-stack">
      <p className="muted-copy">
        Practice items live inside the topic data for now, so the first version can ship without
        a backend.
      </p>
      <div className="practice-list">
        {topic.practice.map((item) => (
          <button className="practice-card" key={item.title} type="button">
            <span>
              <strong>{item.title}</strong>
              <small>
                <Badge tone={item.difficulty}>{item.difficulty}</Badge>
                {item.source}
              </small>
            </span>
            <em>Hint</em>
          </button>
        ))}
      </div>
    </div>
  );
}
