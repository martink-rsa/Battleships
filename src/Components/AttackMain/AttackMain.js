import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AttackBoard from '../AttackBoard/AttackBoard';
import MainActionBar from '../MainActionBar/MainActionBar';

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
  boardGrid: {
    height: '400px',
    width: '400px',
    background: 'red',
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gridTemplateRows: 'repeat(8, 1fr)',
  },
  boardCell: {
    position: 'relative',
    background: 'rgb(34, 84, 141)',
    width: 'auto',
    height: 'auto',
    outline: '1px solid black',
  },
  cellButton: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: 'black',
  },
}));

const AttackMain = props => {
  const classes = useStyles();

  const {
    gameboards,
    setGameboards,
    handleAttack,
    players,
    currentCoords,
    setCurrentCoords,
    playerAttackReady,
    setPlayerAttackReady,
    playerAttackMade,
    setPlayerAttackMade,
    audioClick1,
    audioClick2,
  } = props;

  const handleClick = coords => {
    const x = coords.split(' ')[0];
    const y = coords.split(' ')[1];
    console.log('playerAttackReady');
    console.log(playerAttackReady);
    console.log('playerAttackMade');
    console.log(playerAttackMade);
    if (gameboards[1].isLegalAttack([x, y])) {
      console.log([x, y]);
      audioClick2.play();
      setCurrentCoords([x, y]);
      setPlayerAttackReady(true);
    }
  };

  console.log('AttackMain LOADED');
  console.log(currentCoords);

  return (
    <div>
      <Paper>
        <AttackBoard
          gameboards={gameboards}
          players={players}
          boardIndex={1}
          handleClick={handleClick}
          currentCoords={currentCoords}
          setPlayerAttackMade={setPlayerAttackMade}
        />
      </Paper>
      <MainActionBar
        buttonText="Attack"
        handleClick={handleAttack}
        audioClick1={audioClick1}
        isReady={playerAttackReady === true && playerAttackMade === false}
      />
    </div>
  );
};

export default AttackMain;
