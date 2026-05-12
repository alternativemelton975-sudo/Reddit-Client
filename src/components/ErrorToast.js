import React from 'react';

const ErrorToast = ({ error, onRetry }) => {
  if (!error) {
    return null;
  }

  return (
    <div className="error-toast" role="alert">
      <span>{error}</span>
      <button type="button" onClick={onRetry} className="retry-button">
        Retry
      </button>
    </div>
  );
};

export default ErrorToast;
