// Utility function to filter and sort posts based on Redux state
export const getFilteredAndSortedPosts = (posts, searchTerm, category, sortBy) => {
  let filtered = posts;

  // Filter by search term (searches title, author, and summary)
  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.author.toLowerCase().includes(term) ||
        post.summary.toLowerCase().includes(term)
    );
  }

  // Filter by category
  if (category !== 'all') {
    filtered = filtered.filter((post) => post.category === category);
  }

  // Sort posts
  filtered.sort((a, b) => {
    switch (sortBy) {
      case 'score':
        return b.score - a.score;
      case 'comments':
        return b.comments - a.comments;
      case 'newest':
      default:
        return b.timestamp - a.timestamp;
    }
  });

  return filtered;
};

// Format timestamp to readable format
export const formatTime = (timestamp) => {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;

  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined,
  });
};

// Format large numbers with abbreviations
export const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
};
