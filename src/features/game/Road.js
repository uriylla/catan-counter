import React from 'react';
import { changeResourceAmount } from './actions';
import { useDispatch } from 'react-redux';

const Road = ({ playerId }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(changeResourceAmount({ playerId, resource: 'brick' , amount: -1 }));
    dispatch(changeResourceAmount({ playerId, resource: 'wood' , amount: -1 }));
  }

  return (
    <div>
        <button onClick={onClick}>Camí</button>
    </div>
  );
}

export default Road;