import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ShipSelectorItem from '../ShipSelectorItem/ShipSelectorItem';
import Ship0Selector from '../../Assets/Images/selection_0.png';
import Ship1Selector from '../../Assets/Images/selection_1.png';
import Ship2Selector from '../../Assets/Images/selection_2.png';
import Ship3Selector from '../../Assets/Images/selection_3.png';

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
    height: '130px',
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

const ShipSelector = props => {
  const [shipItems, setShipItems] = useState([
    { id: 0, ship: Ship0Selector, size: 5, enabled: true },
    { id: 1, ship: Ship1Selector, size: 4, enabled: true },
    { id: 2, ship: Ship2Selector, size: 3, enabled: false },
    { id: 3, ship: Ship3Selector, size: 2, enabled: true },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const classes = useStyles();

  const handleSelection = id => {
    // setSelectedIndex(id);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>Ship Selection</div>
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
          {/* <ShipSelectorItem
            id="0"
            ship={Ship0Selector}
            size="5"
            handleSelection={handleSelection}
            enabled={true}
            selectedIndex={selectedIndex}
          />
          <ShipSelectorItem
            id="1"
            ship={Ship1Selector}
            size="4"
            handleSelection={handleSelection}
            enabled={true}
            selectedIndex={selectedIndex}
          />
          <ShipSelectorItem
            id="2"
            ship={Ship2Selector}
            size="3"
            handleSelection={handleSelection}
            enabled={false}
            selectedIndex={selectedIndex}
          />
          <ShipSelectorItem
            id="3"
            ship={Ship3Selector}
            size="2"
            handleSelection={handleSelection}
            enabled={true}
            selectedIndex={selectedIndex}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ShipSelector;
