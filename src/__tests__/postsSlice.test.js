import postsReducer, {
  setLoading,
  setError,
  selectPost,
  clearSelectedPost,
  clearError,
} from '../store/postsSlice';

describe('postsSlice', () => {
  const initialState = {
    items: expect.any(Array),
    loading: false,
    error: null,
    selectedPost: null,
  };

  it('should return the initial state', () => {
    expect(postsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setLoading', () => {
    const state = postsReducer(initialState, setLoading(true));
    expect(state.loading).toBe(true);
  });

  it('should handle setError', () => {
    const errorMessage = 'Test error';
    const state = postsReducer(initialState, setError(errorMessage));
    expect(state.error).toBe(errorMessage);
  });

  it('should handle selectPost', () => {
    const post = { id: 1, title: 'Test Post' };
    const state = postsReducer(initialState, selectPost(post));
    expect(state.selectedPost).toEqual(post);
  });

  it('should handle clearSelectedPost', () => {
    const stateWithPost = {
      ...initialState,
      selectedPost: { id: 1, title: 'Test' },
    };
    const state = postsReducer(stateWithPost, clearSelectedPost());
    expect(state.selectedPost).toBeNull();
  });

  it('should handle clearError', () => {
    const stateWithError = { ...initialState, error: 'Some error' };
    const state = postsReducer(stateWithError, clearError());
    expect(state.error).toBeNull();
  });

  it('should load sample posts on initialization', () => {
    const state = postsReducer(undefined, { type: 'unknown' });
    expect(state.items.length).toBeGreaterThan(0);
    expect(state.items[0]).toHaveProperty('id');
    expect(state.items[0]).toHaveProperty('title');
    expect(state.items[0]).toHaveProperty('author');
  });
});
