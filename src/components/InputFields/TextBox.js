import React from 'react';

const TextBox = ({ data }) => (
  <div>
    <label htmlFor={data.name}>{data.label}:</label>
    <input id={data.name} defaultValue={data.value} />
  </div>
);

export default TextBox;
