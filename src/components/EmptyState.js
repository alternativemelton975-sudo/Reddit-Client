import React from 'react';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../store/filtersSlice';
import './EmptyState.css';

function EmptyState({ searchTerm, selectedCategory }) {
  const dispatch = useDispatch();

  const hasFilters = searchTerm || selectedCategory !== 'all';

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="empty-state animate-fade-in">
      <div className="empty-state-icon">🔍</div>
      <h2 className="empty-state-title">
        {searchTerm
          ? 'No posts found'
          : selectedCategory !== 'all'
          ? 'No posts in this category'
          : 'No posts available'}
      </h2>
      <p className="empty-state-message">
        {searchTerm
          ? `Sorry, we couldn't find any posts matching "${searchTerm}". Try a different search term.`
          : selectedCategory !== 'all'
          ? `No posts found in the ${selectedCategory} category. Try selecting a different category.`
          : 'Check back later for new content!'}
      </p>
      {hasFilters && (
        <button className="empty-state-action" onClick={handleReset}>
          Clear Filters and Try Again
        </button>
      )}
    </div>
  );
}

export default EmptyState;
