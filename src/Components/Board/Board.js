import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import GameTile from '../GameTile/GameTile';
import Bg1 from '../../Assets/Images/bg1.jpg';
// import Bg2 from '../../Assets/Images/bg2.jpg';

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
    // background: 'rgb(34, 84, 141)',
    width: 'auto',
    height: 'auto',
    // outline: '1px solid rgba(0,0,0,0.4)',
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
    padding: '0px',
    margin: '0px',
    minWidth: 'initial',
    height: '100%',
    width: '100%',
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

const Board = props => {
  const classes = useStyles();
  // const [board, setBoards] = useState(props.gameboards[0].grid);

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

  /* const handleClick = e => {
    props.handleClick(e);
  }; */

  return (
    <div>
      <Paper>
        <div className={classes.boardGrid}>
          {generateBoard(props.grid).map(item => (
            <div key={item.key} className={classes.boardCell}>
              <HiddenButton
                disableRipple
                onClick={props.handleClick}
                value={item.key}
              >
                <GameTile content={item.content} />
              </HiddenButton>
            </div>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default Board;
