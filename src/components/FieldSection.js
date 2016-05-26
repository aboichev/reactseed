import React from 'react';

const FieldSection = ({ data }) => (
  <section>
    <h3>{data.title}</h3>
    <em>{data.subtitle}</em>
        {data.fields.map(i => (
          <p key={i.id}>
            <label htmlFor={i.id}>{i.label}</label>:
            <input type="text" defaultValue={i.value}></input>
          </p>)
        )}
  </section>
);

export default FieldSection;
