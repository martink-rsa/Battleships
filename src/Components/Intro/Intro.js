import React from 'react';
import Paper from '@material-ui/core/Paper';
import IntroMain from '../IntroMain/IntroMain';
import MainActionBar from '../MainActionBar/MainActionBar';

const Intro = props => {
  const { changeGameState, audioClick1 } = props;
  const nextGameState = () => {
    changeGameState('playerSelection');
  };

  return (
    <div>
      <Paper>
        <IntroMain />
      </Paper>
      <MainActionBar
        buttonText="Start"
        handleClick={nextGameState}
        isReady
        audioClick1={audioClick1}
      />
    </div>
  );
};

export default Intro;
