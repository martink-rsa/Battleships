import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GameMain from '../GameMain/GameMain';
import BackgroundT1 from './bg-t1.png';

const useStyles = makeStyles(() => ({
  root: {},
  container: {
    paddingTop: '86px',
    height: 'auto',
  },
  bg: {
    height: 'auto',
    backgroundImage: `url(${BackgroundT1})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
  },
}));

const Battleships = () => {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Container maxWidth="sm" className={classes.container}>
        <GameMain />
      </Container>
    </div>
  );
};

export default Battleships;
