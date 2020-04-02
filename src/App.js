import React from 'react';
import AddPlayer from './features/game/AddPlayer';
import PlaherBar from './features/game/PlayerBar';
import { useSelector } from 'react-redux';
import './App.css';

const App = () => {
  const players = useSelector(state => state.players);
  return (
    <div>
      {players.map((player, i) => (
        <PlaherBar key={`${player.id}_${i}`} player={player}/>
      ))}
      <AddPlayer />
    </div>
  );
}

export default App;
