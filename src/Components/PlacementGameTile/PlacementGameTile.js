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
  rotate: {
    transform: 'rotate(-90deg)',
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
  ship10: {
    backgroundImage: `url(${Ship10})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  ship11: {
    backgroundImage: `url(${Ship11})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  ship12: {
    backgroundImage: `url(${Ship12})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  ship13: {
    backgroundImage: `url(${Ship13})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  ship20: {
    backgroundImage: `url(${Ship20})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  ship21: {
    backgroundImage: `url(${Ship21})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  ship22: {
    backgroundImage: `url(${Ship22})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  ship30: {
    backgroundImage: `url(${Ship30})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
  ship31: {
    backgroundImage: `url(${Ship31})`,
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '50px',
  },
}));

const PlacementGameTile = props => {
  const classes = useStyles();
  const { content, alignment, type } = props;
  const getGameTile = tileType => {
    const shipTypeIndex = tileType.split('')[0];
    const shipPartIndex = tileType.split('')[1];
    const class1 = classes[`ship${shipTypeIndex}${shipPartIndex}`];
    if (alignment === 'horizontal') {
      return <span className={`${class1} ${classes.rotate}`} />;
    } else {
      return <span className={`${class1}`} />;
    }
  };

  return getGameTile(content);
};

export default PlacementGameTile;
