import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
  container: {
    height: '37px',
  },
}));

const MainActionBar = props => {
  const classes = useStyles();
  const { buttonText, handleClick } = props;
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        {buttonText}
      </Button>
    </div>
  );
};

export default MainActionBar;
