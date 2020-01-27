import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Battleships from '../Battleships/Battleships';
import Loading from '../Loading/Loading';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'hidden',
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
}));

function App() {
  const classes = useStyles();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  });

  return (
    <div className={classes.root}>
      {isLoaded ? <Battleships /> : <Loading />}
    </div>
  );
}

export default App;
