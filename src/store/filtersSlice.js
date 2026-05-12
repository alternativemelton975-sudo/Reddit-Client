import { createSlice } from '@reduxjs/toolkit';

const CATEGORIES = [
  'all',
  'photography',
  'pets',
  'technology',
  'food',
  'writing',
  'wellness',
  'travel',
  'hobbies',
];

const initialState = {
  searchTerm: '',
  selectedCategory: 'all',
  sortBy: 'newest', // newest, score, comments
  categories: CATEGORIES,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    resetFilters: (state) => {
      state.searchTerm = '';
      state.selectedCategory = 'all';
      state.sortBy = 'newest';
    },
  },
});

export const {
  setSearchTerm,
  setSelectedCategory,
  setSortBy,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
