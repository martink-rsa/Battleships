import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hit from '../../Assets/Images/Tiles/hit.png';
import Miss from '../../Assets/Images/Tiles/miss.png';
import Sunk from '../../Assets/Images/Tiles/sunk.png';
import Fog from '../../Assets/Images/Tiles/fog.png';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  base: {
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
    outline: '1px solid rgba(0,0,0,0.2)',
  },
  selected: {
    background: 'rgba(65, 192, 219, .8)',
    boxShadow: 'inset 0px 0px 0px 2px rgba(56,143,166,1)',
    borderRadius: '5px',
  },
  rotate: {
    transform: 'rotate(-90deg)',
  },
  hit: {
    backgroundImage: `url(${Hit})`,
  },
  sunk: {
    backgroundImage: `url(${Sunk})`,
  },
  miss: {
    backgroundImage: `url(${Miss})`,
  },
  fog: {
    backgroundImage: `url(${Fog})`,
    '&:hover': {
      boxShadow: 'inset 0px 0px 0px 2px rgba(65, 192, 219, .5)',
      borderRadius: '5px',
    },
  },
}));

const AttackGameTile = props => {
  const classes = useStyles();
  const { content, visible, selected } = props;

  let preparedClasses;
  if (selected) {
    preparedClasses = `${classes.base} ${classes.selected}`;
  } else {
    preparedClasses = `${classes.base}`;
  }
  const getGameTile = tileType => {
    if (visible) {
      if (tileType === 'H') {
        return <div className={`${classes.base} ${classes.hit}`}></div>;
      } else if (tileType === 'S') {
        return <div className={`${classes.base} ${classes.sunk}`}></div>;
      } else if (tileType === 'X') {
        return <div className={`${classes.base} ${classes.miss}`}></div>;
      }
    } else {
      return <div className={`${preparedClasses} ${classes.fog}`}></div>;
    }
  };

  return getGameTile(content);
};

export default AttackGameTile;
