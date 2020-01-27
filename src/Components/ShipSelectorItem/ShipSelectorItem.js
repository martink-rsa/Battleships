import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BtnNormal from '../../Assets/Images/btn-style-2-normal3.png';
import BtnSelected from '../../Assets/Images/btn-style-2-selected.png';
import BtnDisabled from '../../Assets/Images/btn-style-2-disabled.png';

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
    width: '79px',
    height: '103px',
    margin: '0 2px',
    backgroundColor: 'transparent',
  },
  shipContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '103px',
    width: '100%',
    backgroundImage: `url(${BtnNormal})`,
  },
  shipContainerDisabled: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '103px',
    width: '100%',
    backgroundImage: `url(${BtnDisabled})`,
  },
  shipContainerSelected: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '103px',
    width: '100%',
    backgroundImage: `url(${BtnSelected})`,
  },
}));

const SelectionButton = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    boxShadow: 'none',
    textTransform: 'none',
    padding: '0px',
    margin: '0px',
    minWidth: 'initial',
    height: '100%',
    width: '100%',
    borderRadius: '0px',
    backgroundColor: 'transparent',
    '&:hover': {
      background:
        'radial-gradient(circle, rgba(65,192,219,1) 0%, rgba(65,192,219,0) 70%)',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      borderColor: '#005cbf',
    },
    '&:focus': {},
  },
  label: {
    height: '100%',
    backgroundColor: 'transparent',
  },
  disabled: {
    backgroundColor: 'transparent',
  },
  contained: {
    backgroundColor: 'transparent',
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
            <div>x{size}</div>
          </div>
        </SelectionButton>
      );
    }
    return (
      <SelectionButton variant="contained" onClick={() => handleSelection(id)}>
        <div className={classes.shipContainer}>
          <img src={ship} alt={altTag} />
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
