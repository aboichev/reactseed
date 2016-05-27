import React from 'react';

const Dropdown = ({ data }) => (
    <select id={data.name}>
      { data.options.map(i =>
        (<option key={i.name} value={i.value}>{i.label}</option>)
      )}
    </select>
);

export default Dropdown;
