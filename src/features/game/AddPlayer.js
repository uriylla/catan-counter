import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { CirclePicker } from 'react-color';
import { addPlayer } from '../game/actions';

const AddPlayer = () => {
  const [color, setColor] = useState('#fff');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addPlayer({ id: name, color }));
    setName('');
  }

  return (
    <div>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
      <CirclePicker
        color={color}
        onChangeComplete={({ hex }) => setColor(hex)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddPlayer;