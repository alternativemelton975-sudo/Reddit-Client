import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  clearSelectedPost,
} from '../store/postsSlice';
import {
  closeDetailModal,
} from '../store/uiSlice';
import { formatTime, formatNumber } from '../utils/helpers';
import './DetailModal.css';

function DetailModal({ post }) {
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(closeDetailModal());
    dispatch(clearSelectedPost());
  }, [dispatch]);

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  const handleEscapeKey = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleEscapeKey]);

  if (!post) return null;

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={handleBackdropClick}
        role="presentation"
      />
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-content animate-scale-in">
          <button
            className="modal-close"
            onClick={handleClose}
            aria-label="Close modal"
            title="Close (ESC)"
          >
            ✕
          </button>

          <div className="modal-image">
            <img src={post.image} alt={post.title} />
            <div className="modal-category">{post.category}</div>
          </div>

          <div className="modal-body">
            <h2 id="modal-title" className="modal-title">
              {post.title}
            </h2>

            <div className="modal-meta">
              <div className="meta-item">
                <span className="meta-label">Posted by</span>
                <span className="meta-value">u/{post.author}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Subreddit</span>
                <span className="meta-value">{post.subreddit}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Posted</span>
                <span className="meta-value">{formatTime(post.timestamp)}</span>
              </div>
            </div>

            <p className="modal-summary">{post.summary}</p>

            <div className="modal-stats">
              <div className="stat-card">
                <span className="stat-icon">⬆️</span>
                <span className="stat-label">Upvotes</span>
                <span className="stat-number">{formatNumber(post.score)}</span>
              </div>
              <div className="stat-card">
                <span className="stat-icon">💬</span>
                <span className="stat-label">Comments</span>
                <span className="stat-number">{formatNumber(post.comments)}</span>
              </div>
            </div>

            <div className="modal-actions">
              <button className="action-btn primary">View on Reddit</button>
              <button className="action-btn secondary" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailModal;
