import React from 'react';
import Paper from '@material-ui/core/Paper';
import MainActionBar from '../MainActionBar/MainActionBar';
import DefendBoard from '../DefendBoard/DefendBoard';

const DefendMain = props => {
  const { gameboards, handleAttack, computerAttackMade, audioClick1 } = props;

  return (
    <div>
      <Paper>
        <DefendBoard type="display" gameboards={gameboards} boardIndex={0} />
      </Paper>
      <MainActionBar
        buttonText="Play"
        handleClick={handleAttack}
        audioClick1={audioClick1}
        isReady={computerAttackMade === false}
      />
    </div>
  );
};

export default DefendMain;
