import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSelectedCategory,
  setSortBy,
  resetFilters,
} from '../store/filtersSlice';
import './FilterBar.css';

function FilterBar() {
  const dispatch = useDispatch();
  const { categories, selectedCategory, sortBy, searchTerm } = useSelector(
    (state) => ({
      categories: state.filters.categories,
      selectedCategory: state.filters.selectedCategory,
      sortBy: state.filters.sortBy,
      searchTerm: state.filters.searchTerm,
    })
  );

  const handleCategoryChange = useCallback(
    (category) => {
      dispatch(setSelectedCategory(category));
    },
    [dispatch]
  );

  const handleSortChange = useCallback(
    (e) => {
      dispatch(setSortBy(e.target.value));
    },
    [dispatch]
  );

  const handleReset = useCallback(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  const hasActiveFilters =
    selectedCategory !== 'all' || sortBy !== 'newest' || searchTerm;

  return (
    <div className="filter-bar">
      <div className="filter-section">
        <h3 className="filter-label">Categories</h3>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? 'active' : ''
              }`}
              onClick={() => handleCategoryChange(category)}
              aria-pressed={selectedCategory === category}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <div className="sort-reset-container">
          <div className="sort-control">
            <label htmlFor="sort-select" className="filter-label">
              Sort By
            </label>
            <select
              id="sort-select"
              className="sort-select"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="newest">Newest First</option>
              <option value="score">Most Upvoted</option>
              <option value="comments">Most Comments</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              className="reset-btn"
              onClick={handleReset}
              title="Reset all filters"
              aria-label="Reset all filters"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
