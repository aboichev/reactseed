import React from 'react';
import TextBox from './InputFields/TextBox';
import Dropdown from './InputFields/Dropdown';

const InputComponents = {TextBox, Dropdown};

const InputField = ({ data }) => {
  console.log('data', data);
  const Implementation = InputComponents[data.type];
  return (
    <Implementation data={data} />
  );
};

export default InputField;
