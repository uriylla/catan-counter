import React from 'react';
import { changeResourceAmount } from './actions';
import { useDispatch } from 'react-redux';

const PlayerBar = player => {
  const { id, color, ore, wheat, brick, wood, sheep } = player.player
  const dispatch = useDispatch();

  return (
    <div style={{backgroundColor: color}}>
      <h3>{id}</h3>
      <p>
        Pedra: {ore}
        <button onClick={() => dispatch(changeResourceAmount({ playerId: id, resource: 'ore', amount: 1}))}>+1</button>
        <button onClick={() => dispatch(changeResourceAmount({ playerId: id, resource: 'ore', amount: -1}))}>-1</button>
      </p>
      <p>
        Palla: {wheat}
        <button onClick={() => dispatch(changeResourceAmount({ playerId: id, resource: 'wheat', amount: 1}))}>+1</button>
        <button onClick={() => dispatch(changeResourceAmount({ playerId: id, resource: 'wheat', amount: -1}))}>-1</button>
      </p>
      <p>
        Argila: {brick}
        <button onClick={() => dispatch(changeResourceAmount({ playerId: id, resource: 'brick', amount: 1}))}>+1</button>
        <button onClick={() => dispatch(changeResourceAmount({ playerId: id, resource: 'brick', amount: -1}))}>-1</button>
      </p>
      <p>
        Fusta: {wood}
        <button onClick={() => dispatch(changeResourceAmount({ playerId: id, resource: 'wood', amount: 1}))}>+1</button>
        <button onClick={() => dispatch(changeResourceAmount({ playerId: id, resource: 'wood', amount: -1}))}>-1</button>
      </p>
      <p>
        Xai: {sheep}
        <button onClick={() => dispatch(changeResourceAmount({ playerId: id, resource: 'sheep', amount: 1}))}>+1</button>
        <button onClick={() => dispatch(changeResourceAmount({ playerId: id, resource: 'sheep', amount: -1}))}>-1</button>
      </p>
    </div>
  );
}

export default PlayerBar;