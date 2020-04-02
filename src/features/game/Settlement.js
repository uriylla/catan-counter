import React from 'react';
import { changeResourceAmount } from './actions';
import { useDispatch } from 'react-redux';

const Settlement = ({ playerId }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(changeResourceAmount({ playerId, resource: 'brick' , amount: -1 }));
    dispatch(changeResourceAmount({ playerId, resource: 'wood' , amount: -1 }));
    dispatch(changeResourceAmount({ playerId, resource: 'wheat' , amount: -1 }));
    dispatch(changeResourceAmount({ playerId, resource: 'sheep' , amount: -1 }));    
  }

  return (
    <div>
        <button onClick={onClick}>Poblat</button>
    </div>
  );
}

export default Settlement;