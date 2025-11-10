import React from 'react';

function Button({ text, className, onClick, disabled = false }) {
  return (
    <button className={className} onClick={onClick ? (e) => onClick(e) : undefined} disabled={disabled}>
      {disabled ? 'Loading.....' : text}
    </button>
  );
}

export default Button;
