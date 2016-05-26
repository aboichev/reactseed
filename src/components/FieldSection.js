import React from 'react';

const FieldSection = ({data}) => {
  return (
    <section>
        <h3>{data.title}</h3>
        <em>{data.subtitle}</em>
            {data.fields.map(i => (
              <p key={i.id}>
              <label for={i.id}>{i.label}</label>:
              <input type="text" defaultValue={i.value}></input>
              </p>)
            )}
    </section>
  )
};

export default FieldSection