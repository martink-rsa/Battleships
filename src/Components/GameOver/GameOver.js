import React from 'react';
import Paper from '@material-ui/core/Paper';
import GameOverMain from '../GameOverMain/GameOverMain';
import MainActionBar from '../MainActionBar/MainActionBar';

const GameOver = props => {
  const { players, winner, resetGame, audioClick1, audioClick2 } = props;

  return (
    <div>
      <Paper>
        <GameOverMain
          players={players}
          winner={winner}
          audioClick2={audioClick2}
        />
      </Paper>
      <MainActionBar
        buttonText="Restart"
        handleClick={resetGame}
        isReady
        audioClick1={audioClick1}
      />
    </div>
  );
};

export default GameOver;
