/* eslint-disable wrap-iife */
/* eslint-disable arrow-parens */
/* eslint-disable no-underscore-dangle */

// Gameboard factory function that generates a board
//    for each player.
// It will allow for:
//    Ship placement,
//    Storing ships
//    attacking grid
//    checking if all ships are sunken,

const Gameboard = (playerID, size) => {
  const _playerID = playerID;
  let _ships = [];
  let _grid = (() => {
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
    const shipFound = ships.filter(shipObj => {
      if (shipObj.ship.id === index) {
        return shipObj;
      }
    });
    return shipFound[0];
  };

  //  Place a ship onto the grid
  const placeShip = (ship, [x, y]) => {
    const grid = [..._grid];
    const ships = [..._ships];
    const { id, length, alignment } = ship;
    const coords = [];
    // Place the ship
    if (alignment === 'vertical') {
      for (let i = x; i < x + length; i += 1) {
        grid[i][y] = id;
        coords.push([i, y]);
      }
    } else if (alignment === 'horizontal') {
      for (let i = y; i < y + length; i += 1) {
        grid[x][i] = id;
        coords.push([x, i]);
      }
    }
    // Add the ship to the array of ships
    ships.push({ ship, coords });
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
  const receiveAttack = ([x, y]) => {
    const grid = [..._grid];
    const gridContent = grid[x][y];
    if (gridContent === 'X') {
      // Can't attack tile already attacked.
    } else if (gridContent === 'E') {
      // Empty tile attacked
      grid[x][y] = 'X';
    } else {
      const shipObj = getShip(gridContent);
      let attackIndex = -1;
      for (let i = 0; i < shipObj.coords.length; i += 1) {
        if (shipObj.coords[i][0] === x && shipObj.coords[i][1] === y) {
          attackIndex = i;
        }
      }
      // const attackIndex = shipObj.coords.indexOf([x, y]);
      if (attackIndex !== -1) {
        shipObj.ship.hit(attackIndex);
      } else {
        throw new Error('Ship tile attack index error');
      }
    }
  };

  const allShipsSunk = () => {
    const ships = [..._ships];
    for (let i = 0; i < ships.length; i += 1) {
      const shipObj = getShip(i);
      if (shipObj.ship.isSunken === false) {
        return false;
      }
    }
    return true;
  };

  return {
    // Variables
    get playerID() {
      return _playerID;
    },
    get grid() {
      return _grid;
    },
    get ships() {
      return _ships;
    },
    // Functions
    getShip,
    placeShip,
    isLegalPlacement,
    receiveAttack,
    allShipsSunk,
  };
};

export { Gameboard };
