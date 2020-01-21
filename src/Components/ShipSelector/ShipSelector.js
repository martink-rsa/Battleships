import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ShipSelectorItem from '../ShipSelectorItem/ShipSelectorItem';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

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
    display: 'flex',
    justifyContent: 'center',
    height: '170px',
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
    justifyContent: 'space-around',
  },
}));

const AlignmentButton = withStyles({
  root: {
    margin: '10px 8px',
    minWidth: 'initial',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ShipSelector = props => {
  const classes = useStyles();

  const { shipItems, handleSelection, selectedIndex, changeAlignment } = props;
  // const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>
          <AlignmentButton onClick={() => changeAlignment('vertical')}>
            <SwapVertIcon />
          </AlignmentButton>
          <AlignmentButton onClick={() => changeAlignment('horizontal')}>
            <SwapHorizIcon />
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
