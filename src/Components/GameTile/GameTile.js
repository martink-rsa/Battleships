import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Water from '../../Assets/Images/Tiles/Water2.png';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  water: {
    backgroundImage: `url(${Water})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
    margin: 0,
    padding: 0,
  },
  ship: {
    background: 'gray',
    height: '50px',
    width: '50px',
  },
}));

/* const HiddenButton = withStyles({
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
})(Button); */

const GameTile = props => {
  const classes = useStyles();
  // const [board, setBoards] = useState(props.gameboards[0].grid);
  const { content } = props;

  const getGameTile = c => {
    if (c === 'E') {
      return <span className={classes.water} />;
    }
    return <span className={classes.ship} />;
  };

  return getGameTile(content);
};

export default GameTile;
