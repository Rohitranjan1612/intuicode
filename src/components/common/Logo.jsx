export function Logo() {
  return (
    <div className="logo" aria-label="Intuicode">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 14 14" role="img">
          <polyline points="2,10 5,5 8,8 11,3" />
          <circle cx="11" cy="3" r="1.5" />
        </svg>
      </span>
      <span className="logo-text">
        intui<span>code</span>
      </span>
    </div>
  );
}
