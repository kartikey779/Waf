// src/components/Common/Button.js
import React from 'react';
import '../../styles/common.css';

const Button = ({ type = 'button', onClick, children }) => {
  return (
    <button type={type} onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;
