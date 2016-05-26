import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { FormContainer } from '../containers/FormContainer';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <FormContainer />
  </Provider>,
  document.getElementById('app')
);