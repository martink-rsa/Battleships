import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Gameplay from '../Gameplay/Gameplay';
import PlayerSelection from '../PlayerSelection/PlayerSelection';
import Placement from '../Placement/Placement';
import Intro from '../Intro/Intro';
import Player from '../../game/player/player';
import Gameboard from '../../game/gameboard/gameboard';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  /* paper: {
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(255,255,255,0.8)',
  }, */
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-begin',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    // background: 'rgba(255,255,255,0.1)',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
    width: '400px',
    background: 'rgba(255,255,255,0.1)',
  },
}));

const GameMain = props => {
  const classes = useStyles();
  const [gameState, setGameState] = useState('intro');
  const [players, setPlayers] = useState([]);
  const [gameboards, setGameboards] = useState([]);

  const changeGameState = newGameState => {
    setGameState(newGameState);
  };

  const startNewGame = playersIn => {
    const newPlayers = [];
    const newGameboards = [];
    const boardSize = 8;
    for (let i = 0; i < playersIn.length; i += 1) {
      // Creating players
      const currentPlayer = playersIn[i];
      const id = i;
      const { type, theme, color } = currentPlayer;
      const newPlayer = Player(id, type, theme, color);
      newPlayers.push(newPlayer);

      // Creating boards
      const newGameboard = Gameboard(id, boardSize);
      // console.log(newGameboard);
      newGameboards.push(newGameboard);
    }
    setPlayers(newPlayers);
    setGameboards(newGameboards);
    changeGameState('placement');
  };

  const startGameplay = () => {
    changeGameState('gameplay');
  };

  const handleAttack = coords => {
    console.log(coords);
  };

  const renderGameState = currentGameState => {
    switch (currentGameState) {
      case 'intro':
        return <Intro changeGameState={changeGameState} />;
      case 'playerSelection':
        return (
          <PlayerSelection
            changeGameState={changeGameState}
            startNewGame={startNewGame}
          />
        );
      case 'placement':
        return (
          <Placement
            gameboards={gameboards}
            setGameboards={setGameboards}
            players={players}
            startGameplay={startGameplay}
          />
        );
      case 'gameplay':
        return <Gameplay handleAttack={handleAttack} />;
      default:
        throw new Error('Error: Incorrect game state passed');
    }
    //
  };

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.mainContainer}>
        {/* <PlayerSelection /> */}
        {renderGameState(gameState)}
      </div>
    </div>
  );
};

export default GameMain;
