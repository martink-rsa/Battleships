import React from 'react';
import Button from '@material-ui/core/Button';

const PlayerSelection = props => {
  const startGameplay = () => {
    const player1 = {
      name: 'Player 1',
      type: 'Human',
      theme: 'Default',
      color: 'Blue',
    };
    const player2 = {
      name: 'Admiral Bytes',
      type: 'Computer',
      theme: 'Default',
      color: 'Blue',
    };
    const players = [player1, player2];
    props.startNewGame(players);
  };
  return (
    <div>
      <h3>Player Selection</h3>
      <Button variant="contained" onClick={startGameplay}>
        Play
      </Button>
    </div>
  );
};

export default PlayerSelection;
