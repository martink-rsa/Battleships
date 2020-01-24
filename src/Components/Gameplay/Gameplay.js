import React from 'react';
import AttackMain from '../AttackMain/AttackMain';
import DefendMain from '../DefendMain/DefendMain';

const Gameplay = props => {
  const {
    gameboards,
    setGameboards,
    players,
    currentTurn,
    setCurrentTurn,
    currentCoords,
    setCurrentCoords,
  } = props;

  const endTurn = () => {
    if (currentTurn === 0) {
      setCurrentTurn(1);
    } else if (currentTurn === 1) {
      setCurrentTurn(0);
    }
  };

  const handleAttack = () => {
    let attacker;
    let defender;
    if (currentTurn === 0) {
      attacker = 0;
      defender = 1;
    } else if (currentTurn === 1) {
      attacker = 0;
      defender = 1;
    }
    if (currentTurn === 0) {
      players[attacker].makeAttack(gameboards[defender], currentCoords);
    } else if (currentTurn === 1) {
      props.AI.performAIAttack(gameboards[0]);
    }
    if (gameboards[defender].allShipsSunk() === true) {
      props.setWinner(attacker);
      props.changeGameState('gameover');
    } else {
      setCurrentCoords([-1, -1]);
      setTimeout(() => endTurn(), 2000);
    }
  };

  return (
    <div>
      {currentTurn === 0 ? (
        <AttackMain
          gameboards={gameboards}
          setGameboards={setGameboards}
          players={players}
          currentTurn={currentTurn}
          setCurrentTurn={setCurrentTurn}
          handleAttack={handleAttack}
          currentCoords={currentCoords}
          setCurrentCoords={setCurrentCoords}
        />
      ) : (
        <DefendMain
          gameboards={gameboards}
          setGameboards={setGameboards}
          players={players}
          currentTurn={currentTurn}
          setCurrentTurn={setCurrentTurn}
          handleAttack={handleAttack}
        />
      )}
    </div>
  );
};

export default Gameplay;
