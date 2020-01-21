import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Water from '../../Assets/Images/Tiles/Water2.png';
import Ship00 from '../../Assets/Images/Tiles/0_0.png';
import Ship01 from '../../Assets/Images/Tiles/0_1.png';
import Ship02 from '../../Assets/Images/Tiles/0_2.png';
import Ship03 from '../../Assets/Images/Tiles/0_3.png';
import Ship04 from '../../Assets/Images/Tiles/0_4.png';

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
  ship00: {
    backgroundImage: `url(${Ship00})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  ship01: {
    backgroundImage: `url(${Ship01})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  ship02: {
    backgroundImage: `url(${Ship02})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  ship03: {
    backgroundImage: `url(${Ship03})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  ship04: {
    backgroundImage: `url(${Ship04})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
}));

const GameTile = props => {
  const classes = useStyles();
  const { content } = props;

  const getGameTile = tileType => {
    if (tileType === 'E') {
      // return <span className={classes.water} />;
      return <span></span>;
    } else {
      const shipTypeIndex = tileType.split('')[0];
      const shipPartIndex = tileType.split('')[1];
      console.log(shipTypeIndex);
      console.log(shipPartIndex);
      return (
        <span className={classes[`ship${shipTypeIndex}${shipPartIndex}`]} />
      );
    }
  };

  return getGameTile(content);
};

export default GameTile;
