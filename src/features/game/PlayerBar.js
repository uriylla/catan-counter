import React from 'react';
import Resource from './Resource';
import Settlement from './Settlement';
import City from './City';
import Road from './Road';
import Development from './Development';

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
      <Road playerId={id}/> 
      <Settlement playerId={id}/> 
      <City playerId={id}/> 
      <Development playerId={id}/> 
    </div>
  );
}

export default PlayerBar;