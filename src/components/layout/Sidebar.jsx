import { useMemo, useState } from 'react';
import { Logo } from '../common/Logo.jsx';
import { SearchInput } from '../common/SearchInput.jsx';
import { curriculum } from '../../data/db/curriculum.js';
import { topics } from '../../data/db/topics/index.js';

export function Sidebar({ activeTopicSlug, onTopicChange }) {
  const [query, setQuery] = useState('');
  const visibleCurriculum = useMemo(() => filterCurriculum(query), [query]);

  return (
    <aside className="sidebar" aria-label="DSA topic navigation">
      <div className="sidebar-logo">
        <Logo />
      </div>
      <div className="sidebar-search">
        <SearchInput value={query} onChange={setQuery} />
      </div>
      <nav className="topic-nav">
        {visibleCurriculum.map((section) => (
          <div className="nav-section" key={section.id}>
            <div className="nav-section-label">{section.title}</div>
            {section.topicSlugs.map((slug) => {
              const topic = topics[slug];
              return (
                <button
                  className={`nav-item ${activeTopicSlug === slug ? 'is-active' : ''}`}
                  key={slug}
                  onClick={() => onTopicChange(slug)}
                  type="button"
                >
                  <span className={`nav-dot dot-${topic.color}`} aria-hidden="true" />
                  <span>{topic.name}</span>
                </button>
              );
            })}
          </div>
        ))}
      </nav>
      <div className="progress">
        <div className="progress-copy">
          <span>Your progress</span>
          <span>3 / 13</span>
        </div>
        <div className="progress-track">
          <span style={{ width: '23%' }} />
        </div>
      </div>
    </aside>
  );
}

function filterCurriculum(query) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return curriculum;

  return curriculum
    .map((section) => ({
      ...section,
      topicSlugs: section.topicSlugs.filter((slug) => {
        const topic = topics[slug];
        return (
          topic.name.toLowerCase().includes(normalizedQuery) ||
          topic.summary.toLowerCase().includes(normalizedQuery)
        );
      }),
    }))
    .filter((section) => section.topicSlugs.length > 0);
}
