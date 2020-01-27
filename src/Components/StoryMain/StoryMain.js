import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ScreenOverlay from '../ScreenOverlay/ScreenOverlay';
import ArrowButtonController from '../ArrowButtonController/ArrowButtonController';

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
}));

const StoryMain = props => {
  const classes = useStyles();
  const { tempPlayers, audioClick2 } = props;
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const renderPage = currentPage => {
    if (currentPage === 0) {
      return (
        <div className={classes.textWrapper}>
          <div className={classes.textContainer}>
            {`It is year 2271. Earth lies in destruction.
            You, ${tempPlayers[0].name}, are captain of NG-S, a fleet of
            colonization ships on corse for a new home, planet Proxima Centauri, 4.243 light years away from earth.
            On board are most of the remaining humans.
            Your fleet is humanity's last hope to reestablish itself.`}
          </div>
          <div className={classes.textContainer}>
            {`Your fleet is in quadrant XPS-401-924, approximately 603,6 million km away
            from Proxima Centauri, when it is jumped by a fleet of pirates who were hiding
            behind an electrical storm. A transmission arrives from their
            Captain, ${tempPlayers[1].name}, a prestigious Xaaranthian pirate
            leader.`}
          </div>
        </div>
      );
    }
    if (currentPage === 1) {
      return (
        <div className={classes.textWrapper}>
          <div className={classes.textContainer}>
            Your onboard AI does short work of translating the message:{' '}
          </div>
          <div className={classes.textContainer}>
            <span className={classes.quote}>
              "Human scum! We have waited a very long time for this moment. This
              bounty will serve us for the next five generations!"
            </span>
          </div>
          <div className={classes.textContainer}>
            {`Not long after, the pirates begin firing upon your ship. You instruct the crew to man their positions.`}
          </div>
          <div className={classes.textContainer}>
            {`The fate of humanity now lies in your hands, Captain.`}
          </div>
        </div>
      );
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

export default StoryMain;
