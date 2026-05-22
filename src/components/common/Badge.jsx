const toneClass = {
  Easy: 'badge badge-easy',
  Medium: 'badge badge-medium',
  Hard: 'badge badge-hard',
  neutral: 'badge badge-neutral',
};

export function Badge({ children, tone = 'neutral' }) {
  return <span className={toneClass[tone] ?? toneClass.neutral}>{children}</span>;
}
