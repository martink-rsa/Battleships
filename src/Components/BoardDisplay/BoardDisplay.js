import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Board from '../Board/Board';
import MainActionBar from '../MainActionBar/MainActionBar';
import BoardDisplayAttacked from '../BoardDisplayAttacked/BoardDisplayAttacked';
import ShipSelector from '../ShipSelector/ShipSelector';
import Ship from '../../game/ship/ship';
import Ship0Selector from '../../Assets/Images/selection_0.png';
import Ship1Selector from '../../Assets/Images/selection_1.png';
import Ship2Selector from '../../Assets/Images/selection_2.png';
import Ship3Selector from '../../Assets/Images/selection_3.png';
import { genRandNum } from '../../game/utility/utility';

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
      <MainActionBar buttonText="Play" handleClick={props.handleAttack} />
    </div>
  );
};

export default BoardDisplay;
