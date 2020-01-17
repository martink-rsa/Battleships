/* eslint-disable wrap-iife */
/* eslint-disable arrow-parens */
/* eslint-disable no-underscore-dangle */
import { Gameboard } from '../gameboard/gameboard';
import { Player } from '../player/player';
import { genRandNum } from '../utility/utility';

const ComputerAI = id => {
  const _id = id;
  let _shipFound = false;
  let _shipLocations = [];
  let _shipAlignment = '';
  let _lastAttackMade = [];
  // let _availableLocations = [];

  const getRandomCoords = (min, max) => genRandNum(min, max);

  const getAlignment = gameboard => {
    const { grid } = gameboard;
    // Get the alignment of longest available ship that can be
    //    attacked. Return the alignment as well as the first
    //    coord of the ship
    let isFirstVertical = false;
    let isFirstHorizontal = false;
    let verticalCounter = 0;
    let horizontalCounter = 0;
    let verticalCoord = [];
    let horizontalCoord = [];
    let longestVertical = 0;
    let longestHorizontal = 0;
    let savedVerticalCoord = 0;
    let savedHorizontalCoord = 0;

    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid.length; j += 1) {
        if (grid[i][j] === 'H') {
          if (isFirstHorizontal === true) {
            isFirstHorizontal = false;
            horizontalCoord = [i, j];
          }
          horizontalCounter += 1;
        }
      }
      if (horizontalCounter > longestHorizontal) {
        longestHorizontal = horizontalCounter;
        savedHorizontalCoord = horizontalCoord;
      }
      horizontalCounter = 0;
      isFirstHorizontal = true;
    }
    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid.length; j += 1) {
        if (grid[j][i] === 'H') {
          if (isFirstVertical === true) {
            isFirstVertical = false;
            verticalCoord = [j, i];
          }
          verticalCounter += 1;
        }
      }
      if (verticalCounter > longestVertical) {
        longestVertical = verticalCounter;
        savedVerticalCoord = verticalCoord;
      }
      verticalCounter = 0;
      isFirstVertical = true;
    }
    if (longestVertical > longestHorizontal) {
      return ['vertical', savedVerticalCoord];
    }
    return ['horizontal', savedHorizontalCoord];
  };

  const setShipLocations = () => {};

  const getRandomAttack = gameboard => {
    let lastAttackMade = [..._lastAttackMade];
    const { grid } = gameboard;
    const gridSize = grid.length;
    let x = getRandomCoords(0, gridSize);
    let y = getRandomCoords(0, gridSize);
    // Ensure the grid cell's element is not already used
    while (grid[x][y] === 'X' || grid[x][y] === 'H' || grid[x][y] === 'S') {
      x = getRandomCoords(0, gridSize);
      y = getRandomCoords(0, gridSize);
    }
    lastAttackMade = [x, y];
    _lastAttackMade = [...lastAttackMade];

    return [x, y];
  };

  const getSearchAttack = (gameboard, baseCoords) => {
    // Perform a NWSE search attack to find other ship
    //    parts.
    const { grid } = gameboard;
    const x = baseCoords[0];
    const y = baseCoords[1];
    const gridSize = grid.length;
    // North/Top
    if (
      x > 0 &&
      grid[x - 1][y] !== 'X' &&
      grid[x - 1][y] !== 'H' &&
      grid[x - 1][y] !== 'S'
    ) {
      return [x - 1, y];
    }
    // West/Left
    if (
      y > 0 &&
      grid[x][y - 1] !== 'X' &&
      grid[x][y - 1] !== 'H' &&
      grid[x][y - 1] !== 'S'
    ) {
      return [x, y - 1];
    }
    // South/Bottom
    if (
      x < gridSize - 1 &&
      grid[x + 1][y] !== 'X' &&
      grid[x + 1][y] !== 'H' &&
      grid[x + 1][y] !== 'S'
    ) {
      return [x + 1, y];
    }
    // East/Right
    if (
      y < gridSize - 1 &&
      grid[x][y + 1] !== 'X' &&
      grid[x][y + 1] !== 'H' &&
      grid[x][y + 1] !== 'S'
    ) {
      return [x, y + 1];
    }
  };

  const setAvailableLocations = (
    baseCoords,
    grid,
    shipLocations,
    shipAlignment,
  ) => {
    const availableCoords = [];
    const x = baseCoords[0];
    const y = baseCoords[1];
    const gridSize = grid.length;
    // Top
    if (
      x > 0 &&
      grid[x - 1][y] !== 'X' &&
      grid[x - 1][y] !== 'H' &&
      grid[x - 1][y] !== 'S'
    ) {
      availableCoords.push([x - 1, y]);
    }
    // Left
    if (
      y > 0 &&
      grid[x][y - 1] !== 'X' &&
      grid[x][y - 1] !== 'H' &&
      grid[x][y - 1] !== 'S'
    ) {
      availableCoords.push([x, y - 1]);
    }
    // Bottom
    if (
      x < gridSize - 1 &&
      grid[x + 1][y] !== 'X' &&
      grid[x + 1][y] !== 'H' &&
      grid[x + 1][y] !== 'S'
    ) {
      availableCoords.push([x + 1, y]);
    }
    // Right
    if (
      y < gridSize - 1 &&
      grid[y + 1][y] !== 'X' &&
      grid[y + 1][y] !== 'H' &&
      grid[y + 1][y] !== 'S'
    ) {
      availableCoords.push([x, y + 1]);
    }
    return availableCoords;
  };

  const chooseCoords = gameboard => {
    const { grid } = gameboard;
    let shipFound = _shipFound;
    const shipAlignment = _shipAlignment;
    const shipLocations = [..._shipLocations];
    const gridSize = gameboard.grid.length;
    let x;
    let y;
    const availableLocations = [];

    if (!shipFound) {
      x = getRandomCoords(0, gridSize);
      y = getRandomCoords(0, gridSize);
      // Ensure the grid cell's element is not already used
      while (gameboard.grid[x][y] === 'X') {
        x = getRandomCoords(0, gridSize);
        y = getRandomCoords(0, gridSize);
      }
      if (gameboard.grid[x][y] !== 'E' && gameboard.grid[x][y] !== 'X') {
        shipFound = true;
        shipLocations.push([x, y]);
      }
      _shipFound = shipFound;
      _shipLocations = [...shipLocations];
    } else {
      availableLocations = setAvailableLocations(
        grid,
        shipLocations,
        shipAlignment,
      );
      const shipX = shipLocations[0][0];
      const shipY = shipLocations[0][1];
    }
    return [x, y];
  };

  return {
    // Variables
    get id() {
      return _id;
    },
    get shipFound() {
      return _shipFound;
    },
    set shipFound(boolIn) {
      _shipFound = boolIn;
    },
    get shipLocations() {
      return _shipLocations;
    },
    get shipAlignment() {
      return _shipAlignment;
    },
    set shipLocations(arrIn) {
      _shipLocations = arrIn;
    },
    get lastAttackMade() {
      return _lastAttackMade;
    },
    // Functions
    chooseCoords,
    setAvailableLocations,
    getAlignment,
    getRandomAttack,
    getSearchAttack,
  };
};

export { ComputerAI };
