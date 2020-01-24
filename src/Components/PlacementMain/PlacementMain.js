import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PlacementBoard from '../PlacementBoard/PlacementBoard';
import MainActionBar from '../MainActionBar/MainActionBar';
import ShipSelector from '../ShipSelector/ShipSelector';
import Ship from '../../game/ship/ship';
import Ship0Selector from '../../Assets/Images/selection_0.png';
import Ship1Selector from '../../Assets/Images/selection_1.png';
import Ship2Selector from '../../Assets/Images/selection_2.png';
import Ship3Selector from '../../Assets/Images/selection_3.png';
import { genRandNum } from '../../game/utility/utility';

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
}));

const PlacementMain = props => {
  const classes = useStyles();
  const [placementStates, setPlacementStates] = useState({
    isStillPlacing: true,
    selectedIndex: 0,
    shipItems: [
      { id: 0, ship: Ship0Selector, size: 5, enabled: true },
      { id: 1, ship: Ship1Selector, size: 4, enabled: true },
      { id: 2, ship: Ship2Selector, size: 3, enabled: true },
      { id: 3, ship: Ship3Selector, size: 2, enabled: true },
    ],
  });
  const [alignment, setAlignment] = useState('vertical');

  const {
    gameboards,
    setGameboards,
    computerPlaced,
    setComputerPlaced,
  } = props;

  // See which ships are available to select for
  //    ship placement
  const findAvailableShips = () => {
    for (let i = 0; i < placementStates.hipItems.length; i += 1) {
      if (placementStates.shipItems[i].enabled === true) {
        return placementStates.shipItems[i].id;
      }
    }
    return -1;
  };

  const handleBoardClick = e => {
    const { isStillPlacing, selectedIndex, shipItems } = placementStates;
    if (isStillPlacing) {
      const x = parseInt(e.currentTarget.value.split(' ')[0], 10);
      const y = parseInt(e.currentTarget.value.split(' ')[1], 10);
      const playerGameboard = gameboards[0];
      const newShip = Ship(
        selectedIndex,
        shipItems[selectedIndex].size,
        [],
        false,
        alignment,
      );
      // ADD A CHECK HERE TO SEE IF ALL SHIPS HAVE BEEN PLACED
      if (playerGameboard.isLegalPlacement(newShip, [x, y])) {
        playerGameboard.placeShip(newShip, [x, y]);
        // Disable the ship placement button
        setGameboards(prevState => {
          const tempGameboards = [...prevState];
          tempGameboards[0] = { ...playerGameboard };
          return tempGameboards;
        });

        setPlacementStates(prevState => {
          const tempState = { ...prevState };
          let tempSelectedIndex = -1;
          let enabledArray = [];
          tempState.shipItems[selectedIndex].enabled = false;

          for (let i = 0; i < tempState.shipItems.length; i += 1) {
            if (tempState.shipItems[i].enabled === true) {
              enabledArray.push(i);
            }
          }
          if (enabledArray.length > 0) {
            tempSelectedIndex = enabledArray[0];
          } else {
            tempState.isStillPlacing = false;
          }
          tempState.selectedIndex = tempSelectedIndex;
          return tempState;
        });
      }
    }
  };

  const changeAlignment = newAlignment => {
    if (newAlignment === 'vertical') {
      setAlignment('vertical');
    } else {
      setAlignment('horizontal');
    }
  };

  const generateRandomShip = index => {
    let x = genRandNum(0, 7);
    let y = genRandNum(0, 7);
    let alignment;
    let size;
    if (genRandNum(0, 1) === 0) {
      alignment = 'vertical';
    } else {
      alignment = 'horizontal';
    }
    if (index === 0) {
      size = 5;
    } else if (index === 1) {
      size = 4;
    } else if (index === 2) {
      size = 3;
    } else if (index === 3) {
      size = 2;
    }
    const ship = Ship(index, size, [], false, alignment);
    return { ship, x, y };
  };

  const createComputerShips = gameboard => {
    if (computerPlaced === false) {
      setComputerPlaced(true);
      for (let i = 0; i < 4; i += 1) {
        let randomShipObj = generateRandomShip(i);
        let isLegal = gameboard.isLegalPlacement(randomShipObj.ship, [
          randomShipObj.x,
          randomShipObj.y,
        ]);
        while (!isLegal) {
          randomShipObj = generateRandomShip(i);
          isLegal = gameboard.isLegalPlacement(randomShipObj.ship, [
            randomShipObj.x,
            randomShipObj.y,
          ]);
        }
        gameboard.placeShip(randomShipObj.ship, [
          randomShipObj.x,
          randomShipObj.y,
        ]);
      }
    }
  };

  createComputerShips(gameboards[1]);

  const handleSelection = id => {
    setPlacementStates(prevState => {
      const tempState = { ...prevState };
      tempState.selectedIndex = id;
      return tempState;
    });
  };

  return (
    <div>
      <Paper>
        <PlacementBoard
          type="placement"
          // grid={gameboards[0].grid}
          gameboards={gameboards}
          boardIndex={0}
          handleBoardClick={handleBoardClick}
        />
      </Paper>
      <MainActionBar
        buttonText="Play"
        handleClick={props.startGameplay}
        isReady={!placementStates.isStillPlacing}
      />
      <ShipSelector
        changeAlignment={changeAlignment}
        alignment={alignment}
        shipItems={placementStates.shipItems}
        handleSelection={handleSelection}
        selectedIndex={placementStates.selectedIndex}
      />
    </div>
  );
};

export default PlacementMain;
