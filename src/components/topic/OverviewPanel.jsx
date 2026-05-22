import { Card } from '../common/Card.jsx';

export function OverviewPanel({ topic }) {
  return (
    <div className="panel-stack">
      <Card title="What is it?">
        <p>{topic.what}</p>
      </Card>
      <Card title="When to use?">
        <p>{topic.when}</p>
      </Card>

      <SectionTitle>Complexity</SectionTitle>
      <div className="complexity-grid">
        {topic.complexity.map((item) => (
          <div className="complexity-box" key={item.label}>
            <span>{item.label}</span>
            <strong className={`tone-${item.tone}`}>{item.value}</strong>
          </div>
        ))}
      </div>

      <SectionTitle>Key patterns</SectionTitle>
      <div className="pattern-grid">
        {topic.patterns.map((pattern) => (
          <Card className="pattern-card" key={pattern.name}>
            <h4>{pattern.name}</h4>
            <p>{pattern.detail}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}
