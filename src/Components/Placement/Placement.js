import React from 'react';
import PlacementMain from '../PlacementMain/PlacementMain';

const Placement = props => {
  const {
    gameboards,
    setGameboards,
    players,
    startGameplay,
    computerPlaced,
    setComputerPlaced,
    audioClick1,
    audioClick2,
  } = props;

  return (
    <div>
      <PlacementMain
        gameboards={gameboards}
        setGameboards={setGameboards}
        players={players}
        startGameplay={startGameplay}
        computerPlaced={computerPlaced}
        setComputerPlaced={setComputerPlaced}
        audioClick1={audioClick1}
        audioClick2={audioClick2}
      />
    </div>
  );
};

export default Placement;
