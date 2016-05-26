import React from 'react';
import FieldSection from './FieldSection';

const FormEditor = ({ data }) => (
    <form>
        {data.map(i => <FieldSection key={i.id} data={i} />)}
    </form>
);

export FormEditor;
