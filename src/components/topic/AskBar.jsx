import { useState } from 'react';

export function AskBar({ topic }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  function ask() {
    const trimmed = question.trim();
    if (!trimmed) return;

    setAnswer(
      `For ${topic.name}, start with the intuition: ${topic.what} Then map your question back to the key operation or pattern before writing code.`,
    );
    setQuestion('');
  }

  return (
    <footer className="ask-wrap">
      {answer && <div className="ask-answer">{answer}</div>}
      <div className="ask-row">
        <textarea
          onChange={(event) => setQuestion(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              ask();
            }
          }}
          placeholder="Ask AI anything about this topic..."
          value={question}
        />
        <button onClick={ask} type="button">Ask AI</button>
      </div>
    </footer>
  );
}
