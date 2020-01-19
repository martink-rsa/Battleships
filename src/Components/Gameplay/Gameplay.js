import React from 'react';
import Board from '../BoardPlay/BoardPlay';

const Gameplay = props => {
  return <Board handleAttack={props.handleAttack} />;
};

export default Gameplay;
