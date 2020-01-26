import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MainActionBar from '../MainActionBar/MainActionBar';
import DefendBoard from '../DefendBoard/DefendBoard';

const DefendMain = props => {
  const { gameboards, handleAttack, computerAttackMade, audioClick1 } = props;

  return (
    <div>
      <Paper>
        <DefendBoard
          type="display"
          // grid={gameboards[0].grid}
          gameboards={gameboards}
          boardIndex={0}
          // handleBoardClick={handleBoardClick}
        />
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
