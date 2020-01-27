import React from 'react';
import Paper from '@material-ui/core/Paper';
import StoryMain from '../StoryMain/StoryMain';
import MainActionBar from '../MainActionBar/MainActionBar';

const Story = props => {
  const { startNewGame, changeGameState, tempPlayers, audioClick1 } = props;

  const startGameplay = () => {
    startNewGame();
  };

  return (
    <div>
      <Paper>
        <StoryMain tempPlayers={tempPlayers} />
      </Paper>
      <MainActionBar
        buttonText="Start"
        handleClick={startGameplay}
        isReady
        audioClick1={audioClick1}
      />
    </div>
  );
};

export default Story;
