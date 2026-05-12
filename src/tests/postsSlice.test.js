import postsReducer, { setSearchTerm, setSelectedCategory, setSortOrder, selectPost, closePost } from '../redux/postsSlice';

const initialState = {
  allPosts: [
    { id: '1', title: 'Apple', summary: 'Fruit', category: 'Technology' },
    { id: '2', title: 'Banana', summary: 'Yellow', category: 'Gaming' },
  ],
  filteredPosts: [],
  categories: ['All', 'Technology', 'Gaming'],
  selectedCategory: 'All',
  searchTerm: '',
  selectedPost: null,
  status: 'succeeded',
  error: null,
};

describe('posts reducer', () => {
  it('filters by search term', () => {
    const state = postsReducer(initialState, setSearchTerm('apple'));
    expect(state.filteredPosts).toHaveLength(1);
    expect(state.filteredPosts[0].title).toBe('Apple');
  });

  it('filters by category', () => {
    const state = postsReducer(initialState, setSelectedCategory('Gaming'));
    expect(state.filteredPosts).toHaveLength(1);
    expect(state.filteredPosts[0].category).toBe('Gaming');
  });

  it('sorts posts by score', () => {
    const state = postsReducer(initialState, setSortOrder('score'));
    expect(state.filteredPosts[0].score).toBe(123);
  });

  it('opens and closes a selected post', () => {
    const selected = { id: '2', title: 'Banana' };
    const state = postsReducer(initialState, selectPost(selected));
    expect(state.selectedPost).toEqual(selected);
    const closed = postsReducer(state, closePost());
    expect(closed.selectedPost).toBeNull();
  });
});
