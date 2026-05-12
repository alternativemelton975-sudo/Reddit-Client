import {
  getFilteredAndSortedPosts,
  formatTime,
  formatNumber,
} from '../utils/helpers';

describe('helpers utilities', () => {
  const mockPosts = [
    {
      id: 1,
      title: 'React Tutorial',
      author: 'john',
      category: 'technology',
      score: 1000,
      comments: 50,
      timestamp: Date.now() - 2 * 60 * 60 * 1000, // 2 hours ago
      summary: 'Learn React basics',
    },
    {
      id: 2,
      title: 'JavaScript Tips',
      author: 'jane',
      category: 'technology',
      score: 500,
      comments: 25,
      timestamp: Date.now() - 1 * 60 * 60 * 1000, // 1 hour ago
      summary: 'Useful JavaScript tricks',
    },
    {
      id: 3,
      title: 'My Dog',
      author: 'bob',
      category: 'pets',
      score: 2000,
      comments: 100,
      timestamp: Date.now() - 30 * 60 * 1000, // 30 minutes ago
      summary: 'Cute dog photo',
    },
  ];

  describe('getFilteredAndSortedPosts', () => {
    it('should return all posts when no filters applied', () => {
      const result = getFilteredAndSortedPosts(mockPosts, '', 'all', 'newest');
      expect(result).toHaveLength(3);
    });

    it('should filter by search term', () => {
      const result = getFilteredAndSortedPosts(
        mockPosts,
        'React',
        'all',
        'newest'
      );
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(1);
    });

    it('should search in title, author, and summary', () => {
      const result = getFilteredAndSortedPosts(
        mockPosts,
        'john',
        'all',
        'newest'
      );
      expect(result).toHaveLength(1);
      expect(result[0].author).toBe('john');
    });

    it('should filter by category', () => {
      const result = getFilteredAndSortedPosts(mockPosts, '', 'pets', 'newest');
      expect(result).toHaveLength(1);
      expect(result[0].category).toBe('pets');
    });

    it('should sort by newest (timestamp)', () => {
      const result = getFilteredAndSortedPosts(mockPosts, '', 'all', 'newest');
      expect(result[0].id).toBe(3); // Most recent
    });

    it('should sort by score', () => {
      const result = getFilteredAndSortedPosts(mockPosts, '', 'all', 'score');
      expect(result[0].id).toBe(3); // 2000 score
      expect(result[1].id).toBe(1); // 1000 score
    });

    it('should sort by comments', () => {
      const result = getFilteredAndSortedPosts(mockPosts, '', 'all', 'comments');
      expect(result[0].id).toBe(3); // 100 comments
      expect(result[1].id).toBe(1); // 50 comments
    });

    it('should combine search and category filters', () => {
      const result = getFilteredAndSortedPosts(
        mockPosts,
        'Tutorial',
        'technology',
        'newest'
      );
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(1);
    });
  });

  describe('formatTime', () => {
    it('should return "just now" for recent timestamps', () => {
      const now = Date.now();
      const result = formatTime(now);
      expect(result).toBe('just now');
    });

    it('should format minutes', () => {
      const tenMinutesAgo = Date.now() - 10 * 60 * 1000;
      const result = formatTime(tenMinutesAgo);
      expect(result).toBe('10m ago');
    });

    it('should format hours', () => {
      const twoHoursAgo = Date.now() - 2 * 60 * 60 * 1000;
      const result = formatTime(twoHoursAgo);
      expect(result).toBe('2h ago');
    });

    it('should format days', () => {
      const threeDaysAgo = Date.now() - 3 * 24 * 60 * 60 * 1000;
      const result = formatTime(threeDaysAgo);
      expect(result).toBe('3d ago');
    });
  });

  describe('formatNumber', () => {
    it('should format numbers below 1000', () => {
      expect(formatNumber(500)).toBe('500');
      expect(formatNumber(999)).toBe('999');
    });

    it('should format thousands with K', () => {
      expect(formatNumber(1000)).toBe('1.0K');
      expect(formatNumber(5500)).toBe('5.5K');
      expect(formatNumber(999999)).toBe('1000.0K');
    });

    it('should format millions with M', () => {
      expect(formatNumber(1000000)).toBe('1.0M');
      expect(formatNumber(5500000)).toBe('5.5M');
    });
  });
});
