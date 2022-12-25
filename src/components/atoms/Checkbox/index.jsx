import React from 'react';

import { CheckboxStyles } from './styles';

const Checkbox = ({value, onChange, label}) => {
  return (
    <CheckboxStyles>
      <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
      </label>
    </CheckboxStyles>
  )
}

export default Checkbox