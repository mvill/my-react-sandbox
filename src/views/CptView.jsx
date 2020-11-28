import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {increment} from '../store/actions/cptViewActions';


const CptView = () => {

  const cpt = useSelector(state => state.cptView.cpt);
  const dispatch = useDispatch();

  function handleOnClick(){
    const action = increment();
    dispatch(action);
  }

  return (
    <div>
      BLABLA {cpt}
      <button onClick={handleOnClick}>INC</button>
    </div>
  );
}

/*
@connect(
  state => ({
    cpt: state.cptView.cpt,
  }),
  dispatch => ({

  })
)
class CptView extends React.Component {
  render = () => {
    return (
      <div>
        BLABLA
      </div>
    );
  }
}
*/

export default CptView;