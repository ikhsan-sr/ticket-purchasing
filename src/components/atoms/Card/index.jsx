import React from 'react';

import { CardStyles } from './styles';

const Card = ({ children }) => {
  return (
    <CardStyles>{children}</CardStyles>
  )
}

export default Card