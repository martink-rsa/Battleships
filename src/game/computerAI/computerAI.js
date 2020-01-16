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
  // let _availableLocations = [];

  const getRandomCoords = (min, max) => genRandNum(min, max);

  const setAvailableLocations = (grid, shipLocations, shipAlignment) => {};

  const chooseCoords = gameboard => {
    const grid = gameboard.grid;
    let shipFound = _shipFound;
    let shipAlignment = _shipAlignment;
    const shipLocations = [..._shipLocations];
    const gridSize = gameboard.grid.length;
    let x;
    let y;
    let availableLocations = [];

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
    // _availableLocations = availableLocations;

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
    // Functions
    chooseCoords,
  };
};

export { ComputerAI };
