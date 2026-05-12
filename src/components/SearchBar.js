import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, resetFilters } from '../store/filtersSlice';
import './SearchBar.css';

function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.filters.searchTerm);

  const handleSearchChange = useCallback(
    (e) => {
      dispatch(setSearchTerm(e.target.value));
    },
    [dispatch]
  );

  const handleClear = useCallback(() => {
    dispatch(setSearchTerm(''));
  }, [dispatch]);

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search posts by title, author, or keywords..."
          value={searchTerm}
          onChange={handleSearchChange}
          aria-label="Search posts"
        />
        {searchTerm && (
          <button
            className="search-clear"
            onClick={handleClear}
            aria-label="Clear search"
            title="Clear search"
          >
            ✕
          </button>
        )}
        <span className="search-icon">🔍</span>
      </div>
    </div>
  );
}

export default SearchBar;
