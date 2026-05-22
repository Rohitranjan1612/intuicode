import { useMemo, useState } from 'react';
import { Card } from '../common/Card.jsx';

const initialBars = [5, 2, 8, 1, 9, 3, 7];

export function VisualizePanel({ topic }) {
  const [bars, setBars] = useState(initialBars);
  const [cursor, setCursor] = useState({ i: 0, j: 0, done: [] });
  const max = useMemo(() => Math.max(...bars), [bars]);

  function reset() {
    setBars(initialBars);
    setCursor({ i: 0, j: 0, done: [] });
  }

  function step() {
    setBars((currentBars) => {
      const nextBars = [...currentBars];
      setCursor((current) => {
        const n = nextBars.length;
        let { i, j } = current;
        const done = [...current.done];

        if (i >= n) return current;
        if (j >= n - i - 1) {
          done.push(n - i - 1);
          i += 1;
          j = 0;
        }
        if (i >= n) return { i, j, done };
        if (nextBars[j] > nextBars[j + 1]) {
          [nextBars[j], nextBars[j + 1]] = [nextBars[j + 1], nextBars[j]];
        }
        return { i, j: j + 1, done };
      });
      return nextBars;
    });
  }

  return (
    <div className="panel-stack">
      <div>
        <p className="viz-label">
          {topic.visualizer === 'search-bars'
            ? 'Use the same visual surface to reason about narrowing a search space.'
            : 'Step through the sort and watch values move into place.'}
        </p>
        <div className="bars" aria-label="Algorithm bars">
          {bars.map((value, index) => {
            const isCompared = index === cursor.j || index === cursor.j - 1;
            const isDone = cursor.done.includes(index);
            return (
              <div
                className={`bar ${isCompared ? 'is-compared' : ''} ${isDone ? 'is-done' : ''}`}
                key={`${value}-${index}`}
                style={{ height: `${Math.max(24, (value / max) * 96)}px` }}
              >
                <span>{value}</span>
              </div>
            );
          })}
        </div>
        <div className="viz-actions">
          <button onClick={step} type="button">Step</button>
          <button onClick={reset} type="button">Reset</button>
        </div>
      </div>
      <Card title="Reading the colors">
        <p>Green is waiting, amber is being compared, and blue is already placed.</p>
      </Card>
    </div>
  );
}
