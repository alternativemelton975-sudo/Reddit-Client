import React from 'react';

const SortControl = ({ value, onChange }) => (
  <div className="sort-panel">
    <label htmlFor="sort-select" className="filter-label">
      Sort by
    </label>
    <select id="sort-select" value={value} onChange={(event) => onChange(event.target.value)} className="sort-select">
      <option value="newest">Newest</option>
      <option value="score">Score</option>
      <option value="comments">Comments</option>
    </select>
  </div>
);

export default SortControl;
