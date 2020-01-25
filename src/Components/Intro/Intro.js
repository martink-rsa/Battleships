import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MainActionBar from '../MainActionBar/MainActionBar';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  paper: {
    height: '400px',
    width: '400px',
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  boardGrid: {
    height: '400px',
    width: '400px',
    background: 'red',
  },
}));

const Intro = props => {
  const classes = useStyles();

  const nextGameState = () => {
    props.changeGameState('playerSelection');
  };

  return (
    <div>
      <Paper>
        <div className={classes.boardGrid}>Battleships!</div>
      </Paper>
      <MainActionBar buttonText="Start" handleClick={nextGameState} isReady />
    </div>
  );
};

export default Intro;
