import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Board from '../Board/Board';
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
}));

const BoardPlacement = props => {
  const classes = useStyles();
  const { gameboards } = props;

  const handleClick = e => {
    const { gameboards, setGameboards } = props;
    const x = parseInt(e.currentTarget.value.split(' ')[0], 10);
    const y = parseInt(e.currentTarget.value.split(' ')[1], 10);
    const playerGameboard = gameboards[0];
    const newShip = Ship(0, 5, [], false, 'vertical');
    if (playerGameboard.isLegalPlacement(newShip, [x, y])) {
      playerGameboard.placeShip(newShip, [x, y]);
    }
    setGameboards(prevState => {
      const tempGameboards = [...prevState];
      tempGameboards[0] = { ...playerGameboard };
      return tempGameboards;
    });
  };

  const createComputerShips = () => {
    for (let i = 0; i < 4; i += 1) {
      const newShip = Ship(0, 4, [], false, 'vertical');
    }
  };

  return (
    <div>
      <Paper>
        <Board
          type="placement"
          grid={gameboards[0].grid}
          handleClick={handleClick}
        />
      </Paper>
    </div>
  );
};

export default BoardPlacement;
