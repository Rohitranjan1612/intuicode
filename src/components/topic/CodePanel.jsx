const languages = ['Python', 'Java', 'C++', 'JS'];

export function CodePanel({ topic }) {
  return (
    <div className="panel-stack">
      <div className="language-row" aria-label="Language options">
        {languages.map((language) => (
          <button
            className={`language-button ${language === 'Python' ? 'is-active' : ''}`}
            key={language}
            type="button"
          >
            {language}
          </button>
        ))}
      </div>
      <pre className="code-block">
        <code>{topic.code}</code>
      </pre>
      <p className="muted-copy">
        Code examples are stored with each topic record. Add more languages by extending the
        topic schema with a language keyed code map.
      </p>
    </div>
  );
}
