import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Loading.css';
import Logo from '../../Assets/Images/logo.png';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    color: 'rgba(65,192,219,1)',
    background: '#282c34',
  },
  wrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <img src={Logo} alt="Logo" />
          <div className={'loader'}>Loading...</div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
