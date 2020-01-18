/* eslint-disable wrap-iife */
/* eslint-disable arrow-parens */
/* eslint-disable no-underscore-dangle */

const Player = (id, playerType, theme, color) => {
  const _id = id;
  const _playerType = playerType;
  const _theme = theme;
  const _color = color;
  let _playTurn = false;
  let _attacksMade = [];

  const makeAttack = (gameboard, coords) => {
    const attacksMade = [..._attacksMade];
    gameboard.receiveAttack(coords);
    attacksMade.push(coords);
    _attacksMade = [...attacksMade];
  };

  const startTurn = () => {
    _playTurn = true;
  };

  const endTurn = () => {
    _playTurn = false;
  };

  // const endT

  return {
    // Variables
    get id() {
      return _id;
    },
    get playerType() {
      return _playerType;
    },
    get theme() {
      return _theme;
    },
    get color() {
      return _color;
    },
    get attacksMade() {
      return _attacksMade;
    },
    get playTurn() {
      return _playTurn;
    },
    // Functions
    makeAttack,
    startTurn,
    endTurn,
  };
};

export default Player;
