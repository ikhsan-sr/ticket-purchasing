import React from 'react';

import { ButtonStyles } from './styles';

const Button = ({ text, onClick, type, primary, style }) => {
  return (
    <ButtonStyles
      type="button"
      onClick={onClick}
      primary={primary}
      style={style}
    >
      {text}
    </ButtonStyles>
  )
}

export default Button