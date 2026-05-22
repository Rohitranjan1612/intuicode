export function TabNav({ tabs, activeTab, onChange }) {
  return (
    <div className="tabs" role="tablist" aria-label="Topic views">
      {tabs.map((tab) => (
        <button
          aria-selected={activeTab === tab.id}
          className={`tab ${activeTab === tab.id ? 'is-active' : ''}`}
          key={tab.id}
          onClick={() => onChange(tab.id)}
          role="tab"
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
