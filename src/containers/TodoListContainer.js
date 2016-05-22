import { connect } from 'react-redux';
import {TodoList}  from '../components/TodoList';
import { addTodo, toggleTodo } from '../core/actions';

export const TodoListContainer = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  }
)(TodoList);