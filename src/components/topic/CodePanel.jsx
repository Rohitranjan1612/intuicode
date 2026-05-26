import { useEffect, useMemo, useState } from 'react';

const languages = ['Python', 'Java', 'C++', 'JS'];

export function CodePanel({ topic }) {
  const examples = useMemo(() => buildExamples(topic), [topic]);
  const [language, setLanguage] = useState('Python');
  const [code, setCode] = useState(examples.Python.code);
  const [output, setOutput] = useState('');

  useEffect(() => {
    setLanguage('Python');
    setCode(examples.Python.code);
    setOutput('');
  }, [examples]);

  function selectLanguage(nextLanguage) {
    setLanguage(nextLanguage);
    setCode(examples[nextLanguage].code);
    setOutput('');
  }

  function resetCode() {
    setCode(examples[language].code);
    setOutput('');
  }

  function runSample() {
    setOutput(examples[language].output);
  }

  return (
    <div className="code-panel">
      <div className="language-row" aria-label="Language options">
        {languages.map((option) => (
          <button
            className={`language-button ${option === language ? 'is-active' : ''}`}
            key={option}
            onClick={() => selectLanguage(option)}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>

      <div className="code-workspace">
        <section className="editor-card" aria-label={`${language} code editor`}>
          <div className="editor-toolbar">
            <span>{language} editor</span>
            <div>
              <button onClick={resetCode} type="button">Reset</button>
              <button className="run-button" onClick={runSample} type="button">Run sample</button>
            </div>
          </div>
          <textarea
            className="code-editor"
            onChange={(event) => setCode(event.target.value)}
            spellCheck="false"
            value={code}
          />
        </section>

        <section className="output-card" aria-label="Code output">
          <div className="output-title">Output</div>
          <pre>{output || examples[language].idle}</pre>
        </section>
      </div>

      <p className="muted-copy">
        This is a client-side code workspace for learning. The sample runner shows the expected
        result now; a real Python/Java/C++ execution backend can plug into this same panel next.
      </p>
    </div>
  );
}

function buildExamples(topic) {
  const sampleOutput = topic.sampleOutput ?? `Topic: ${topic.name}
Status: sample completed`;

  return {
    Python: {
      code: topic.code,
      output: sampleOutput,
      idle: 'Click "Run sample" to see the expected output for this example.',
    },
    Java: {
      code:
        topic.codeExamples?.Java ??
        `class Solution {
    public static void main(String[] args) {
        System.out.println("${escapeForDoubleQuote(topic.name)}");
        System.out.println("Use this tab to sketch the Java version of the pattern.");
    }
}`,
      output: sampleOutput,
      idle: 'Java execution needs a backend runner. For now this shows the sample output.',
    },
    'C++': {
      code:
        topic.codeExamples?.['C++'] ??
        `#include <bits/stdc++.h>
using namespace std;

int main() {
    cout << "${escapeForDoubleQuote(topic.name)}" << "\\n";
    cout << "Use this tab to sketch the C++ version of the pattern." << "\\n";
    return 0;
}`,
      output: sampleOutput,
      idle: 'C++ execution needs a backend runner. For now this shows the sample output.',
    },
    JS: {
      code:
        topic.codeExamples?.JS ??
        `function solve() {
  console.log("${escapeForDoubleQuote(topic.name)}");
  console.log("Use this tab to sketch the JavaScript version of the pattern.");
}

solve();`,
      output: sampleOutput,
      idle: 'Click "Run sample" to see the expected output for this example.',
    },
  };
}

function escapeForDoubleQuote(value) {
  return String(value).replaceAll('\\', '\\\\').replaceAll('"', '\\"');
}
