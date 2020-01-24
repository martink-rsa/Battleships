import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hit from '../../Assets/Images/Tiles/hit.png';
import Miss from '../../Assets/Images/Tiles/miss.png';
import Fog from '../../Assets/Images/Tiles/fog.png';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  rotate: {
    transform: 'rotate(-90deg)',
  },
  hit: {
    backgroundImage: `url(${Hit})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  miss: {
    backgroundImage: `url(${Miss})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  fog: {
    backgroundImage: `url(${Fog})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
    '&:hover': {
      boxShadow: 'inset 0px 0px 0px 2px rgba(31,138,252,0.8)',
    },
  },
}));

const AttackGameTile = props => {
  const classes = useStyles();
  const { content, alignment, type, visible } = props;

  const getGameTile = tileType => {
    if (visible) {
      if (tileType === 'H' || tileType === 'S') {
        return <div className={classes.hit}></div>;
      } else if (tileType === 'X') {
        return <div className={classes.miss}></div>;
      }
    } else {
      return <div className={classes.fog}></div>;
    }
  };

  return getGameTile(content);
};

export default AttackGameTile;
