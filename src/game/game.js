/* eslint-disable no-underscore-dangle */
import './ship/ship';
import './gameboard/gameboard';

const Game = players => {
  const _players = players;

  return {
    get players() {
      return _players;
    },
  };
};

export default Game;
