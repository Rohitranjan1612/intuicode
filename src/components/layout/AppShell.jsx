import { Sidebar } from './Sidebar.jsx';

export function AppShell({ activeTopicSlug, onTopicChange, children }) {
  return (
    <main className="app-stage">
      <div className="app-shell">
        <Sidebar activeTopicSlug={activeTopicSlug} onTopicChange={onTopicChange} />
        <div className="app-main">{children}</div>
      </div>
    </main>
  );
}
