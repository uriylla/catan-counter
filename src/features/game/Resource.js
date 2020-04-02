import React from 'react';
import { changeResourceAmount } from './actions';
import { useDispatch } from 'react-redux';

const Resource = ({ label, resource, amount, playerId }) => {
  const dispatch = useDispatch();
  return (
    <div>
        {label}: {amount}
        <button onClick={() => dispatch(changeResourceAmount({ playerId, resource, amount: 1}))}>+1</button>
        <button onClick={() => dispatch(changeResourceAmount({ playerId, resource, amount: -1}))}>-1</button>
    </div>
  );
}

export default Resource;