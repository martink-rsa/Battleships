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
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  mainWrapper: {
    height: '400px',
    width: '400px',
    background: 'green',
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  gameOverContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    // background: 'lightblue',
    height: '100px',
    width: '100%',
  },
  gameOverBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // background: 'lightyellow',
    height: '300px',
    width: '100%',
  },
}));

const GameOver = props => {
  const classes = useStyles();
  const { players, winner, resetGame } = props;

  return (
    <div>
      <Paper>
        <div className={classes.mainWrapper}>
          <div className={classes.mainContainer}>
            <div className={classes.gameOverContainer}>
              <h1>GAME OVER</h1>
            </div>
            <div className={classes.gameOverBody}>
              <div>
                <h3>Winner</h3>
              </div>
              <div>Player {winner + 1}</div>
              <div>{players[winner].name}</div>
            </div>
          </div>
        </div>
      </Paper>
      <MainActionBar buttonText="New Game" handleClick={resetGame} />
    </div>
  );
};

export default GameOver;
