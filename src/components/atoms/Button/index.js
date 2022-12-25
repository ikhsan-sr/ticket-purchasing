import React from 'react';

const Button = ({ text, onClick, ghost }) => {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button