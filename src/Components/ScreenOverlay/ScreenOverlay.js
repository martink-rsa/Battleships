import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Overlay from '../../Assets/Images/screen-overlay.png';

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
  },
  container: {
    position: 'absolute',
    height: '401px',
    width: '400px',
    backgroundImage: `url(${Overlay})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    pointerEvents: 'none',
    background: 'transparent',
  },
}));

const ScreenOverlay = props => {
  const classes = useStyles();
  return <Box className={classes.container}></Box>;
};

export default ScreenOverlay;
