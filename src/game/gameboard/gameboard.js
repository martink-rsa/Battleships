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
    // Generate an empty grid ('E' is an empty cell)
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
    let partIndex = 0;
    // Place the ship
    if (alignment === 'vertical') {
      for (let i = x; i < x + length; i += 1) {
        grid[i][y] = `${id}${partIndex}`;
        coords.push([i, y]);
        partIndex += 1;
      }
    } else if (alignment === 'horizontal') {
      for (let i = y; i < y + length; i += 1) {
        grid[x][i] = `${id}${partIndex}`;
        coords.push([x, i]);
        partIndex += 1;
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
    if (gridContent === 'X' || gridContent === 'H' || gridContent === 'S') {
      // Can't attack tile already attacked.
    } else if (gridContent === 'E') {
      // Empty tile attacked
      grid[x][y] = 'X';
    } else {
      const shipIndex = parseInt(gridContent.split(''), 10);
      // console.log(shipIndex);
      const shipObj = getShip(shipIndex);
      let attackIndex = -1;
      for (let i = 0; i < shipObj.coords.length; i += 1) {
        const shipCoordsX = shipObj.coords[i][0];
        const shipCoordsY = shipObj.coords[i][1];
        if (shipCoordsX === x && shipCoordsY === y) {
          attackIndex = i;
        }
      }

      if (attackIndex !== -1) {
        shipObj.ship.hit(attackIndex);
        // Set all coord contents to S if ship is sunk
        if (shipObj.ship.isSunk() === true) {
          for (let i = 0; i < shipObj.coords.length; i += 1) {
            grid[shipObj.coords[i][0]][shipObj.coords[i][1]] = 'S';
          }
        } else {
          grid[x][y] = 'H';
        }
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

export default Gameboard;
