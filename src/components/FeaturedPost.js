import React from 'react';

const FeaturedPost = ({ post, onOpen }) => {
  if (!post) {
    return null;
  }

  return (
    <section className="featured-shell">
      <div className="featured-copy">
        <span className="eyebrow">Featured Story</span>
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
        <div className="featured-meta">
          <span>{post.category}</span>
          <span>{post.subreddit}</span>
          <span>{post.score} points</span>
        </div>
        <button type="button" className="featured-button" onClick={onOpen}>
          Read full story
        </button>
      </div>
      <div className="featured-image" style={{ backgroundImage: `url(${post.image})` }} />
    </section>
  );
};

export default FeaturedPost;
