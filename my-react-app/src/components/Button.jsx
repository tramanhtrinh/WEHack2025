import React from 'react';

export function Button({ children, className, onClick }) {
  return (
    <button
      className={`btn ${className}`} // Allowing for className props to customize styling
      onClick={onClick}
    >
      {children}
    </button>
  );
}