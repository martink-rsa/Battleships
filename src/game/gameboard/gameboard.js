/* eslint-disable wrap-iife */
/* eslint-disable arrow-parens */
/* eslint-disable no-underscore-dangle */
import { Ship } from '../ship/ship';
// Gameboard should:
//
//    Variables:
//    grid: Array of the board
//    shotsTaken: Shots previously fired by player.
//
//    Functions:
//    placeShip(): Places a ship on the board, either vertically or horizontally
//    receiveAttack(): See General operation below
//
//    Input:
//    Take in a player so each player has their own board
//
//    General operation:
//    Should create a board which will be an array.
//    Should be able to place ships at specific coordinates
//    Should have 'receiveAttack' function that takes pairs of coords
//      AND determines whether or not attack hit ship
//      AND THEN sends the 'hit' function to the correct ship,
//      OR records coords of the missed shot
//
//    Output:
//    Should return the board and the player

const Gameboard = (playerID, size) => {
  const _playerID = playerID;
  const _size = size;
  let _ships = [];
  let _shipsCoords = [];
  let _grid = (function() {
    // Generate an empty grid
    const grid = [];
    for (let i = 0; i < size; i += 1) {
      grid[i] = [];
      for (let j = 0; j < size; j += 1) {
        grid[i][j] = 'E';
      }
    }
    return grid;
  })();

  const getShip = index => {
    const ships = [..._ships];
    const shipFound = ships.filter(ship => {
      if (ship.id === index) {
        return ship;
      }
    });
    return shipFound[0];
  };

  //  Place a ship onto the grid
  const placeShip = (ship, [x, y]) => {
    const grid = [..._grid];
    const ships = [..._ships];
    const { id, length, alignment } = ship;
    // Place the ship
    if (alignment === 'vertical') {
      for (let i = x; i < x + length; i += 1) {
        grid[i][y] = id;
      }
    } else if (alignment === 'horizontal') {
      for (let i = y; i < y + length; i += 1) {
        grid[x][i] = id;
      }
    }
    // Add the ship to the array of ships
    ships.push(ship);
    _ships = [...ships];
    _grid = [...grid];
  };

  // Check if the placement is legal so a ship can be
  //    put onto the board
  const isLegalPlacement = ({ length, alignment }, [x, y]) => {
    const grid = [..._grid];
    const gridSize = grid.length;
    if (alignment === 'vertical') {
      if (x + length > gridSize) {
        return false;
      }
      for (let i = x; i < x + length; i += 1) {
        if (grid[i][y] !== 'E') {
          return false;
        }
      }
    } else if (alignment === 'horizontal') {
      if (y + length > gridSize) {
        return false;
      }
      for (let i = y; i < y + length; i += 1) {
        if (grid[x][i] !== 'E') {
          return false;
        }
      }
    }
    return true;
  };

  // Handle an attack or a miss
  const receiveAttack = ([x, y]) => {};

  return {
    // Variables
    get playerID() {
      return _playerID;
    },
    get grid() {
      return _grid;
    },
    // Functions
    getShip,
    placeShip,
    isLegalPlacement,
    receiveAttack,
  };
};
const newShip = Ship(4, [], false, 'horizontal');
const gbt = Gameboard(1, 8);
gbt.placeShip(newShip, [0, 0]);
// console.log(gbt.grid[0][0]);
// console.log(gbt);
// console.log(gbt.grid);
/* console.log(gbt);
console.log('_gridTest');
console.log(gbt._gridTest); */

export { Gameboard };
