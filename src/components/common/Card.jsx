export function Card({ title, children, as: Element = 'article', className = '' }) {
  return (
    <Element className={`card ${className}`.trim()}>
      {title && <h3>{title}</h3>}
      {children}
    </Element>
  );
}
