import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredAndSortedPosts } from './utils/helpers';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import PostGrid from './components/PostGrid';
import DetailModal from './components/DetailModal';
import EmptyState from './components/EmptyState';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const {
    posts,
    searchTerm,
    selectedCategory,
    sortBy,
    selectedPost,
    isDetailModalOpen,
  } = useSelector((state) => ({
    posts: state.posts.items,
    searchTerm: state.filters.searchTerm,
    selectedCategory: state.filters.selectedCategory,
    sortBy: state.filters.sortBy,
    selectedPost: state.posts.selectedPost,
    isDetailModalOpen: state.ui.isDetailModalOpen,
  }));

  // Memoize filtered and sorted posts to avoid unnecessary recalculations
  const filteredPosts = useMemo(
    () => getFilteredAndSortedPosts(posts, searchTerm, selectedCategory, sortBy),
    [posts, searchTerm, selectedCategory, sortBy]
  );

  const hasResults = filteredPosts.length > 0;

  return (
    <ErrorBoundary>
      <div className="app">
        <Header />
        <main className="app-main">
          <SearchBar />
          <FilterBar />
          {hasResults ? (
            <PostGrid posts={filteredPosts} />
          ) : (
            <EmptyState
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
            />
          )}
        </main>
        {selectedPost && <DetailModal post={selectedPost} />}
      </div>
    </ErrorBoundary>
  );
}

export default App;
