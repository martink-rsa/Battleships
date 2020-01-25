import React from 'react';
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
  } = props;

  const handleClick = coords => {
    const x = coords.split(' ')[0];
    const y = coords.split(' ')[1];
    setCurrentCoords([x, y]);
  };

  return (
    <div>
      <Paper>
        <AttackBoard
          gameboards={gameboards}
          players={players}
          boardIndex={1}
          handleClick={handleClick}
          currentCoords={currentCoords}
        />
      </Paper>
      <MainActionBar buttonText="Attack" handleClick={handleAttack} isReady />
    </div>
  );
};

export default AttackMain;
