import { useMemo, useState } from 'react';
import { AppShell } from './components/layout/AppShell.jsx';
import { TopicHeader } from './components/topic/TopicHeader.jsx';
import { TabNav } from './components/topic/TabNav.jsx';
import { OverviewPanel } from './components/topic/OverviewPanel.jsx';
import { CodePanel } from './components/topic/CodePanel.jsx';
import { VisualizePanel } from './components/topic/VisualizePanel.jsx';
import { PracticePanel } from './components/topic/PracticePanel.jsx';
import { AskBar } from './components/topic/AskBar.jsx';
import { getTopicBySlug } from './data/db/selectors.js';
import { tabs } from './data/ui.js';

const defaultTopicSlug = 'arrays';

export default function App() {
  const [topicSlug, setTopicSlug] = useState(defaultTopicSlug);
  const [activeTab, setActiveTab] = useState('overview');
  const topic = useMemo(() => getTopicBySlug(topicSlug), [topicSlug]);

  function handleTopicChange(nextSlug) {
    setTopicSlug(nextSlug);
    setActiveTab('overview');
  }

  return (
    <AppShell activeTopicSlug={topicSlug} onTopicChange={handleTopicChange}>
      <TopicHeader topic={topic} />
      <TabNav tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <section className="topic-scroll" aria-live="polite">
        {activeTab === 'overview' && <OverviewPanel topic={topic} />}
        {activeTab === 'code' && <CodePanel topic={topic} />}
        {activeTab === 'visualize' && <VisualizePanel topic={topic} />}
        {activeTab === 'practice' && <PracticePanel topic={topic} />}
      </section>
      <AskBar topic={topic} />
    </AppShell>
  );
}
