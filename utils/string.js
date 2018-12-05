export function matchesSearch(full, search) {
  if (typeof full !== "string" || typeof search !== "string") {
    return false;
  }

  return full.toLowerCase().indexOf(search.toLowerCase()) !== -1;
}

export function highlightText(text, search) {
  const lowerSearch = search.toLowerCase();
  const lowerText = text.toLowerCase();

  const startIndex = lowerText.indexOf(lowerSearch);

  if (startIndex === -1) {
    return text;
  }

  const first = text.slice(0, startIndex);
  const highlight = text.slice(startIndex, startIndex + search.length);
  const last = text.slice(startIndex + search.length);

  return (
    <span>
      {first}
      <span className="highlight">{highlight}</span>
      {last}
    </span>
  );
}
