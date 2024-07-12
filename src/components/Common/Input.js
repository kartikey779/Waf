// src/components/Common/Input.js
import React from 'react';
import '../../styles/common.css';

const Input = ({ name, type = 'text', value, onChange, placeholder }) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
};

export default Input;
