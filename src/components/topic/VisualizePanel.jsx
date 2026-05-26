import { useEffect, useMemo, useState } from 'react';
import { Card } from '../common/Card.jsx';

const VISUALS = {
  'problem-solving-basics': {
    label: 'Turn a vague prompt into a solved problem.',
    steps: [
      {
        title: 'Clarify',
        note: 'Name the input, output, constraints, and edge cases before coding.',
        kind: 'pipeline',
        active: 0,
        items: ['Clarify', 'Brute force', 'Optimize', 'Code', 'Test'],
      },
      {
        title: 'Find repeated work',
        note: 'The brute force idea shows what is being recomputed.',
        kind: 'pipeline',
        active: 1,
        items: ['Clarify', 'Brute force', 'Optimize', 'Code', 'Test'],
      },
      {
        title: 'Ship a defendable answer',
        note: 'A strong answer includes implementation, dry run, and complexity.',
        kind: 'pipeline',
        active: 4,
        items: ['Clarify', 'Brute force', 'Optimize', 'Code', 'Test'],
      },
    ],
  },
  'time-complexity': {
    label: 'Compare how fast common growth rates expand.',
    steps: [
      {
        title: 'For small n, many ideas look fine',
        note: 'At n = 4, even O(n^2) is still small enough to reason about.',
        kind: 'growth',
        n: 4,
      },
      {
        title: 'As n grows, curves separate',
        note: 'O(n log n) remains usable much longer than O(n^2).',
        kind: 'growth',
        n: 16,
      },
      {
        title: 'Constraints choose the approach',
        note: 'If n is large, prefer O(n), O(log n), or O(n log n).',
        kind: 'growth',
        n: 64,
      },
    ],
  },
  arrays: {
    label: 'See indices, reads, writes, and in-place movement.',
    steps: [
      {
        title: 'Index access',
        note: 'Reading index 2 is direct: no scan is needed.',
        kind: 'array',
        values: [1, 1, 2, 2, 3],
        active: [2],
        pointerLabel: 'read',
      },
      {
        title: 'Write pointer',
        note: 'When removing duplicates, write only unique values forward.',
        kind: 'array',
        values: [1, 2, 2, 2, 3],
        active: [1, 4],
        pointerLabel: 'write / read',
      },
      {
        title: 'Compacted prefix',
        note: 'The first k cells hold the answer; leftover cells do not matter.',
        kind: 'array',
        values: [1, 2, 3, 2, 3],
        active: [0, 1, 2],
        pointerLabel: 'answer length = 3',
      },
    ],
  },
  'prefix-sum': {
    label: 'Build cumulative sums, then answer ranges by subtraction.',
    steps: [
      {
        title: 'Original array',
        note: 'Start with the values we want to query repeatedly.',
        kind: 'twoRows',
        topLabel: 'nums',
        bottomLabel: 'prefix',
        top: [2, 4, 1, 5],
        bottom: [0, 2, 6, 7, 12],
        activeTop: [0],
        activeBottom: [0, 1],
      },
      {
        title: 'Range sum from 1 to 3',
        note: 'Use prefix[4] - prefix[1] = 12 - 2 = 10.',
        kind: 'twoRows',
        topLabel: 'nums',
        bottomLabel: 'prefix',
        top: [2, 4, 1, 5],
        bottom: [0, 2, 6, 7, 12],
        activeTop: [1, 2, 3],
        activeBottom: [1, 4],
      },
      {
        title: 'One formula, no special case',
        note: 'The leading zero makes ranges starting at index 0 work too.',
        kind: 'formula',
        expression: 'sum(left..right) = prefix[right + 1] - prefix[left]',
      },
    ],
  },
  'carry-forward': {
    label: 'Carry the useful past so the current step is cheap.',
    steps: [
      {
        title: 'Track the cheapest buy',
        note: 'At price 1, minPrice becomes 1.',
        kind: 'array',
        values: [7, 1, 5, 3, 6, 4],
        active: [1],
        pointerLabel: 'minPrice = 1',
      },
      {
        title: 'Compare with current price',
        note: 'At price 6, profit is 6 - 1 = 5.',
        kind: 'array',
        values: [7, 1, 5, 3, 6, 4],
        active: [1, 4],
        pointerLabel: 'best = 5',
      },
      {
        title: 'Never scan backward again',
        note: 'The carried minimum replaces a nested loop over all earlier prices.',
        kind: 'formula',
        expression: 'best = max(best, price - minPrice)',
      },
    ],
  },
  subarrays: {
    label: 'Contiguous ranges can be grown, counted, or restarted.',
    steps: [
      {
        title: 'Choose a contiguous range',
        note: 'A subarray keeps neighboring elements together.',
        kind: 'array',
        values: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
        active: [3, 4, 5, 6],
        pointerLabel: 'sum = 6',
      },
      {
        title: "Kadane's choice",
        note: 'At every index, either extend the old range or start fresh.',
        kind: 'formula',
        expression: 'current = max(nums[i], current + nums[i])',
      },
      {
        title: 'Best range wins',
        note: 'The highlighted range [4, -1, 2, 1] gives the maximum sum.',
        kind: 'array',
        values: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
        active: [3, 4, 5, 6],
        pointerLabel: 'best = 6',
      },
    ],
  },
  '2d-matrices': {
    label: 'Think in rows, columns, directions, and visited cells.',
    steps: [
      {
        title: 'Start on a land cell',
        note: 'A grid cell is addressed as row, column.',
        kind: 'matrix',
        grid: [
          ['1', '1', '0', '0'],
          ['1', '0', '0', '1'],
          ['0', '0', '1', '1'],
        ],
        active: ['0-0'],
      },
      {
        title: 'DFS marks the connected island',
        note: 'Move up, down, left, and right while staying in bounds.',
        kind: 'matrix',
        grid: [
          ['1', '1', '0', '0'],
          ['1', '0', '0', '1'],
          ['0', '0', '1', '1'],
        ],
        active: ['0-0', '0-1', '1-0'],
      },
      {
        title: 'Count each new component',
        note: 'Each unvisited land component adds one island.',
        kind: 'matrix',
        grid: [
          ['1', '1', '0', '0'],
          ['1', '0', '0', '1'],
          ['0', '0', '1', '1'],
        ],
        active: ['1-3', '2-2', '2-3'],
      },
    ],
  },
  sorting: {
    label: 'Sorting creates order so local comparisons become enough.',
    steps: [
      {
        title: 'Unsorted intervals',
        note: 'Overlaps are hard to see when starts are unordered.',
        kind: 'intervals',
        intervals: [[8, 10], [1, 3], [2, 6], [15, 18]],
        active: [1, 2],
      },
      {
        title: 'Sort by start',
        note: 'Now overlapping intervals sit next to each other.',
        kind: 'intervals',
        intervals: [[1, 3], [2, 6], [8, 10], [15, 18]],
        active: [0, 1],
      },
      {
        title: 'Merge neighbors',
        note: '[1,3] and [2,6] become [1,6].',
        kind: 'intervals',
        intervals: [[1, 6], [8, 10], [15, 18]],
        active: [0],
      },
    ],
  },
  hashing: {
    label: 'Store what you have seen so future lookup is constant-time.',
    steps: [
      {
        title: 'Current value is 2',
        note: 'Need target - current = 7. It is not in the map yet.',
        kind: 'hash',
        rows: [['value', 'index'], ['2', '0']],
        lookup: 'need 7',
      },
      {
        title: 'Current value is 7',
        note: 'Need 2, and the map already stores 2 -> 0.',
        kind: 'hash',
        rows: [['value', 'index'], ['2', '0'], ['7', '1']],
        lookup: 'found 2',
      },
      {
        title: 'Return the pair',
        note: 'The answer is [0, 1] without a nested loop.',
        kind: 'formula',
        expression: 'seen[target - nums[i]] + i -> [0, 1]',
      },
    ],
  },
  strings: {
    label: 'Characters are ordered, so pointers and counts matter.',
    steps: [
      {
        title: 'Palindrome pointers',
        note: 'Compare left and right, then move inward.',
        kind: 'string',
        chars: ['r', 'a', 'c', 'e', 'c', 'a', 'r'],
        active: [0, 6],
      },
      {
        title: 'Middle is reached',
        note: 'All mirrored pairs matched, so the string is a palindrome.',
        kind: 'string',
        chars: ['r', 'a', 'c', 'e', 'c', 'a', 'r'],
        active: [3],
      },
      {
        title: 'Anagram counts',
        note: 'For anagrams, matching character counts replace pairwise comparison.',
        kind: 'hash',
        rows: [['char', 'count'], ['a', '1'], ['c', '1'], ['e', '1'], ['r', '2']],
        lookup: 'racecar',
      },
    ],
  },
  'bit-manipulation': {
    label: 'Bits make set membership and toggles compact.',
    steps: [
      {
        title: 'Number 5 in binary',
        note: '5 is 0101, so bits 0 and 2 are set.',
        kind: 'bits',
        bits: ['0', '1', '0', '1'],
        labels: ['3', '2', '1', '0'],
        active: [1, 3],
      },
      {
        title: 'Check bit 2',
        note: '5 & (1 << 2) is non-zero, so bit 2 is set.',
        kind: 'formula',
        expression: '0101 & 0100 = 0100',
      },
      {
        title: 'XOR cancels pairs',
        note: 'x ^ x = 0, so duplicate values disappear.',
        kind: 'array',
        values: [4, 1, 2, 1, 2],
        active: [0],
        pointerLabel: 'single = 4',
      },
    ],
  },
  'interview-problems': {
    label: 'Use a repeatable interview rhythm.',
    steps: [
      {
        title: 'Diagnose the pattern',
        note: 'Contiguous -> subarray/window. Duplicates -> hashing. Ordered -> sorting/two pointers.',
        kind: 'pipeline',
        active: 0,
        items: ['Diagnose', 'Brute force', 'Optimize', 'Code', 'Explain'],
      },
      {
        title: 'Choose the tradeoff',
        note: 'Say what you are spending: memory, sorting time, or preprocessing.',
        kind: 'pipeline',
        active: 2,
        items: ['Diagnose', 'Brute force', 'Optimize', 'Code', 'Explain'],
      },
      {
        title: 'Close with confidence',
        note: 'Dry run edge cases and state time/space clearly.',
        kind: 'pipeline',
        active: 4,
        items: ['Diagnose', 'Brute force', 'Optimize', 'Code', 'Explain'],
      },
    ],
  },
};

export function VisualizePanel({ topic }) {
  const visual = useMemo(() => VISUALS[topic.slug] ?? VISUALS.arrays, [topic.slug]);
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
  if (step.kind === 'pipeline') return <Pipeline step={step} />;
  if (step.kind === 'growth') return <Growth step={step} />;
  if (step.kind === 'array') return <ArrayViz step={step} />;
  if (step.kind === 'twoRows') return <TwoRows step={step} />;
  if (step.kind === 'matrix') return <MatrixViz step={step} />;
  if (step.kind === 'intervals') return <IntervalsViz step={step} />;
  if (step.kind === 'hash') return <HashViz step={step} />;
  if (step.kind === 'string') return <StringViz step={step} />;
  if (step.kind === 'bits') return <BitsViz step={step} />;
  return <Formula step={step} />;
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
