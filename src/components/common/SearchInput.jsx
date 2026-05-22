export function SearchInput({ value, onChange }) {
  return (
    <label className="search">
      <span className="sr-only">Search topics</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search topics..."
        type="search"
      />
    </label>
  );
}
