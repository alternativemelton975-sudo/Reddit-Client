import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import filtersReducer from './filtersSlice';
import uiReducer from './uiSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    filters: filtersReducer,
    ui: uiReducer,
  },
});

export default store;
