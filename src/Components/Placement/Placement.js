import React from 'react';
import Button from '@material-ui/core/Button';
import BoardPlacement from '../BoardPlacement/BoardPlacement';

const Placement = props => {
  const startGameplay = () => {
    console.log('START GAMEPLAY');
  };
  return (
    <div>
      {/* <h3>Placement</h3> */}
      <BoardPlacement gameboards={props.gameboards} players={props.players} />
      <Button variant="contained" onClick={startGameplay}>
        Go to Gameplay
      </Button>
    </div>
  );
};

export default Placement;
