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
    flexDirection: 'column',
    height: '400px',
    width: '400px',
    backgroundColor: 'rgba(61,61,68,1)',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0 30px',
  },
  textContainer: {
    textAlign: 'center',
    textSize: '9px',
    paddingBottom: '10px',
    color: 'rgba(65,192,219,1)',
  },
}));

const StoryMain = props => {
  const classes = useStyles();
  const { tempPlayers } = props;

  return (
    <div>
      <Paper>
        <div className={classes.boardGrid}>
          <div className={classes.container}>
            <div className={classes.textContainer}>
              It is year 2271. Planet Earth lies mostly in ruins. You,{' '}
              {tempPlayers[0].name}, are captain of NEXT-GEN-XT12, a fleet of
              colonization ships destined for a new home. You are
              humanity&apos;s last hope to (?).
            </div>
            <div className={classes.textContainer}>
              Your fleet is in quadrient (?), approximatley 603,6 million km
              away from (?), when it is jumped by a fleet of pirates who were
              hiding behind an electrical storm. A transmission arrives from
              their Captain, {tempPlayers[1].name}, a prestigious Xaaranthian
              pirate leader.
            </div>
            <div className={classes.textContainer}>
              Your onboard AI does short work of translating the message: "Human
              scum! We have waited a very long time for this moment. This bounty
              will serve us for the next five generations!"
            </div>
            <div className={classes.textContainer}>
              Not long after, the pirates begin firing upon your ship. The fate
              of humanity now lies in your hands, Captain. God speed.
            </div>
          </div>
          <ScreenOverlay />
        </div>
      </Paper>
    </div>
  );
};

export default StoryMain;
