export const addPlayer = ({ id, color }) => ({
  type: 'ADD_PLAYER',
  payload: { id, color }
});

export const changeResourceAmount = ({ playerId, resource, amount }) => ({ 
  type: 'CHANGE_RESOURCE_AMOUNT',
  payload: { playerId, resource, amount}
});
