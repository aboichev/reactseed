import { connect } from 'react-redux';
import {FormEditor}  from '../components/FormEditor';

export const FormContainer = connect(
  function mapStateToProps(state) {
    return { data: state };
  },
  function mapDispatchToProps(dispatch) {
    return {};
  }
)(FormEditor);