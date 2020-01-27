import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import BtnNormal from '../../Assets/Images/btn-style-1-normal.png';
import BtnDisabled from '../../Assets/Images/btn-style-1-disabled.png';

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '67px',
    width: '100%',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '47px',
    width: '214px',
    backgroundImage: `url(${BtnNormal})`,
  },
  btnContainerDisabled: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '47px',
    width: '100%',
    backgroundImage: `url(${BtnDisabled})`,
  },
}));

const MainButton = withStyles({
  root: {
    margin: '0px',
    padding: '0px',
    minWidth: 'initial',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    lineHeight: 1.5,
    width: '214px',
    height: '52px',
    borderRadius: '0px',
    backgroundColor: 'transparent',
    '&:hover': {
      boxShadow: 'none',
      background:
        'radial-gradient(circle, rgba(65,192,219,1) 0%, rgba(65,192,219,0.2278820375335121) 18%, rgba(65,192,219,0) 31%)',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {},
  },
})(Button);

const MainActionBar = props => {
  const classes = useStyles();
  const { buttonText, handleClick, isReady, audioClick1 } = props;

  const triggerClick = () => {
    audioClick1.play();
    handleClick();
  };
  return (
    <Box className={classes.container}>
      {isReady ? (
        <MainButton variant="contained" onClick={triggerClick}>
          <div className={classes.btnContainer}>{buttonText}</div>
        </MainButton>
      ) : (
        <MainButton variant="contained" disabled>
          <div className={classes.btnContainerDisabled}>{buttonText}</div>
        </MainButton>
      )}
    </Box>
  );
};

export default MainActionBar;
