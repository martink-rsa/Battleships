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
    // backgroundColor: 'rgba(255,255,255,0.8)',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '67px',
    width: '100%',
  }, // 214px x 47px
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
    // opacity: '0.7',
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
    // padding: '6px 12px',
    // border: '1px solid',
    lineHeight: 1.5,
    width: '214px',
    height: '52px',
    borderRadius: '0px',
    backgroundColor: 'transparent',
    '&:hover': {
      boxShadow: 'none',
      background: 'rgb(0,105,217)',
      background:
        'radial-gradient(circle, rgba(65,192,219,1) 0%, rgba(65,192,219,0.2278820375335121) 18%, rgba(65,192,219,0) 31%)',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const MainActionBar = props => {
  const classes = useStyles();
  const { buttonText, handleClick, isReady } = props;
  return (
    <Box className={classes.container}>
      {isReady ? (
        <MainButton
          variant="contained"
          // onClick={() => handleSelection(id)}
          onClick={handleClick}
        >
          <div className={classes.btnContainer}>{buttonText}</div>
        </MainButton>
      ) : (
        <MainButton
          variant="contained"
          // onClick={() => handleSelection(id)}
          onClick={handleClick}
          disabled
        >
          <div className={classes.btnContainerDisabled}>{buttonText}</div>
        </MainButton>
      )}
    </Box>
  );
};

export default MainActionBar;
