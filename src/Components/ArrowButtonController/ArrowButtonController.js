import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ArrowBtn from '../../Assets/Images/arrow-btn-normal.png';
import ArrowBtnDisabled from '../../Assets/Images/arrow-btn-disabled.png';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  container: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '50px',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '36px',
    width: '36px',
    backgroundImage: `url(${ArrowBtn})`,
  },
  btnContainerDisabled: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '36px',
    width: '36px',
    backgroundImage: `url(${ArrowBtnDisabled})`,
  },
  btnRotate: {
    transform: 'rotate(-180deg)',
  },
}));

const ArrowButton = withStyles({
  root: {
    margin: '0 0 0 10px',
    padding: '0px',
    minWidth: 'initial',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    // padding: '6px 12px',
    // border: '1px solid',
    lineHeight: 1.5,
    width: '36px',
    height: '36px',
    borderRadius: '0px',
    backgroundColor: 'transparent',

    '&:hover': {
      boxShadow: 'none',
      background: 'rgb(0,105,217)',
      background:
        'radial-gradient(circle, rgba(65,192,219,1) 0%, rgba(65,192,219,0.22) 18%, rgba(65,192,219,0) 31%)',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ArrowButtonController = props => {
  const classes = useStyles();
  const { changePage, pageIndex, maxPages, audioClick2 } = props;

  const triggerClick = direction => {
    let currentIndex = pageIndex;
    if (direction === 'down') {
      currentIndex -= 1;
    } else if (direction === 'up') {
      currentIndex += 1;
    }
    audioClick2.play();
    changePage(currentIndex);
  };

  const renderButton = () => {
    if (pageIndex === 0) {
      return (
        <React.Fragment>
          <ArrowButton variant="contained" disabled>
            <div
              className={`${classes.btnContainerDisabled} ${classes.btnRotate}`}
            >
              {null}
            </div>
          </ArrowButton>
          <ArrowButton variant="contained" onClick={() => triggerClick('up')}>
            <div className={`${classes.btnContainer}`}>{null}</div>
          </ArrowButton>
        </React.Fragment>
      );
    } else if (pageIndex === maxPages - 1) {
      return (
        <React.Fragment>
          <ArrowButton variant="contained" onClick={() => triggerClick('down')}>
            <div className={`${classes.btnContainer} ${classes.btnRotate}`}>
              {null}
            </div>
          </ArrowButton>
          <ArrowButton variant="contained" disabled>
            <div className={`${classes.btnContainerDisabled}`}>{null}</div>
          </ArrowButton>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <ArrowButton variant="contained" onClick={() => triggerClick('down')}>
            <div className={`${classes.btnContainer} ${classes.btnRotate}`}>
              {null}
            </div>
          </ArrowButton>
          <ArrowButton variant="contained" onClick={() => triggerClick('up')}>
            <div className={`${classes.btnContainer}`}>{null}</div>
          </ArrowButton>
        </React.Fragment>
      );
    }
  };

  return (
    <div>
      <div className={classes.container}>{renderButton()}</div>
    </div>
  );
};

export default ArrowButtonController;
