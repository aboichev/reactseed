import { connect } from 'react-redux';
import { FormEditor } from '../components/FormEditor';

const mapStateToProps = (state) => { data: state };
const mapDispatchToProps = () => {};

export const FormContainer = connect(mapStateToProps, mapDispatchToProps)(FormEditor);
