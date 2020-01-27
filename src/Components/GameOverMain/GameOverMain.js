import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ScreenOverlay from '../ScreenOverlay/ScreenOverlay';

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
  boardGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: '400px',
    backgroundColor: 'rgba(61,61,68,1)',
  },
}));

const GameOverMain = props => {
  const classes = useStyles();
  const { players, winner } = props;

  const renderWinner = () => {
    console.log('RENDER WINNER');
    if (parseInt(winner, 10) === 0) {
      return (
        <div>
          <div>Victory!</div>
          <div>
            You've proven yourself worthy as a Captain. The fight was witnessed
            by most and those in transport now wish to elect you as leader once
            you arrive.
          </div>
        </div>
      );
    }
    if (parseInt(winner, 10) === 1) {
      return (
        <div>
          <div>Victory!</div>
          <div>
            Your ship is the last ship standing of the remaining fleet. Your
            pull yourself up off the floor and look out the (front window) of
            the ship. You see various body parts floating around in front of the
            hull. What as once horrifying screams of humans being immolated is
            now silent space. You somewhat find solace that their suffering has
            ended.
          </div>
          <div>
            {players[1].name}'s ship slowly approaches yours and a transmission
            begins being translated by your ship's AI.
          </div>
          <div>"Worthless scum! Enjoy the final moments of your life!"</div>
          <div>
            The pirate's ship is now aiming it's weapons at you, and you begin
            to see their laser cannons begin charging.
          </div>
          <div>
            A giant explosion takes place, yet you're alive. You're standing in
            a bright room with only a single door in the room. You're unsure
            why, but somehow you know that something, or someone, has given you
            another chance.
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Paper>
        <div className={classes.boardGrid}>
          <div>{renderWinner()}</div>
          <ScreenOverlay />
        </div>
      </Paper>
    </div>
  );
};

export default GameOverMain;
