import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ScreenOverlay from '../ScreenOverlay/ScreenOverlay';
import ArrowButtonController from '../ArrowButtonController/ArrowButtonController';
import Victory from '../../Assets/Images/Victory.png';
import Defeat from '../../Assets/Images/Defeat.png';

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
    flexDirection: 'column',
    height: '400px',
    width: '400px',
    backgroundColor: 'rgba(61,61,68,1)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 30px 5px 30px',
    height: '100%',
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  textContainer: {
    textAlign: 'center',
    textSize: '9px',
    paddingBottom: '10px',
    color: 'rgba(65,192,219,1)',
  },
  arrowBtnContainer: {
    display: 'flex',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    height: '50px',
  },
  quote: {
    fontStyle: 'italic',
  },
  victory: {
    width: '137px',
    height: '40px',
  },
  defeat: {
    width: '125px',
    height: '40px',
  },
}));

const GameOverMain = props => {
  const classes = useStyles();
  const { players, winner, audioClick2 } = props;
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const playerName = players[0].name;
  const playerFirstName = playerName.split(' ');

  const renderPage = currentPage => {
    // Victory
    if (parseInt(winner, 10) === 0) {
      if (currentPage === 0) {
        return (
          <div className={classes.textWrapper}>
            <img className={classes.victory} src={Victory} alt="Victory" />
            <div className={classes.textContainer}>
              An ion cannon blast from your fleet slices directly through the
              hull of the last pirate's ships, which triggers a chain reaction
              of explosions, leaving very little remaining of the ship.
            </div>
            <div className={classes.textContainer}>
              You begin to hear chanting from the crew and from the ships
              communication systems:{' '}
              <span className={classes.quote}>
                {playerFirstName[0]}! {playerFirstName[0]}! {playerFirstName[0]}
                !
              </span>
            </div>
            <div className={classes.textContainer}>
              You've proven yourself worthy as a Captain. The fight was
              witnessed by most and you have gained the trust of those in
              transport. Some begin speaking of electing you as leader once you
              arrive at Proxima Centauri.
            </div>
          </div>
        );
      }
      if (currentPage === 1) {
        return (
          <div className={classes.textWrapper}>
            <div className={classes.textContainer}>
              You mourn the lives of those lost in the battle while repairs are
              underway and the pirate ships are salvaged. Once you are ready,
              you begin to head off again in the direction of Proxima Centauri.
            </div>
            <div className={classes.textContainer}>
              You mourn the lives of those lost in the battle while repairs are
              underway and the pirate ships are salvaged.
            </div>
            <div className={classes.textContainer}>
              Once you are ready, you begin to head off again in the direction
              of Proxima Centauri. You are feeling confident that you and what
              remains of the fleet will make the journey there.
            </div>
          </div>
        );
      }
      // Defeat
    } else if (parseInt(winner, 10) === 1) {
      if (currentPage === 0) {
        return (
          <div className={classes.textWrapper}>
            <img className={classes.defeat} src={Defeat} alt="Defeat" />

            <div className={classes.textContainer}>
              Your ship is the last ship of your fleet barely intact. What as
              once horrifying screams of humans being immolated is now silent.
              You somewhat find solace that their suffering has ended.
            </div>
            <div className={classes.textContainer}>
              You pull yourself up off the floor and look out the front window
              of the ship and see various human body parts floating around in
              front of the hull.
            </div>
            <div className={classes.textContainer}>
              {players[1].name}'s ship slowly approaches yours and a
              transmission begins being translated by your ship's AI.
            </div>
          </div>
        );
      }
      if (currentPage === 1) {
        return (
          <div className={classes.textWrapper}>
            <div className={classes.textContainer}>
              <span className={classes.quote}>
                "Worthless scum! Enjoy the final moments of your life!"
              </span>
            </div>
            <div className={classes.textContainer}>
              {`The pirate's ship is now aiming it's weapons at you, and you begin
              to see their laser cannons begin charging.`}
            </div>
            <div className={classes.textContainer}>
              {`A giant explosion takes place... yet you're still alive.`}
            </div>
            <div className={classes.textContainer}>
              {`You find yourself standing in a bright room with only a single door in the room. You're
              unsure why, but somehow you know that something, or someone, has
              given you another chance.`}
            </div>
          </div>
        );
      }
    }
  };

  const changePage = newPageIndex => {
    setCurrentPageIndex(newPageIndex);
  };

  return (
    <div>
      <Paper>
        <div className={classes.boardGrid}>
          <div className={classes.container}>
            {renderPage(currentPageIndex)}
            <div className={classes.arrowBtnContainer}>
              <ArrowButtonController
                changePage={changePage}
                pageIndex={currentPageIndex}
                maxPages={2}
                audioClick2={audioClick2}
              />
            </div>
          </div>
          <ScreenOverlay />
        </div>
      </Paper>
    </div>
  );
};

export default GameOverMain;
