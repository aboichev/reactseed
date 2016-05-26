import React from 'react';
import FieldSection from './FieldSection';

export function FormEditor({data}) {
  console.log('data', data);

  return (
    <form>
        {data.map(i => <FieldSection key={i.id} data={i} />)}
    </form>
  )
}