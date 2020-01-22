import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    background: '#e0e0e0',
    width: '90px',
    border: '4px solid black',
    borderRadius: '3px',
  },
  shipContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  shipContainerDisabled: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    opacity: '0.7',
  },
  shipContainerSelected: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    background: 'red',
  },
  block: {
    height: '15px',
    width: '15px',
    boxSizing: 'border-box',
    borderRadius: '3px',
    // background: 'black',
    margin: '5px 2px 2px 5px',
    border: '3px solid black',
  },
}));

const SelectionButton = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    boxShadow: 'none',
    textTransform: 'none',
    padding: '0px',
    margin: '0px',
    minWidth: 'initial',
    height: '100%',
    width: '100%',
    borderRadius: '0px',
    '&:hover': {
      backgroundColor: '#0069d9',
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
  label: {
    height: '100%',
  },
})(Button);

const ShipSelectorItem = props => {
  const classes = useStyles();
  const { id, ship, size, handleSelection, enabled, selectedIndex } = props;
  const altTag = `${size} Block Ship`;

  const generateSelectionButton = () => {
    if (selectedIndex === id) {
      return (
        <SelectionButton
          variant="contained"
          onClick={() => handleSelection(id)}
        >
          <div className={classes.shipContainerSelected}>
            <img src={ship} alt={altTag} />
            <div className={classes.block} />
            <div>x{size}</div>
          </div>
        </SelectionButton>
      );
    }
    if (enabled === false) {
      return (
        <SelectionButton variant="contained" disabled>
          <div className={classes.shipContainerDisabled}>
            <img src={ship} alt={altTag} />
            <div className={classes.block} />
            <div>x{size}</div>
          </div>
        </SelectionButton>
      );
    }
    return (
      <SelectionButton variant="contained" onClick={() => handleSelection(id)}>
        <div className={classes.shipContainer}>
          <img src={ship} alt={altTag} />
          <div className={classes.block} />
          <div>x{size}</div>
        </div>
      </SelectionButton>
    );
  };

  return <div className={classes.container}>{generateSelectionButton()}</div>;
};

export default ShipSelectorItem;

ShipSelectorItem.propTypes = {
  id: PropTypes.number.isRequired,
  ship: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  handleSelection: PropTypes.func.isRequired,
  enabled: PropTypes.bool.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};
