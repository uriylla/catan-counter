import React from 'react';
import Resource from './Resource';

const PlayerBar = ({ player: {
  id, color, ore, wheat, brick, wood, sheep
} }) => {
  return (
    <div style={{backgroundColor: color}}>
      <h3>{id}</h3>
      <Resource key={'ore'} playerId={id} label={'Pedra'} resource={'ore'} amount={ore} />
      <Resource key={'wheat'} playerId={id} label={'Palla'} resource={'wheat'} amount={wheat} />
      <Resource key={'wood'} playerId={id} label={'Fusta'} resource={'wood'} amount={wood} />
      <Resource key={'brick'} playerId={id} label={'Argila'} resource={'brick'} amount={brick} />
      <Resource key={'sheep'} playerId={id} label={'Xai'} resource={'sheep'} amount={sheep} />      
    </div>
  );
}

export default PlayerBar;