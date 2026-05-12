import React from 'react';
import PostCard from './PostCard';
import './PostGrid.css';

function PostGrid({ posts }) {
  return (
    <div className="post-grid-container">
      <div className="post-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default PostGrid;
