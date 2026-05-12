import React from 'react';

const PostDetailModal = ({ post, onClose }) => {
  if (!post) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose}>
          Close
        </button>
        <div className="modal-image" style={{ backgroundImage: `url(${post.image})` }} />
        <div className="modal-content">
          <span className="modal-meta">{post.subreddit} · {post.category}</span>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div className="modal-stats">
            <span>{post.score} points</span>
            <span>{post.comments} comments</span>
            <span>Published {post.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailModal;
