import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import initialPosts from '../data/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  await new Promise((resolve) => setTimeout(resolve, 420));
  return initialPosts;
});

const normalize = (value) => value.trim().toLowerCase();

const sortPosts = (posts, sortOrder) => {
  const sorted = [...posts];
  if (sortOrder === 'score') {
    return sorted.sort((a, b) => b.score - a.score);
  }
  if (sortOrder === 'comments') {
    return sorted.sort((a, b) => b.comments - a.comments);
  }
  return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
};

const filterPosts = ({ posts, searchTerm, selectedCategory, sortOrder }) => {
  const normalizedTerm = normalize(searchTerm);
  const filtered = posts.filter((post) => {
    const matchesSearch = [post.title, post.author, post.summary]
      .join(' ')
      .toLowerCase()
      .includes(normalizedTerm);
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return sortPosts(filtered, sortOrder);
};

const categories = ['All', 'Technology', 'Gaming', 'Science', 'News', 'Entertainment'];

const initialState = {
  allPosts: [],
  filteredPosts: [],
  categories,
  selectedCategory: 'All',
  searchTerm: '',
  sortOrder: 'newest',
  selectedPost: null,
  status: 'idle',
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredPosts = filterPosts(state);
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
      state.filteredPosts = filterPosts(state);
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
      state.filteredPosts = filterPosts(state);
    },
    selectPost(state, action) {
      state.selectedPost = action.payload;
    },
    closePost(state) {
      state.selectedPost = null;
    },
    clearFilters(state) {
      state.searchTerm = '';
      state.selectedCategory = 'All';
      state.sortOrder = 'newest';
      state.filteredPosts = filterPosts(state);
    },
    clearError(state) {
      state.error = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allPosts = action.payload;
        state.filteredPosts = filterPosts({
          posts: action.payload,
          searchTerm: state.searchTerm,
          selectedCategory: state.selectedCategory,
        });
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = 'failed';
        state.error = 'Unable to load Reddit stories. Try refreshing the page.';
      });
  },
});

export const { setSearchTerm, setSelectedCategory, setSortOrder, selectPost, closePost, clearFilters, clearError } = postsSlice.actions;
export default postsSlice.reducer;
