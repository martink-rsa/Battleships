import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MainActionBar from '../MainActionBar/MainActionBar';
import BoardDisplayAttacked from '../BoardDisplayAttacked/BoardDisplayAttacked';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  paper: {
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
}));

const BoardDisplay = props => {
  const classes = useStyles();
  const {
    gameboards,
    setGameboards,
    computerPlaced,
    setComputerPlaced,
  } = props;

  return (
    <div>
      <Paper>
        <BoardDisplayAttacked
          type="display"
          // grid={gameboards[0].grid}
          gameboards={gameboards}
          boardIndex={0}
          // handleBoardClick={handleBoardClick}
        />
      </Paper>
      <MainActionBar
        buttonText="Play"
        handleClick={props.handleAttack}
        isReady
      />
    </div>
  );
};

export default BoardDisplay;
