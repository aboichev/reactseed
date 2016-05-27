import React from 'react';
import TextBox from './InputFields/TextBox';
import Dropdown from './InputFields/Dropdown';

const InputComponents = {TextBox, Dropdown};

const FieldSection = ({ data }) => (
  <section>
    <h3>{data.title}</h3>
    <em>{data.subtitle}</em>
        {data.fields.map(i => {
            const InputField = InputComponents[i.type];
            return (<InputField key={i.id} data={i} />);
          })}
  </section>
);

export default FieldSection;
