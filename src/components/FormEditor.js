import React from 'react';
import FieldSection from './FieldSection';

export class FormEditor extends React.Component {
  constructor (props) {
    console.log(props);
    super(props);
  }
  render() {
    return (
        <form>
            {this.props.data.map(i => <FieldSection key={i.id} data={i} />)}
            <p>
              <button type="button">Save</button>
            </p>
        </form>
      );
  }
}
