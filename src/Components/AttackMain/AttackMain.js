import React from 'react';
import Paper from '@material-ui/core/Paper';
import AttackBoard from '../AttackBoard/AttackBoard';
import MainActionBar from '../MainActionBar/MainActionBar';

const AttackMain = props => {
  const {
    gameboards,
    handleAttack,
    players,
    currentCoords,
    setCurrentCoords,
    playerAttackReady,
    setPlayerAttackReady,
    playerAttackMade,
    setPlayerAttackMade,
    audioClick1,
    audioClick2,
  } = props;

  const handleClick = coords => {
    const x = coords.split(' ')[0];
    const y = coords.split(' ')[1];
    if (gameboards[1].isLegalAttack([x, y])) {
      audioClick2.play();
      setCurrentCoords([x, y]);
      setPlayerAttackReady(true);
    }
  };

  return (
    <div>
      <Paper>
        <AttackBoard
          gameboards={gameboards}
          players={players}
          boardIndex={1}
          handleClick={handleClick}
          currentCoords={currentCoords}
          setPlayerAttackMade={setPlayerAttackMade}
        />
      </Paper>
      <MainActionBar
        buttonText="Attack"
        handleClick={handleAttack}
        audioClick1={audioClick1}
        isReady={playerAttackReady === true && playerAttackMade === false}
      />
    </div>
  );
};

export default AttackMain;
