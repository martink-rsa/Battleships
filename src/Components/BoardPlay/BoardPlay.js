import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import BoardAttack from '../BoardAttack/BoardAttack';
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

const HiddenButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    // fontSize: 16,
    // padding: '6px 12px',
    padding: '0px',
    margin: '0px',
    minWidth: 'initial',
    height: '100%',
    width: '100%',
    // border: '1px solid',
    // lineHeight: 1.5,
    backgroundColor: 'none',
    borderColor: 'none',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const BoardPlay = props => {
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
        <BoardAttack
          gameboards={gameboards}
          players={players}
          boardIndex={1}
          handleClick={handleClick}
        />
      </Paper>
      <MainActionBar buttonText="Attack!" handleClick={handleAttack} />
    </div>
  );
};

export default BoardPlay;
