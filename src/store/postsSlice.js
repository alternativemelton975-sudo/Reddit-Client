import { createSlice } from '@reduxjs/toolkit';

// Sample data with Reddit-style posts
const SAMPLE_POSTS = [
  {
    id: 1,
    title: 'Amazing sunset from my backyard',
    author: 'NaturePhotog',
    category: 'photography',
    score: 2450,
    comments: 187,
    timestamp: Date.now() - 2 * 60 * 60 * 1000,
    summary: 'Captured this beautiful golden hour moment with my camera. The colors were incredible!',
    image: 'https://via.placeholder.com/500x300?text=Sunset',
    subreddit: 'r/photography',
  },
  {
    id: 2,
    title: 'My dog learned to play fetch!',
    author: 'PetLover42',
    category: 'pets',
    score: 5230,
    comments: 523,
    timestamp: Date.now() - 1 * 60 * 60 * 1000,
    summary: 'After months of training, my golden retriever finally understands fetch. So proud!',
    image: 'https://via.placeholder.com/500x300?text=Dog+Playing',
    subreddit: 'r/pets',
  },
  {
    id: 3,
    title: 'Built my first PC - Here\'s the setup',
    author: 'TechEnthusiast',
    category: 'technology',
    score: 3100,
    comments: 412,
    timestamp: Date.now() - 4 * 60 * 60 * 1000,
    summary: 'After weeks of research and assembly, my first custom PC is finally complete. Total cost: $1200.',
    image: 'https://via.placeholder.com/500x300?text=PC+Setup',
    subreddit: 'r/buildapc',
  },
  {
    id: 4,
    title: 'Homemade pasta from scratch',
    author: 'FoodBlogger',
    category: 'food',
    score: 4120,
    comments: 287,
    timestamp: Date.now() - 6 * 60 * 60 * 1000,
    summary: 'Made fresh tagliatelle with a rich bolognese sauce. The flavors are incredible when made from scratch.',
    image: 'https://via.placeholder.com/500x300?text=Pasta',
    subreddit: 'r/cooking',
  },
  {
    id: 5,
    title: 'Finally finished my novel!',
    author: 'WriterInProgress',
    category: 'writing',
    score: 1890,
    comments: 156,
    timestamp: Date.now() - 8 * 60 * 60 * 1000,
    summary: 'After 3 years of writing, late nights, and constant editing, my sci-fi novel is complete. What now?',
    image: 'https://via.placeholder.com/500x300?text=Writing',
    subreddit: 'r/writing',
  },
  {
    id: 6,
    title: 'Meditation changed my life',
    author: 'MindfulUser',
    category: 'wellness',
    score: 3450,
    comments: 423,
    timestamp: Date.now() - 12 * 60 * 60 * 1000,
    summary: 'Starting a daily meditation practice was the best decision I made this year. Here\'s what I learned.',
    image: 'https://via.placeholder.com/500x300?text=Meditation',
    subreddit: 'r/meditation',
  },
  {
    id: 7,
    title: 'New hiking trail discovery',
    author: 'OutdoorAdventurer',
    category: 'travel',
    score: 2780,
    comments: 234,
    timestamp: Date.now() - 14 * 60 * 60 * 1000,
    summary: 'Found this hidden gem trail in the mountains. 6 miles of pure natural beauty with minimal crowds.',
    image: 'https://via.placeholder.com/500x300?text=Hiking',
    subreddit: 'r/hiking',
  },
  {
    id: 8,
    title: 'React Hooks Tips and Tricks',
    author: 'CodeMentor',
    category: 'technology',
    score: 4560,
    comments: 678,
    timestamp: Date.now() - 18 * 60 * 60 * 1000,
    summary: 'A deep dive into advanced React Hooks patterns. Learn useReducer, useContext, and custom hooks.',
    image: 'https://via.placeholder.com/500x300?text=React',
    subreddit: 'r/reactjs',
  },
  {
    id: 9,
    title: 'My garden is blooming!',
    author: 'GardenTherapy',
    category: 'hobbies',
    score: 2340,
    comments: 198,
    timestamp: Date.now() - 20 * 60 * 60 * 1000,
    summary: 'Spring arrived and my flowers are finally starting to show their colors. Worth the wait!',
    image: 'https://via.placeholder.com/500x300?text=Garden',
    subreddit: 'r/gardening',
  },
  {
    id: 10,
    title: 'Lost 50 pounds - My journey',
    author: 'FitnessJourney',
    category: 'wellness',
    score: 6780,
    comments: 892,
    timestamp: Date.now() - 24 * 60 * 60 * 1000,
    summary: 'From couch potato to marathon runner. Here\'s my transformation story and what kept me motivated.',
    image: 'https://via.placeholder.com/500x300?text=Fitness',
    subreddit: 'r/fitness',
  },
];

const initialState = {
  items: SAMPLE_POSTS,
  loading: false,
  error: null,
  selectedPost: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    selectPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    clearSelectedPost: (state) => {
      state.selectedPost = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setLoading,
  setError,
  selectPost,
  clearSelectedPost,
  clearError,
} = postsSlice.actions;

export default postsSlice.reducer;
