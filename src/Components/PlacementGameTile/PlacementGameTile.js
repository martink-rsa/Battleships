import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Ship00 from '../../Assets/Images/Tiles/0_0.png';
import Ship01 from '../../Assets/Images/Tiles/0_1.png';
import Ship02 from '../../Assets/Images/Tiles/0_2.png';
import Ship03 from '../../Assets/Images/Tiles/0_3.png';
import Ship04 from '../../Assets/Images/Tiles/0_4.png';
import Ship10 from '../../Assets/Images/Tiles/1_0.png';
import Ship11 from '../../Assets/Images/Tiles/1_1.png';
import Ship12 from '../../Assets/Images/Tiles/1_2.png';
import Ship13 from '../../Assets/Images/Tiles/1_3.png';
import Ship20 from '../../Assets/Images/Tiles/2_0.png';
import Ship21 from '../../Assets/Images/Tiles/2_1.png';
import Ship22 from '../../Assets/Images/Tiles/2_2.png';
import Ship30 from '../../Assets/Images/Tiles/3_0.png';
import Ship31 from '../../Assets/Images/Tiles/3_1.png';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  shipBase: {
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  rotate: {
    transform: 'rotate(-90deg)',
  },
  ship00: {
    backgroundImage: `url(${Ship00})`,
  },
  ship01: {
    backgroundImage: `url(${Ship01})`,
  },
  ship02: {
    backgroundImage: `url(${Ship02})`,
  },
  ship03: {
    backgroundImage: `url(${Ship03})`,
  },
  ship04: {
    backgroundImage: `url(${Ship04})`,
  },
  ship10: {
    backgroundImage: `url(${Ship10})`,
  },
  ship11: {
    backgroundImage: `url(${Ship11})`,
  },
  ship12: {
    backgroundImage: `url(${Ship12})`,
  },
  ship13: {
    backgroundImage: `url(${Ship13})`,
  },
  ship20: {
    backgroundImage: `url(${Ship20})`,
  },
  ship21: {
    backgroundImage: `url(${Ship21})`,
  },
  ship22: {
    backgroundImage: `url(${Ship22})`,
  },
  ship30: {
    backgroundImage: `url(${Ship30})`,
  },
  ship31: {
    backgroundImage: `url(${Ship31})`,
  },
}));

const PlacementGameTile = props => {
  const classes = useStyles();
  const { content, alignment } = props;
  const getGameTile = tileType => {
    const shipTypeIndex = tileType.split('')[0];
    const shipPartIndex = tileType.split('')[1];
    const shipClass = classes[`ship${shipTypeIndex}${shipPartIndex}`];
    if (alignment === 'horizontal') {
      return (
        <span
          className={`${classes.shipBase} ${shipClass} ${classes.rotate}`}
        />
      );
    } else {
      return <span className={`${classes.shipBase} ${shipClass}`} />;
    }
  };

  return getGameTile(content);
};

export default PlacementGameTile;
