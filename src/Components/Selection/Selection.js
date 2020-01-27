import React from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SelectionMain from '../SelectionMain/SelectionMain';
import MainActionBar from '../MainActionBar/MainActionBar';

const Selection = props => {
  const { changeGameState, tempPlayers, setTempPlayers, audioClick1 } = props;

  const nextGameState = () => {
    changeGameState('story');
  };

  return (
    <div>
      <Paper>
        <SelectionMain
          tempPlayers={tempPlayers}
          setTempPlayers={setTempPlayers}
        />
      </Paper>
      <MainActionBar
        buttonText="Start"
        handleClick={nextGameState}
        isReady
        audioClick1={audioClick1}
      />
    </div>
  );
};

export default Selection;
