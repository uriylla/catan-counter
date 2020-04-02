import React from 'react';
import { changeResourceAmount } from './actions';
import { useDispatch } from 'react-redux';

const City = ({ playerId }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(changeResourceAmount({ playerId, resource: 'ore' , amount: -3 }));
    dispatch(changeResourceAmount({ playerId, resource: 'wheat' , amount: -2 }));
  }

  return (
    <div>
        <button onClick={onClick}>Ciutat</button>
    </div>
  );
}

export default City;