import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import { Howl } from 'howler';
import Battleships from '../Battleships/Battleships';
import Loading from '../Loading/Loading';
import AudioSoundscape from '../../Assets/Sounds/audioSoundscape.mp3';
import AudioClick1 from '../../Assets/Sounds/click1.wav';
import AudioClick2 from '../../Assets/Sounds/click2.wav';
import AudioHit from '../../Assets/Sounds/hit.wav';
import AudioSunk from '../../Assets/Sounds/sunk.wav';

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

const audioSoundscape = new Howl({
  src: [AudioSoundscape],
  loop: true,
});

const audioClick1 = new Howl({
  src: [AudioClick1],
});
const audioClick2 = new Howl({
  src: [AudioClick2],
});
const audioHit = new Howl({
  src: [AudioHit],
  volume: 0.2,
});
const audioSunk = new Howl({
  src: [AudioSunk],
  volume: 0.3,
});

function App() {
  const classes = useStyles();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={classes.root}>
      {isLoaded ? (
        <Battleships
          audioSoundscape={audioSoundscape}
          audioClick1={audioClick1}
          audioClick2={audioClick2}
          audioHit={audioHit}
          audioSunk={audioSunk}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
