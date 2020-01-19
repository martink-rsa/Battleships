import React from 'react';
import Button from '@material-ui/core/Button';

const Intro = props => {
  return (
    <div>
      <h3>Intro</h3>
      <Button
        variant="contained"
        onClick={() => props.changeGameState('playerSelection')}
      >
        Play
      </Button>
    </div>
  );
};

export default Intro;
