import { useEffect, useMemo, useState } from 'react';
import { Card } from '../common/Card.jsx';
import { visualsByTopic } from '../../data/db/visuals.js';

const visualRenderers = {
  pipeline: Pipeline,
  growth: Growth,
  array: ArrayViz,
  twoRows: TwoRows,
  matrix: MatrixViz,
  intervals: IntervalsViz,
  hash: HashViz,
  string: StringViz,
  bits: BitsViz,
  formula: Formula,
};

export function VisualizePanel({ topic }) {
  const visual = useMemo(() => visualsByTopic[topic.slug] ?? visualsByTopic.arrays, [topic.slug]);
  const [stepIndex, setStepIndex] = useState(0);
  const step = visual.steps[stepIndex];

  useEffect(() => {
    setStepIndex(0);
  }, [topic.slug]);

  function next() {
    setStepIndex((current) => Math.min(current + 1, visual.steps.length - 1));
  }

  function previous() {
    setStepIndex((current) => Math.max(current - 1, 0));
  }

  return (
    <div className="panel-stack">
      <div className="visualizer-header">
        <p className="viz-label">{visual.label}</p>
        <div className="viz-step-count">
          {stepIndex + 1} / {visual.steps.length}
        </div>
      </div>

      <section className="visualizer-stage" aria-label={`${topic.name} visualization`}>
        <div>
          <h3>{step.title}</h3>
          <p>{step.note}</p>
        </div>
        <VisualFrame step={step} />
      </section>

      <div className="viz-actions">
        <button disabled={stepIndex === 0} onClick={previous} type="button">Previous</button>
        <button onClick={() => setStepIndex(0)} type="button">Reset</button>
        <button disabled={stepIndex === visual.steps.length - 1} onClick={next} type="button">
          Next
        </button>
      </div>

      <Card title="How to read it">
        <p>
          Green marks the active idea for this step. Muted cells are context. Move through the
          steps to see how the pattern changes the state you need to track.
        </p>
      </Card>
    </div>
  );
}

function VisualFrame({ step }) {
  const Renderer = visualRenderers[step.kind] ?? Formula;
  return <Renderer step={step} />;
}

function Pipeline({ step }) {
  return (
    <div className="viz-pipeline">
      {step.items.map((item, index) => (
        <div className={`viz-pill ${index === step.active ? 'is-active' : ''}`} key={item}>
          <span>{index + 1}</span>
          {item}
        </div>
      ))}
    </div>
  );
}

function Growth({ step }) {
  const values = [
    ['O(1)', 1],
    ['O(log n)', Math.log2(step.n)],
    ['O(n)', step.n],
    ['O(n log n)', step.n * Math.log2(step.n)],
    ['O(n^2)', step.n * step.n],
  ];
  const max = values.at(-1)[1];

  return (
    <div className="viz-growth">
      {values.map(([label, value]) => (
        <div className="growth-row" key={label}>
          <span>{label}</span>
          <div>
            <i style={{ width: `${Math.max(4, (value / max) * 100)}%` }} />
          </div>
          <strong>{Math.round(value)}</strong>
        </div>
      ))}
    </div>
  );
}

function ArrayViz({ step }) {
  return (
    <div>
      <div className="viz-array">
        {step.values.map((value, index) => (
          <div className={`viz-cell ${step.active?.includes(index) ? 'is-active' : ''}`} key={index}>
            <span>{index}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      {step.pointerLabel && <div className="viz-caption">{step.pointerLabel}</div>}
    </div>
  );
}

function TwoRows({ step }) {
  return (
    <div className="viz-two-rows">
      <LabeledRow label={step.topLabel} values={step.top} active={step.activeTop} />
      <LabeledRow label={step.bottomLabel} values={step.bottom} active={step.activeBottom} />
    </div>
  );
}

function LabeledRow({ label, values, active }) {
  return (
    <div className="viz-labeled-row">
      <span>{label}</span>
      <div className="viz-array">
        {values.map((value, index) => (
          <div className={`viz-cell ${active?.includes(index) ? 'is-active' : ''}`} key={index}>
            <small>{index}</small>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function MatrixViz({ step }) {
  return (
    <div className="viz-matrix">
      {step.grid.map((row, rowIndex) =>
        row.map((value, colIndex) => {
          const key = `${rowIndex}-${colIndex}`;
          return (
            <div
              className={`matrix-cell ${value === '1' ? 'is-land' : ''} ${
                step.active?.includes(key) ? 'is-active' : ''
              }`}
              key={key}
            >
              {value}
            </div>
          );
        }),
      )}
    </div>
  );
}

function IntervalsViz({ step }) {
  return (
    <div className="viz-intervals">
      {step.intervals.map(([start, end], index) => (
        <div className="interval-row" key={`${start}-${end}-${index}`}>
          <span>[{start}, {end}]</span>
          <div>
            <i
              className={step.active?.includes(index) ? 'is-active' : ''}
              style={{ left: `${start * 5}%`, width: `${Math.max(10, (end - start) * 5)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function HashViz({ step }) {
  return (
    <div className="viz-hash-wrap">
      <div className="viz-hash">
        {step.rows.map((row, index) => (
          <div className={`hash-row ${index === 0 ? 'is-head' : ''}`} key={index}>
            <span>{row[0]}</span>
            <strong>{row[1]}</strong>
          </div>
        ))}
      </div>
      <div className="viz-lookup">{step.lookup}</div>
    </div>
  );
}

function StringViz({ step }) {
  return (
    <div className="viz-string">
      {step.chars.map((char, index) => (
        <div className={`viz-cell ${step.active?.includes(index) ? 'is-active' : ''}`} key={index}>
          <span>{index}</span>
          <strong>{char}</strong>
        </div>
      ))}
    </div>
  );
}

function BitsViz({ step }) {
  return (
    <div className="viz-bits">
      {step.bits.map((bit, index) => (
        <div className={`viz-cell ${step.active?.includes(index) ? 'is-active' : ''}`} key={index}>
          <span>bit {step.labels[index]}</span>
          <strong>{bit}</strong>
        </div>
      ))}
    </div>
  );
}

function Formula({ step }) {
  return (
    <div className="viz-formula">
      <code>{step.expression}</code>
    </div>
  );
}
