import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { FormContainer } from '../containers/FormContainer';
import { FormEditor } from '../components/FormEditor';

import {data} from './mockData';

const store = createStore(reducer);

render(
  // <Provider store={store}>
  //   <FormContainer />
  // </Provider>,
  <FormEditor data={data} />,
  document.getElementById('app')
);
