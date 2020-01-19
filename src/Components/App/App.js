import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Battleships from '../Battleships/Battleships';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Battleships />
    </div>
  );
}

export default App;
