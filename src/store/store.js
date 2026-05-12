import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import filtersReducer from './slices/filtersSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    filters: filtersReducer,
    ui: uiReducer,
  },
});

export default store;
