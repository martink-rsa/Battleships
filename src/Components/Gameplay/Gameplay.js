import React from 'react';
import BoardPlay from '../BoardPlay/BoardPlay';

const Gameplay = props => {
  const { handleAttack } = props;
  return <BoardPlay handleAttack={handleAttack} />;
};

export default Gameplay;
