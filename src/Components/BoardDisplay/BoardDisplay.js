import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './BoardPlay.css';

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

const BoardDisplay = props => {
  const classes = useStyles();

  // Generate the gameboard
  const generateBoard = gameboard => {
    const board = [];
    const size = 8;
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        board.push({ x: i, y: j });
      }
    }
    return board;
  };

  const handleClick = e => {
    console.log(e.currentTarget.value);
    props.handleAttack(e.currentTarget.value);
  };

  const board = generateBoard();
  return (
    <div>
      <Paper>
        <div className={classes.boardGrid}>
          {board.map(item => (
            <div key={`${item.x} ${item.y}`} className={classes.boardCell}>
              {/* {item[0]}, {item[1]} */}
              <HiddenButton
                disableRipple
                onClick={handleClick}
                value={`${item.x} ${item.y}`}
              >
                {item.x}, {item.y}
              </HiddenButton>
            </div>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default BoardDisplay;
