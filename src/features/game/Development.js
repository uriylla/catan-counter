import React from 'react';
import { changeResourceAmount } from './actions';
import { useDispatch } from 'react-redux';

const Development = ({ playerId }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(changeResourceAmount({ playerId, resource: 'ore' , amount: -1 }));
    dispatch(changeResourceAmount({ playerId, resource: 'wheat' , amount: -1 }));
    dispatch(changeResourceAmount({ playerId, resource: 'sheep' , amount: -1 }));
  }

  return (
    <div>
        <button onClick={onClick}>Desenvolupament</button>
    </div>
  );
}

export default Development;