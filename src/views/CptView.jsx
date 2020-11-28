import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/actions/cptViewActions';

const CptView = () => {
  const cpt = useSelector((state) => state.cptView.cpt);
  const dispatch = useDispatch();

  function handleOnClick() {
    const action = increment();
    dispatch(action);
  }

  return (
    <div>
      BLABLA
      {cpt}
      { /* eslint-disable-next-line react/button-has-type */ }
      <button onClick={handleOnClick}>INC</button>
    </div>
  );
};

export default CptView;
