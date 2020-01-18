/* eslint-disable wrap-iife */
/* eslint-disable arrow-parens */
/* eslint-disable no-underscore-dangle */
import { genRandNum } from '../utility/utility';

const ComputerAI = id => {
  const _id = id;
  let _shipFound = false;
  let _shipLocations = [];
  let _lastRandomAttackCoords = [];
  // let _availableLocations = [];

  // --- Utility

  const getRandomCoords = (min, max) => genRandNum(min, max);

  const getAlignment = gameboard => {
    const { grid } = gameboard;
    // Get the alignment of longest available ship that can be
    //    attacked. Return the alignment as well as the first
    //    and last coord of the longest ship that has been hit
    //    with attacks.
    let isFirstVertical = false;
    let isFirstHorizontal = false;
    let verticalCounter = 0;
    let horizontalCounter = 0;
    let verticalCoordStart = [];
    let horizontalCoordStart = [];
    let verticalCoordEnd = [];
    let horizontalCoordEnd = [];
    let longestVertical = 0;
    let longestHorizontal = 0;
    let savedVerticalCoordStart = 0;
    let savedVerticalCoordEnd = 0;
    let savedHorizontalCoordStart = 0;
    let savedHorizontalCoordEnd = 0;

    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid.length; j += 1) {
        if (grid[i][j] === 'H') {
          if (isFirstHorizontal === true) {
            isFirstHorizontal = false;
            horizontalCoordStart = [i, j];
          }
          horizontalCoordEnd = [i, j];
          horizontalCounter += 1;
        }
        if (grid[j][i] === 'H') {
          if (isFirstVertical === true) {
            isFirstVertical = false;
            verticalCoordStart = [j, i];
          }
          verticalCoordEnd = [j, i];
          verticalCounter += 1;
        }
      }
      if (horizontalCounter > longestHorizontal) {
        longestHorizontal = horizontalCounter;
        savedHorizontalCoordStart = horizontalCoordStart;
        savedHorizontalCoordEnd = horizontalCoordEnd;
      }
      if (verticalCounter > longestVertical) {
        longestVertical = verticalCounter;
        savedVerticalCoordStart = verticalCoordStart;
        savedVerticalCoordEnd = verticalCoordEnd;
      }
      horizontalCounter = 0;
      isFirstHorizontal = true;
      verticalCounter = 0;
      isFirstVertical = true;
    }
    if (longestVertical > longestHorizontal) {
      return ['vertical', savedVerticalCoordStart, savedVerticalCoordEnd];
    }
    return ['horizontal', savedHorizontalCoordStart, savedHorizontalCoordEnd];
  };

  const countGridContents = (gameboard, content) => {
    // Count the number of elements in a grid that was
    //    specified via parameter
    const { grid } = gameboard;
    const gridSize = grid.length;
    let count = 0;
    for (let i = 0; i < gridSize; i += 1) {
      for (let j = 0; j < gridSize; j += 1) {
        if (grid[i][j] === content) {
          count += 1;
        }
      }
    }
    return count;
  };

  // --- Attacks
  // 1. Random Attack:
  //        Random Attack will be performed as the base attack when there
  //        aren't ship cells visible to the AI. A Random Attack hitting
  //        a ship is needed before the other two attack types
  //        will be performed.
  // 2. Search Attack:
  //        Search Attack is an attack which will target North West South
  //        East cells directly adjacent to the block found by Random
  //        attack. Search Attacks will only take place when there is one
  //        visible ship cell.
  // 3. Alignment Attack:
  //        Alignment Attacks are made once there are 2 or more ship cells
  //        visible to the AI. When there are 2 or more cells, a
  //        direction/ship-direction can be found. The AI will then
  //        start attacking in either a vertical or horizontal direction.

  const getRandomAttack = gameboard => {
    // Perform a random attack when there aren't any ship parts
    //    that have been found by the AI
    let lastRandomAttackCoords = [..._lastRandomAttackCoords];
    const { grid } = gameboard;
    const gridSize = grid.length;
    let x = getRandomCoords(0, gridSize);
    let y = getRandomCoords(0, gridSize);
    // Ensure the grid cell's element is not already used
    while (grid[x][y] === 'X' || grid[x][y] === 'H' || grid[x][y] === 'S') {
      x = getRandomCoords(0, gridSize);
      y = getRandomCoords(0, gridSize);
    }
    lastRandomAttackCoords = [x, y];
    _lastRandomAttackCoords = [...lastRandomAttackCoords];
    return [x, y];
  };

  const getSearchAttack = (gameboard, baseCoords) => {
    // Perform a NWSE search attack to find other ship parts
    const { grid } = gameboard;
    const x = baseCoords[0];
    const y = baseCoords[1];
    const gridSize = grid.length;
    let attackCoords = [];
    // North/Top
    if (
      x > 0 &&
      grid[x - 1][y] !== 'X' &&
      grid[x - 1][y] !== 'H' &&
      grid[x - 1][y] !== 'S'
    ) {
      attackCoords = [x - 1, y];
      // East/Left
    } else if (
      y > 0 &&
      grid[x][y - 1] !== 'X' &&
      grid[x][y - 1] !== 'H' &&
      grid[x][y - 1] !== 'S'
    ) {
      attackCoords = [x, y - 1];
      // South/Bottom
    } else if (
      x < gridSize - 1 &&
      grid[x + 1][y] !== 'X' &&
      grid[x + 1][y] !== 'H' &&
      grid[x + 1][y] !== 'S'
    ) {
      attackCoords = [x + 1, y];
      // West/Right
    } else if (
      y < gridSize - 1 &&
      grid[x][y + 1] !== 'X' &&
      grid[x][y + 1] !== 'H' &&
      grid[x][y + 1] !== 'S'
    ) {
      attackCoords = [x, y + 1];
    }
    return attackCoords;
  };

  const getAlignmentAttack = (gameboard, alignment, startCoords, endCoords) => {
    // AI will try to follow a horizontal or vertical path so it
    //    can sink a ship, instead of going off in the wrong direction.
    const { grid } = gameboard;
    const gridLength = grid.length;
    const startX = startCoords[0];
    const startY = startCoords[1];
    const endX = endCoords[0];
    const endY = endCoords[1];
    let attackCoords = [];

    if (alignment === 'vertical') {
      if (
        startX - 1 > 0 &&
        grid[startX - 1][startY] !== 'X' &&
        grid[startX - 1][startY] !== 'H' &&
        grid[startX - 1][startY] !== 'S'
      ) {
        attackCoords = [startX - 1, startY];
      } else if (
        endX < gridLength - 1 &&
        grid[endX + 1][endY] !== 'X' &&
        grid[endX + 1][endY] !== 'H' &&
        grid[endX + 1][endY] !== 'S'
      ) {
        attackCoords = [endX + 1, endY];
      }
    } else if (alignment === 'horizontal') {
      if (
        startY - 1 >= 0 &&
        grid[startX][startY - 1] !== 'X' &&
        grid[startX][startY - 1] !== 'H' &&
        grid[startX][startY - 1] !== 'S'
      ) {
        attackCoords = [startX, startY - 1];
      } else if (
        endY < gridLength - 1 &&
        grid[endX][endY + 1] !== 'X' &&
        grid[endX][endY + 1] !== 'H' &&
        grid[endX][endY + 1] !== 'S'
      ) {
        attackCoords = [endX, endY + 1];
      }
    }
    return attackCoords;
  };

  // --- Controllers
  // 1. Determine Attack Type:
  //        determineAttackType() will determine which attack should be
  //        based on how many ship cell hits have taken place.
  // 2. Perform AI Attack:
  //        performAIAttack() will initiate the attack type that was
  //        determined by determineAttackType.

  const determineAttackType = gameboard => {
    const numShips = countGridContents(gameboard, 'H');
    let attackType = '';
    if (numShips === 0) {
      attackType = 'random';
    } else if (numShips === 1) {
      attackType = 'search';
    } else if (numShips > 1) {
      attackType = 'alignment';
    }
    return attackType;
  };

  const performAIAttack = gameboard => {
    const attackType = determineAttackType(gameboard);
    let attackCoords = [];
    if (attackType === 'random') {
      attackCoords = getRandomAttack(gameboard);
    } else if (attackType === 'search') {
      const lastRandomAttackCoords = [..._lastRandomAttackCoords];
      attackCoords = getSearchAttack(gameboard, lastRandomAttackCoords);
    } else if (attackType === 'alignment') {
      const alignmentObj = getAlignment(gameboard);
      attackCoords = getAlignmentAttack(
        gameboard,
        alignmentObj[0],
        alignmentObj[1],
        alignmentObj[2],
      );
    }
    gameboard.receiveAttack(attackCoords);
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
    set shipLocations(arrIn) {
      _shipLocations = arrIn;
    },
    get lastRandomAttackCoords() {
      return _lastRandomAttackCoords;
    },
    set lastRandomAttackCoords(arrIn) {
      _lastRandomAttackCoords = arrIn;
    },
    // Functions
    getAlignment,
    getRandomAttack,
    getSearchAttack,
    getAlignmentAttack,
    determineAttackType,
    countGridContents,
    performAIAttack,
  };
};

export default ComputerAI;
