import filtersReducer, {
  setSearchTerm,
  setSelectedCategory,
  setSortBy,
  resetFilters,
} from '../store/filtersSlice';

describe('filtersSlice', () => {
  const initialState = {
    searchTerm: '',
    selectedCategory: 'all',
    sortBy: 'newest',
    categories: expect.any(Array),
  };

  it('should return the initial state', () => {
    expect(filtersReducer(undefined, { type: 'unknown' })).toEqual(
      initialState
    );
  });

  it('should handle setSearchTerm', () => {
    const searchTerm = 'react';
    const state = filtersReducer(initialState, setSearchTerm(searchTerm));
    expect(state.searchTerm).toBe(searchTerm);
  });

  it('should handle setSelectedCategory', () => {
    const category = 'technology';
    const state = filtersReducer(initialState, setSelectedCategory(category));
    expect(state.selectedCategory).toBe(category);
  });

  it('should handle setSortBy', () => {
    const sortBy = 'score';
    const state = filtersReducer(initialState, setSortBy(sortBy));
    expect(state.sortBy).toBe(sortBy);
  });

  it('should handle resetFilters', () => {
    const stateWithFilters = {
      searchTerm: 'test',
      selectedCategory: 'photography',
      sortBy: 'comments',
      categories: initialState.categories,
    };
    const state = filtersReducer(stateWithFilters, resetFilters());
    expect(state.searchTerm).toBe('');
    expect(state.selectedCategory).toBe('all');
    expect(state.sortBy).toBe('newest');
  });

  it('should have predefined categories', () => {
    const state = filtersReducer(undefined, { type: 'unknown' });
    expect(state.categories).toContain('all');
    expect(state.categories).toContain('photography');
    expect(state.categories).toContain('technology');
    expect(state.categories).toContain('pets');
  });
});
