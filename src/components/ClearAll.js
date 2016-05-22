import React from 'react';

export function ClearAll(props) {
  const { clearAll } = props;
  
  const onClearAllClick = () => event => { 
      event.preventDefault();
      clearAll();
  };

  return <a href='#' onClick={onClearAllClick()}>Clear All</a>
}