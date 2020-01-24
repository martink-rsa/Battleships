import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ShipSelectorItem from '../ShipSelectorItem/ShipSelectorItem';
// import BackgroundI1 from './bg-i1.png';
import BackgroundI2 from '../../Assets/Images/bg-i2.png';
import BtnS3Selected from '../../Assets/Images/btn-style-3-selected.png';
import BtnS3Disabled from '../../Assets/Images/btn-style-3-disabled.png';

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
  wrapper: {
    // background: 'red',
    display: 'flex',
    justifyContent: 'center',
    height: '195px',
    backgroundImage: `url(${BackgroundI2})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
  },
  container: {
    height: '100%',
    width: '100%',
    // width: '300px',
  },
  title: {
    fontSize: '1rem',
  },
  shipsContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '162px',
    height: '52px',
    // backgroundImage: `url(${BtnNormal})`,
    backgroundImage: `url(${BtnS3Selected})`,
    backgroundPosition: 'center top',
  },
  buttonContainerDisabled: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '162px',
    height: '52px',
    // backgroundImage: `url(${BtnNormal})`,
    backgroundImage: `url(${BtnS3Disabled})`,
    backgroundPosition: 'center top',
  },
}));

const AlignmentButton = withStyles({
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
    width: '162px',
    height: '52px',
    borderRadius: '0px',
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

const ShipSelector = props => {
  const classes = useStyles();

  const {
    shipItems,
    handleSelection,
    selectedIndex,
    changeAlignment,
    alignment,
  } = props;
  // const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>
          <AlignmentButton onClick={() => changeAlignment('vertical')}>
            {alignment === 'vertical' ? (
              <div className={classes.buttonContainer}>
                <SwapVertIcon />
              </div>
            ) : (
              <div className={classes.buttonContainerDisabled}>
                <SwapVertIcon />
              </div>
            )}
          </AlignmentButton>
          <AlignmentButton onClick={() => changeAlignment('horizontal')}>
            {alignment === 'horizontal' ? (
              <div className={classes.buttonContainer}>
                <SwapHorizIcon />
              </div>
            ) : (
              <div className={classes.buttonContainerDisabled}>
                <SwapHorizIcon />
              </div>
            )}
          </AlignmentButton>
        </div>
        <div className={classes.shipsContainer}>
          {shipItems.map(item => {
            return (
              <ShipSelectorItem
                id={item.id}
                ship={item.ship}
                size={item.size}
                enabled={item.enabled}
                handleSelection={handleSelection}
                selectedIndex={selectedIndex}
                key={`ship_selector_item_${item.id}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShipSelector;
