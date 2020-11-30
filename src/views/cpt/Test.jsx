import React from 'react';
import { connect } from 'react-redux';

@connect(
  (state) => ({
    cpt: state.cptView.cpt,
  }),
  (dispatch) => ({

  }),
)
class Test extends React.Component {
  render() {
    return (
      <div>render from class Test {this.props.cpt}</div>
    );
  }
}

export default Test;
