import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ScreenOverlay from '../ScreenOverlay/ScreenOverlay';
import DefendGameTile from '../DefendGameTile/DefendGameTile';
import Bg1 from '../../Assets/Images/bg1.jpg';

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
    backgroundImage: `url(${Bg1})`,
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gridTemplateRows: 'repeat(8, 1fr)',
  },
  boardCell: {
    position: 'relative',
    width: 'auto',
    height: 'auto',
  },
  cellButton: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
}));

const HiddenButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    padding: '0',
    margin: '0',
    minWidth: 'initial',
    height: '100%',
    width: '100%',
    transition: 'none',
    '&:hover': {
      background: 'transparent',
    },
  },
})(Button);

const DefendBoard = props => {
  const classes = useStyles();

  // Generate the gameboard
  const generateBoard = gameboard => {
    const grid = gameboard.grid;
    const newBoard = [];
    const size = 8;
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        // Need to get the alignment of the ship so the
        //    tile can be properly rotated
        let alignment = 'vertical';
        const gridContent = grid[i][j].split('')[0];
        if (
          gridContent !== 'E' &&
          gridContent !== 'H' &&
          gridContent !== 'X' &&
          gridContent !== `S`
        ) {
          const shipObj = gameboard.getShip(parseInt(gridContent, 10));
          alignment = shipObj.ship.alignment;
        }
        newBoard.push({
          key: `${i} ${j}`,
          content: grid[i][j],
          alignment,
        });
      }
    }
    return newBoard;
  };

  return (
    <div>
      <Paper>
        <div className={classes.boardGrid}>
          {generateBoard(props.gameboards[props.boardIndex]).map(item => (
            <div key={item.key} className={classes.boardCell}>
              <HiddenButton
                disableRipple
                onClick={props.handleBoardClick}
                value={item.key}
              >
                <DefendGameTile
                  content={item.content}
                  alignment={item.alignment}
                  type="defend"
                />
              </HiddenButton>
            </div>
          ))}
          <ScreenOverlay />
        </div>
      </Paper>
    </div>
  );
};

export default DefendBoard;
