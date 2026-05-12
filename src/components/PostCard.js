import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { selectPost } from '../store/postsSlice';
import { openDetailModal } from '../store/uiSlice';
import { formatTime, formatNumber } from '../utils/helpers';
import './PostCard.css';

function PostCard({ post }) {
  const dispatch = useDispatch();

  const handleCardClick = useCallback(() => {
    dispatch(selectPost(post));
    dispatch(openDetailModal());
  }, [dispatch, post]);

  return (
    <div className="post-card animate-scale-in" onClick={handleCardClick}>
      <div className="post-card-image">
        <img src={post.image} alt={post.title} loading="lazy" />
        <div className="post-card-category">{post.category}</div>
      </div>
      <div className="post-card-content">
        <h3 className="post-card-title">{post.title}</h3>
        <p className="post-card-summary">{post.summary}</p>
        <div className="post-card-meta">
          <span className="post-card-author">u/{post.author}</span>
          <span className="post-card-subreddit">{post.subreddit}</span>
        </div>
        <div className="post-card-stats">
          <span className="post-stat">
            <span className="stat-icon">⬆️</span>
            <span className="stat-value">{formatNumber(post.score)}</span>
          </span>
          <span className="post-stat">
            <span className="stat-icon">💬</span>
            <span className="stat-value">{formatNumber(post.comments)}</span>
          </span>
          <span className="post-time">{formatTime(post.timestamp)}</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
