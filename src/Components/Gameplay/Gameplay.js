import React, { useState } from 'react';
import AttackMain from '../AttackMain/AttackMain';
import DefendMain from '../DefendMain/DefendMain';

const Gameplay = props => {
  const [playerAttackReady, setPlayerAttackReady] = useState(false);
  const [playerAttackMade, setPlayerAttackMade] = useState(false);
  const [computerAttackMade, setComputerAttackMade] = useState(false);

  const {
    setWinner,
    changeGameState,
    gameboards,
    setGameboards,
    players,
    currentTurn,
    setCurrentTurn,
    currentCoords,
    setCurrentCoords,
    audioClick1,
    audioClick2,
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
      setPlayerAttackMade(true);
      setPlayerAttackReady(false);
      setComputerAttackMade(false);
      players[attacker].makeAttack(gameboards[defender], currentCoords);
    } else if (currentTurn === 1) {
      setPlayerAttackMade(false);
      setComputerAttackMade(true);
      props.AI.performAIAttack(gameboards[0]);
    }
    if (gameboards[defender].allShipsSunk() === true) {
      setWinner(attacker);
      changeGameState('gameover');
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
          playerAttackReady={playerAttackReady}
          setPlayerAttackReady={setPlayerAttackReady}
          playerAttackMade={playerAttackMade}
          setPlayerAttackMade={setPlayerAttackMade}
          audioClick1={audioClick1}
          audioClick2={audioClick2}
        />
      ) : (
        <DefendMain
          gameboards={gameboards}
          setGameboards={setGameboards}
          players={players}
          currentTurn={currentTurn}
          setCurrentTurn={setCurrentTurn}
          handleAttack={handleAttack}
          computerAttackMade={computerAttackMade}
          setComputerAttackMade={computerAttackMade}
          audioClick1={audioClick1}
        />
      )}
    </div>
  );
};

export default Gameplay;
