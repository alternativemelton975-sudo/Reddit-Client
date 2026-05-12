import React from 'react';

const CategoryFilter = ({ categories, value, onSelect }) => (
  <div className="filter-panel">
    <span className="filter-label">Category</span>
    <div className="category-buttons">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`category-button ${value === category ? 'active' : ''}`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  </div>
);

export default CategoryFilter;
