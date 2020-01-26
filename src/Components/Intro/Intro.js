import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IntroMain from '../IntroMain/IntroMain';
import ScreenOverlay from '../ScreenOverlay/ScreenOverlay';
import MainActionBar from '../MainActionBar/MainActionBar';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  boardGrid: {
    position: 'relative',
    height: '400px',
    width: '400px',
    backgroundColor: 'rgba(61,61,68,1)',
  },
  container: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'rgba(61,61,68,1)',
  },
}));

/* height: '400px',
width: '400px',
backgroundImage: `url(${Bg1})`,
display: 'grid',
gridTemplateColumns: 'repeat(8, 1fr)',
gridTemplateRows: 'repeat(8, 1fr)', */

const Intro = props => {
  const classes = useStyles();
  const { changeGameState, audioClick1 } = props;
  const nextGameState = () => {
    changeGameState('playerSelection');
  };

  return (
    <div>
      <Paper>
        <IntroMain />
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

export default Intro;
