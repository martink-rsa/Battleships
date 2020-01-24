import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GameMain from '../GameMain/GameMain';
import BackgroundI1 from '../../Assets/Images/bg-i1.png';

const useStyles = makeStyles(() => ({
  root: {},
  container: {
    paddingTop: '61px',
    height: 'auto',
  },
  bg: {
    height: 'auto',
    backgroundImage: `url(${BackgroundI1})`,
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
