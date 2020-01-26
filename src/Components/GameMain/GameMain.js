import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Gameplay from '../Gameplay/Gameplay';
import PlayerSelection from '../PlayerSelection/PlayerSelection';
import Placement from '../Placement/Placement';
import Intro from '../Intro/Intro';
import GameOver from '../GameOver/GameOver';
import Player from '../../game/player/player';
import Gameboard from '../../game/gameboard/gameboard';
import ComputerAI from '../../game/computerAI/computerAI';
import UIfx from 'uifx';
import AudioClick1 from '../../Assets/Sounds/click1.wav';
import AudioClick2 from '../../Assets/Sounds/click2.wav';

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
    justifyContent: 'flex-start',
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
    // background: 'rgba(255,255,255,0.1)',
  },
}));

const audioClick1 = new UIfx(AudioClick1, {
  volume: 0.9, // number between 0.0 ~ 1.0
  throttleMs: 100,
});
const audioClick2 = new UIfx(AudioClick2, {
  volume: 0.9, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

const GameMain = props => {
  const classes = useStyles();
  const [gameState, setGameState] = useState('intro');
  const [players, setPlayers] = useState([]);
  const [gameboards, setGameboards] = useState([]);
  const [computerPlaced, setComputerPlaced] = useState(false);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [currentCoords, setCurrentCoords] = useState([]);
  const [AI, setAI] = useState(ComputerAI(1));
  const [winner, setWinner] = useState(1);

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
      const { name, type, theme, color } = currentPlayer;
      const newPlayer = Player(id, name, type, theme, color);
      newPlayers.push(newPlayer);
      // Creating boards
      const newGameboard = Gameboard(id, boardSize);
      newGameboards.push(newGameboard);
    }
    setPlayers(newPlayers);
    setGameboards(newGameboards);
    changeGameState('placement');
  };

  const resetGame = () => {
    changeGameState('playerSelection');
  };

  const startGameplay = () => {
    changeGameState('gameplay');
  };

  const renderGameState = currentGameState => {
    switch (currentGameState) {
      case 'intro':
        return (
          <Intro changeGameState={changeGameState} audioClick1={audioClick1} />
        );
      case 'playerSelection':
        return (
          <PlayerSelection
            changeGameState={changeGameState}
            startNewGame={startNewGame}
            audioClick1={audioClick1}
          />
        );
      case 'placement':
        return (
          <Placement
            gameboards={gameboards}
            setGameboards={setGameboards}
            players={players}
            startGameplay={startGameplay}
            computerPlaced={computerPlaced}
            setComputerPlaced={setComputerPlaced}
            audioClick1={audioClick1}
            audioClick2={audioClick2}
          />
        );
      case 'gameplay':
        return (
          <Gameplay
            gameboards={gameboards}
            setGameboards={setGameboards}
            players={players}
            currentTurn={currentTurn}
            changeGameState={changeGameState}
            setCurrentTurn={setCurrentTurn}
            currentCoords={currentCoords}
            setCurrentCoords={setCurrentCoords}
            AI={AI}
            audioClick1={audioClick1}
            audioClick2={audioClick2}
          />
        );
      case 'gameover':
        return (
          <GameOver
            changeGameState={changeGameState}
            players={players}
            winner={winner}
            resetGame={resetGame}
            audioClick1={audioClick1}
          />
        );
      default:
        throw new Error('Error: Incorrect game state passed');
    }
    //
  };

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.mainContainer}>{renderGameState(gameState)}</div>
    </div>
  );
};

export default GameMain;
