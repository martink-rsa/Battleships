/* eslint-disable jest/no-commented-out-tests */
import { Gameboard } from '../game/gameboard/gameboard';
import { Ship } from '../game/ship/ship';
import { Player } from '../game/player/player';
import { ComputerAI } from '../game/computerAI/computerAI';

// ComputerAI: getAlignment() Find which alignment to keep attacking
describe('ComputerAI: getAlignment() (set alignment from longest ships attacked)', () => {
  test('Horizontal alignment is found #1', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[3][3] = 'H';
    newGameboardPlayer.grid[3][4] = 'H';
    newGameboardPlayer.grid[3][5] = 'H';
    newGameboardPlayer.grid[3][6] = 'H';
    newGameboardPlayer.grid[4][3] = 'H';
    newGameboardPlayer.grid[4][4] = 'H';
    newGameboardPlayer.grid[4][5] = 'H';
    const alignment = computerAI.getAlignment(newGameboardPlayer);
    expect(alignment).toMatchObject(['horizontal', [3, 3], [3, 6]]);
  });
  test('Horizontal alignment is found #2', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[1][1] = 'H';
    newGameboardPlayer.grid[1][2] = 'H';
    newGameboardPlayer.grid[1][3] = 'H';
    newGameboardPlayer.grid[1][4] = 'H';
    newGameboardPlayer.grid[2][2] = 'H';
    newGameboardPlayer.grid[2][3] = 'H';
    newGameboardPlayer.grid[2][4] = 'H';
    newGameboardPlayer.grid[5][0] = 'H';
    newGameboardPlayer.grid[5][1] = 'H';
    newGameboardPlayer.grid[5][2] = 'H';
    newGameboardPlayer.grid[5][3] = 'H';
    newGameboardPlayer.grid[5][4] = 'H';
    const alignment = computerAI.getAlignment(newGameboardPlayer);
    expect(alignment).toMatchObject(['horizontal', [5, 0], [5, 4]]);
  });
  test('Vertical alignment is found #1', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[3][3] = 'H';
    newGameboardPlayer.grid[3][4] = 'H';
    newGameboardPlayer.grid[4][3] = 'H';
    newGameboardPlayer.grid[4][4] = 'H';
    newGameboardPlayer.grid[5][3] = 'H';
    const alignment = computerAI.getAlignment(newGameboardPlayer);
    expect(alignment).toMatchObject(['vertical', [3, 3], [5, 3]]);
  });
  test('Vertical alignment is found #2', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[1][1] = 'H';
    newGameboardPlayer.grid[2][1] = 'H';
    newGameboardPlayer.grid[3][1] = 'H';
    newGameboardPlayer.grid[4][1] = 'H';
    newGameboardPlayer.grid[5][1] = 'H';
    newGameboardPlayer.grid[1][2] = 'H';
    newGameboardPlayer.grid[2][2] = 'H';
    newGameboardPlayer.grid[3][2] = 'H';
    newGameboardPlayer.grid[4][2] = 'H';
    newGameboardPlayer.grid[5][2] = 'H';
    const alignment = computerAI.getAlignment(newGameboardPlayer);
    expect(alignment).toMatchObject(['vertical', [1, 1], [5, 1]]);
  });
});

// ComputerAI: countGridContents() Count a specific element type
describe('ComputerAI: countGridContents() (Count a specific element type)', () => {
  test('Return the correct number of misses', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[0][0] = 'X';
    newGameboardPlayer.grid[2][3] = 'X';
    newGameboardPlayer.grid[7][5] = 'X';
    let count = 0;
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        if (newGameboardPlayer.grid[i][j] === 'X') {
          count += 1;
        }
      }
    }
    const countGridContents = computerAI.countGridContents(
      newGameboardPlayer,
      'X',
    );
    expect(count).toBe(3);
    expect(countGridContents).toBe(count);
  });
  test('Return the correct number of hits', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[0][0] = 'X';
    newGameboardPlayer.grid[0][4] = 'H';
    newGameboardPlayer.grid[2][3] = 'X';
    newGameboardPlayer.grid[4][5] = 'H';
    newGameboardPlayer.grid[5][5] = 'H';
    newGameboardPlayer.grid[6][5] = 'H';
    newGameboardPlayer.grid[7][5] = 'X';
    let count = 0;
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        if (newGameboardPlayer.grid[i][j] === 'H') {
          count += 1;
        }
      }
    }
    const countGridContents = computerAI.countGridContents(
      newGameboardPlayer,
      'H',
    );
    expect(count).toBe(4);
    expect(countGridContents).toBe(count);
  });
});

// ComputerAI: determineAIAttack() See if the AI selects the correct attack
describe('ComputerAI: determineAttackType() (AI chooses correct attack)', () => {
  test('getRandomAttack() is chosen if no ships are available', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    const AIAttack = computerAI.determineAttackType(newGameboardPlayer);
    expect(AIAttack).toBe('random');
  });
  test('getSearchAttack() is chosen if only one ship hit exists', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[3][3] = 'H';
    const AIAttack = computerAI.determineAttackType(newGameboardPlayer);
    expect(AIAttack).toBe('search');
  });
  test('getSearchAttack() is chosen if more than one ship hit exists', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[3][3] = 'H';
    newGameboardPlayer.grid[3][4] = 'H';
    const AIAttack = computerAI.determineAttackType(newGameboardPlayer);
    expect(AIAttack).toBe('alignment');
  });
});

// ComputerAI: randomAttack() Make random attacks on the board
describe('ComputerAI: randomAttack()', () => {
  test('Computer AI will perform a random attack', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const newPlayer1 = Player(0, 'computer', 'default', 'blue');
    const computerAI = ComputerAI(0);
    newPlayer1.makeAttack(
      newGameboardPlayer,
      computerAI.getRandomAttack(newGameboardPlayer),
    );
    let attackFound = false;
    let lastRandomAttackCoords = [];
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        if (newGameboardPlayer.grid[i][j] === 'X') {
          attackFound = true;
          lastRandomAttackCoords = [i, j];
        }
      }
    }
    const expectedLastAttack = computerAI.lastRandomAttackCoords;
    expect(attackFound).toBe(true);
    expect(expectedLastAttack).toStrictEqual(lastRandomAttackCoords);
  });
  test('Computer AI will perform a random attack when only one spot available', () => {
    const size = 8;
    const newGameboard = Gameboard(0, size);
    const newPlayer1 = Player(0, 'computer', 'default', 'blue');
    const computerAI = ComputerAI(0);
    // Fill the grid
    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        newPlayer1.makeAttack(newGameboard, [i, j]);
      }
    }
    // Check elements surrounding last empty cell has been attacked
    expect(newGameboard.grid[7][6]).toBe('X');
    expect(newGameboard.grid[6][7]).toBe('X');
    expect(newGameboard.grid[7][7]).toBe('X');
    // Set one element to empty
    newGameboard.grid[7][7] = 'E';
    expect(newGameboard.grid[7][7]).toBe('E');
    // Let AI try attack last element
    newPlayer1.makeAttack(
      newGameboard,
      computerAI.getRandomAttack(newGameboard),
    );
    expect(newGameboard.grid[7][7]).toBe('X');
  });
});

// ComputerAI: getSearchAttack() Attack NWSE positions if available
describe('ComputerAI: getSearchAttack() (get a NWSE locations to attack)', () => {
  test('Location N is found', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[3][3] = 'H';
    const coords = computerAI.getSearchAttack(newGameboardPlayer, [3, 3]);
    expect(coords).toStrictEqual([2, 3]);
  });
  test('Locations W is found', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[0][1] = 'H';
    const coords = computerAI.getSearchAttack(newGameboardPlayer, [0, 1]);
    expect(coords).toStrictEqual([0, 0]);
  });
  test('Locations S is found (Boundary blocking)', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[0][0] = 'H';
    const coords = computerAI.getSearchAttack(newGameboardPlayer, [0, 0]);
    expect(coords).toStrictEqual([1, 0]);
  });
  test('Locations S is found (Grid content blocking)', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[1][1] = 'H';
    newGameboardPlayer.grid[0][1] = 'X';
    newGameboardPlayer.grid[1][0] = 'X';
    newGameboardPlayer.grid[1][2] = 'X';
    const coords = computerAI.getSearchAttack(newGameboardPlayer, [1, 1]);
    expect(coords).toStrictEqual([2, 1]);
  });
  test('Locations E is found', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[1][1] = 'H';
    newGameboardPlayer.grid[0][1] = 'X';
    newGameboardPlayer.grid[1][0] = 'X';
    newGameboardPlayer.grid[2][1] = 'X';
    const coords = computerAI.getSearchAttack(newGameboardPlayer, [1, 1]);
    expect(coords).toStrictEqual([1, 2]);
  });
});

// ComputerAI: getAlignmentAttack() Attack end points of discovered ships
describe('ComputerAI: getAlignmentAttack (Get the correct positions of the end points of ship parts discovered)', () => {
  test('Attack is made north/top of the ship', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[3][3] = 'H';
    newGameboardPlayer.grid[4][3] = 'H';
    newGameboardPlayer.grid[5][3] = 'H';
    const alignmentObj = computerAI.getAlignment(newGameboardPlayer);
    const alignmentCoords = computerAI.getAlignmentAttack(
      newGameboardPlayer,
      alignmentObj[0],
      alignmentObj[1],
      alignmentObj[2],
    );
    expect(alignmentCoords).toStrictEqual([2, 3]);
  });
  test('Attack is made south/bottom of the ship', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[2][3] = 'X';
    newGameboardPlayer.grid[3][3] = 'H';
    newGameboardPlayer.grid[4][3] = 'H';
    newGameboardPlayer.grid[5][3] = 'H';
    const alignmentObj = computerAI.getAlignment(newGameboardPlayer);
    const alignmentCoords = computerAI.getAlignmentAttack(
      newGameboardPlayer,
      alignmentObj[0],
      alignmentObj[1],
      alignmentObj[2],
    );
    expect(alignmentCoords).toStrictEqual([6, 3]);
  });
  test('Attack is made south/bottom of the ship when ship starts on the boundary', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[0][3] = 'H';
    newGameboardPlayer.grid[1][3] = 'H';
    newGameboardPlayer.grid[2][3] = 'H';
    const alignmentObj = computerAI.getAlignment(newGameboardPlayer);
    const alignmentCoords = computerAI.getAlignmentAttack(
      newGameboardPlayer,
      alignmentObj[0],
      alignmentObj[1],
      alignmentObj[2],
    );
    expect(alignmentCoords).toStrictEqual([3, 3]);
  });
  test('Attack is made south/bottom of the ship when last attack is on the boundary', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[3][3] = 'X';
    newGameboardPlayer.grid[4][3] = 'H';
    newGameboardPlayer.grid[5][3] = 'H';
    newGameboardPlayer.grid[6][3] = 'H';
    const alignmentObj = computerAI.getAlignment(newGameboardPlayer);
    const alignmentCoords = computerAI.getAlignmentAttack(
      newGameboardPlayer,
      alignmentObj[0],
      alignmentObj[1],
      alignmentObj[2],
    );
    expect(alignmentCoords).toStrictEqual([7, 3]);
  });
  test('Attack is made west/left of the ship', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[3][2] = 'H';
    newGameboardPlayer.grid[3][3] = 'H';
    newGameboardPlayer.grid[3][4] = 'H';
    newGameboardPlayer.grid[3][5] = '0';
    const alignmentObj = computerAI.getAlignment(newGameboardPlayer);
    const alignmentCoords = computerAI.getAlignmentAttack(
      newGameboardPlayer,
      alignmentObj[0],
      alignmentObj[1],
      alignmentObj[2],
    );
    expect(alignmentCoords).toStrictEqual([3, 1]);
  });
  test('Attack is made east/right of the ship', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[3][2] = 'X';
    newGameboardPlayer.grid[3][3] = 'H';
    newGameboardPlayer.grid[3][4] = 'H';
    newGameboardPlayer.grid[3][5] = 'H';
    newGameboardPlayer.grid[3][6] = '0';
    const alignmentObj = computerAI.getAlignment(newGameboardPlayer);
    const alignmentCoords = computerAI.getAlignmentAttack(
      newGameboardPlayer,
      alignmentObj[0],
      alignmentObj[1],
      alignmentObj[2],
    );
    expect(alignmentCoords).toStrictEqual([3, 6]);
  });
  test('Attack is made east/right of the ship when ship starts on the boundary', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[3][0] = 'H';
    newGameboardPlayer.grid[3][1] = 'H';
    newGameboardPlayer.grid[3][2] = 'H';
    newGameboardPlayer.grid[3][3] = 'H';
    const alignmentObj = computerAI.getAlignment(newGameboardPlayer);
    const alignmentCoords = computerAI.getAlignmentAttack(
      newGameboardPlayer,
      alignmentObj[0],
      alignmentObj[1],
      alignmentObj[2],
    );
    expect(alignmentCoords).toStrictEqual([3, 4]);
  });
  test('Attack is made east/right of the ship when last attack is on the boundary', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const computerAI = ComputerAI(0);
    newGameboardPlayer.grid[3][3] = 'X';
    newGameboardPlayer.grid[3][4] = 'H';
    newGameboardPlayer.grid[3][5] = 'H';
    newGameboardPlayer.grid[3][6] = 'H';
    const alignmentObj = computerAI.getAlignment(newGameboardPlayer);
    const alignmentCoords = computerAI.getAlignmentAttack(
      newGameboardPlayer,
      alignmentObj[0],
      alignmentObj[1],
      alignmentObj[2],
    );
    expect(alignmentCoords).toStrictEqual([3, 7]);
  });
});

// ComputerAI: performAIAttack() Test if the AI will go through the correct attack types
describe('ComputerAI: performAIAttack() (Perform the correct attack type choices)', () => {
  test('AI will perform a single search attack', () => {
    const size = 8;
    // const newPlayerHuman = Player(0, 'human', 'default', 'blue');
    const newGameboardPlayer = Gameboard(0, size);
    const newShip = Ship(0, 4, [], false, 'vertical');
    const computerAI = ComputerAI(0);
    newGameboardPlayer.placeShip(newShip, [3, 3]);
    newGameboardPlayer.receiveAttack([3, 3]);
    computerAI.lastRandomAttackCoords = [3, 3];
    expect(newGameboardPlayer.grid[3][3]).toBe('H');
    computerAI.performAIAttack(newGameboardPlayer);
    expect(newGameboardPlayer.grid[2][3]).toBe('X');
  });
  test('AI will perform search and alignment attacks', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const newShip = Ship(0, 4, [], false, 'vertical');
    const computerAI = ComputerAI(0);
    newGameboardPlayer.placeShip(newShip, [3, 3]);
    newGameboardPlayer.receiveAttack([3, 3]);
    expect(newGameboardPlayer.grid[3][3]).toBe('H');
    computerAI.lastRandomAttackCoords = [3, 3];
    computerAI.performAIAttack(newGameboardPlayer);
    expect(newGameboardPlayer.grid[2][3]).toBe('X');
    computerAI.performAIAttack(newGameboardPlayer);
    expect(newGameboardPlayer.grid[3][2]).toBe('X');
    computerAI.performAIAttack(newGameboardPlayer);
    expect(newGameboardPlayer.grid[4][3]).toBe('H');
    computerAI.performAIAttack(newGameboardPlayer);
    expect(newGameboardPlayer.grid[5][3]).toBe('H');
    computerAI.performAIAttack(newGameboardPlayer);
    expect(newGameboardPlayer.grid[6][3]).toBe('S');
  });
  test('AI will perform random, search and alignment attacks until ship has sunk', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    const newShip = Ship(0, 4, [], false, 'vertical');
    newGameboardPlayer.placeShip(newShip, [3, 3]);
    const computerAI = ComputerAI(0);
    let shipFound = false;
    const checkBoard = () => {
      for (let i = 0; i < size; i += 1) {
        for (let j = 0; j < size; j += 1) {
          if (newGameboardPlayer.grid[i][j] === 'H') {
            return true;
          }
        }
      }
      return false;
    };
    while (shipFound === false) {
      computerAI.performAIAttack(newGameboardPlayer);
      shipFound = checkBoard();
    }
    while (newGameboardPlayer.grid[3][3] !== 'S') {
      computerAI.performAIAttack(newGameboardPlayer);
    }
    expect(newGameboardPlayer.grid[3][3]).toBe('S');
  });
});
