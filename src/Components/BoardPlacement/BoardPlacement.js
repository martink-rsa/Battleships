import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import GameTile from '../GameTile/GameTile';
import './BoardPlacement.css';
import Ship from '../../game/ship/ship';

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

const BoardPlacement = props => {
  const classes = useStyles();
  const [board, setBoards] = useState(props.gameboards[0].grid);

  // Generate the gameboard
  const generateBoard = grid => {
    const newBoard = [];
    const size = 8;
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        newBoard.push({ key: `${i} ${j}`, content: grid[i][j] });
      }
    }
    return newBoard;
  };

  const handleClick = e => {
    const coords = e.currentTarget.value.split(' ');
    const x = parseInt(coords[0]);
    const y = parseInt(coords[1]);
    const gameboard = props.gameboards[0];
    const newShip = Ship(0, 4, [], false, 'horizontal');
    if (gameboard.isLegalPlacement(newShip, [x, y])) {
      gameboard.placeShip(newShip, [x, y]);
    }
    setBoards(gameboard.grid);
  };

  return (
    <div>
      <Paper>
        <div className={classes.boardGrid}>
          {generateBoard(board).map(item => (
            <div key={item.key} className={classes.boardCell}>
              <HiddenButton
                disableRipple
                onClick={handleClick}
                value={item.key}
              >
                {/* {item.content} */}
                <GameTile content={item.content} />
              </HiddenButton>
            </div>
          ))}
        </div>
      </Paper>
      {/* <Paper>BOARD PLACEMENT PIECES</Paper> */}
    </div>
  );
};

export default BoardPlacement;
