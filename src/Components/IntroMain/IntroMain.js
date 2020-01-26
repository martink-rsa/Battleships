import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ScreenOverlay from '../ScreenOverlay/ScreenOverlay';
import Logo from '../../Assets/Images/logo.png';

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: '400px',
    backgroundColor: 'rgba(61,61,68,1)',
  },
}));

const IntroMain = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper>
        <div className={classes.boardGrid}>
          <img src={Logo} alt="Logo" />
          <ScreenOverlay />
        </div>
      </Paper>
    </div>
  );
};

export default IntroMain;
