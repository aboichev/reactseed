import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { TodoListContainer } from '../containers/TodoListContainer';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <TodoListContainer />
  </Provider>,
  document.getElementById('app')
);