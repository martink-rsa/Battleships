import { Gameboard } from '../game/gameboard/gameboard';
import { Ship } from '../game/ship/ship';

// Gameboard Creation
describe('Gameboard: Game board creation', () => {
  test('Basic Gameboard grid created (playerID 0)', () => {
    const newGameboard = Gameboard(0, 8);
    expect(newGameboard.grid).toEqual([
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ]);
  });
  test('Basic Gameboard grid created (playerID 1)', () => {
    const newGameboard = Gameboard(1, 8);
    expect(newGameboard.grid).toEqual([
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ]);
  });
});

// Ship placements
describe('Gameboard: Ship placement', () => {
  test('Ship can be placed vertically #1', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'vertical');
    const { id } = newShip;
    const coords = [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ];
    newGameboard.placeShip(newShip, [0, 0]);
    expect(newGameboard.grid).toEqual([
      [id, 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      [id, 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      [id, 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      [id, 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ]);
    expect(newGameboard.ships[0].coords).toEqual(coords);
    expect(newGameboard.ships[0].ship).toEqual(newShip);
  });
  test('Ship can be placed vertically #2', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'vertical');
    const { id } = newShip;
    const coords = [
      [3, 4],
      [4, 4],
      [5, 4],
      [6, 4],
    ];
    newGameboard.placeShip(newShip, [3, 4]);
    expect(newGameboard.grid).toEqual([
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', id, 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', id, 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', id, 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', id, 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ]);
    expect(newGameboard.ships[0].coords).toEqual(coords);
    expect(newGameboard.ships[0].ship).toEqual(newShip);
  });
  test('Ship can be placed horizontally #1', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'horizontal');
    const { id } = newShip;
    const coords = [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ];
    newGameboard.placeShip(newShip, [0, 0]);
    expect(newGameboard.grid).toEqual([
      [id, id, id, id, 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ]);
    expect(newGameboard.ships[0].coords).toEqual(coords);
    expect(newGameboard.ships[0].ship).toEqual(newShip);
  });
  test('Ship can be placed horizontal #2', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'horizontal');
    const { id } = newShip;
    const coords = [
      [2, 3],
      [2, 4],
      [2, 5],
      [2, 6],
    ];
    newGameboard.placeShip(newShip, [2, 3]);
    expect(newGameboard.grid).toEqual([
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', id, id, id, id, 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ]);
    expect(newGameboard.ships[0].coords).toEqual(coords);
    expect(newGameboard.ships[0].ship).toEqual(newShip);
  });
  test('Ships can be placed and board reflects correct positions (5 ships)', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip0 = Ship(0, 1, [], false, 'horizontal');
    const newShip1 = Ship(1, 2, [], false, 'horizontal');
    const newShip2 = Ship(2, 4, [], false, 'horizontal');
    const newShip3 = Ship(3, 4, [], false, 'vertical');
    const newShip4 = Ship(4, 4, [], false, 'vertical');
    newGameboard.placeShip(newShip0, [1, 3]);
    newGameboard.placeShip(newShip1, [3, 1]);
    newGameboard.placeShip(newShip2, [5, 0]);
    newGameboard.placeShip(newShip3, [2, 5]);
    newGameboard.placeShip(newShip4, [4, 7]);
    const coords0 = [[1, 3]];
    const coords1 = [
      [3, 1],
      [3, 2],
    ];
    const coords2 = [
      [5, 0],
      [5, 1],
      [5, 2],
      [5, 3],
    ];
    const coords3 = [
      [2, 5],
      [3, 5],
      [4, 5],
      [5, 5],
    ];
    const coords4 = [
      [4, 7],
      [5, 7],
      [6, 7],
      [7, 7],
    ];
    expect(newGameboard.grid).toEqual([
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 0, 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 3, 'E', 'E'],
      ['E', 1, 1, 'E', 'E', 3, 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 3, 'E', 4],
      [2, 2, 2, 2, 'E', 3, 'E', 4],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 4],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 4],
    ]);
    expect(newGameboard.ships[0].coords).toEqual(coords0);
    expect(newGameboard.ships[0].ship).toEqual(newShip0);
    expect(newGameboard.ships[1].coords).toEqual(coords1);
    expect(newGameboard.ships[1].ship).toEqual(newShip1);
    expect(newGameboard.ships[2].coords).toEqual(coords2);
    expect(newGameboard.ships[2].ship).toEqual(newShip2);
    expect(newGameboard.ships[3].coords).toEqual(coords3);
    expect(newGameboard.ships[3].ship).toEqual(newShip3);
    expect(newGameboard.ships[4].coords).toEqual(coords4);
    expect(newGameboard.ships[4].ship).toEqual(newShip4);
  });
});

// Check if placement is legal
describe('Gameboard: Check if placements are legal', () => {
  // Legal placements
  test('Gameboard allows placement (no other ships) #1', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'vertical');
    expect(newGameboard.isLegalPlacement(newShip, [0, 0])).toBe(true);
  });
  test('Gameboard allows placement (no other ships) #2', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'vertical');
    expect(newGameboard.isLegalPlacement(newShip, [3, 3])).toBe(true);
  });
  test('Gameboard allows placement (no other ships) #3', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 1, [], false, 'vertical');
    expect(newGameboard.isLegalPlacement(newShip, [1, 2])).toBe(true);
  });
  test('Gameboard allows placement next to other ships #1', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'horizontal');
    const dummyShip = Ship(0, 4, [], false, 'horizontal');
    newGameboard.placeShip(dummyShip, [0, 0]);
    expect(newGameboard.isLegalPlacement(newShip, [1, 0])).toBe(true);
  });
  test('Gameboard allows placement next to other ships #2', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'vertical');
    const dummyShip = Ship(0, 4, [], false, 'vertical');
    newGameboard.placeShip(dummyShip, [0, 0]);
    expect(newGameboard.isLegalPlacement(newShip, [0, 1])).toBe(true);
  });

  // Illegal placements due to grid boundaries
  test('Gameboard does not allow vertical placement crossing over boundary #1', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'vertical');
    expect(newGameboard.isLegalPlacement(newShip, [7, 0])).toBe(false);
  });
  test('Gameboard does not allow vertical placement crossing over boundary #2', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'vertical');
    expect(newGameboard.isLegalPlacement(newShip, [7, 6])).toBe(false);
  });
  test('Gameboard does not allow horizontal placement crossing over boundary #1', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'horizontal');
    expect(newGameboard.isLegalPlacement(newShip, [7, 6])).toBe(false);
  });
  test('Gameboard does not allow horizontal placement crossing over boundary #2', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'horizontal');
    expect(newGameboard.isLegalPlacement(newShip, [0, 6])).toBe(false);
  });

  // Illegal placements due to obstacles
  test('Gameboard does not allow vertical placement over other ships', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'vertical');
    const dummyShip = Ship(0, 4, [], false, 'horizontal');
    newGameboard.placeShip(dummyShip, [2, 2]);
    expect(newGameboard.isLegalPlacement(newShip, [1, 3])).toBe(false);
  });
  test('Gameboard does not allow horizontal placement over other ships', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'horizontal');
    const dummyShip = Ship(0, 4, [], false, 'vertical');
    newGameboard.placeShip(dummyShip, [1, 3]);
    expect(newGameboard.isLegalPlacement(newShip, [2, 2])).toBe(false);
  });
});

// Check if correct ship is returned
describe('Gameboard: getShip() (Check if correct ship is returned)', () => {
  test('Gameboard returns the correct ship (1 ship)', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 1, [], false, 'horizontal');
    newGameboard.placeShip(newShip, [1, 3]);
    const coords = [[1, 3]];
    expect(newGameboard.getShip(0).ship).toMatchObject(newShip);
    expect(newGameboard.getShip(0).coords).toMatchObject(coords);
  });
  test('Gameboard returns the correct ship (3 ships)', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip0 = Ship(0, 1, [], false, 'horizontal');
    const newShip1 = Ship(1, 2, [], false, 'horizontal');
    const newShip2 = Ship(2, 4, [], false, 'horizontal');
    newGameboard.placeShip(newShip0, [1, 3]);
    newGameboard.placeShip(newShip1, [3, 1]);
    newGameboard.placeShip(newShip2, [5, 0]);
    const coords = [
      [3, 1],
      [3, 2],
    ];
    expect(newGameboard.getShip(1).ship).toMatchObject(newShip1);
    expect(newGameboard.getShip(1).coords).toMatchObject(coords);
  });
  test('Gameboard returns the correct ship (5 ships)', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip0 = Ship(0, 1, [], false, 'horizontal');
    const newShip1 = Ship(1, 2, [], false, 'horizontal');
    const newShip2 = Ship(2, 4, [], false, 'horizontal');
    const newShip3 = Ship(3, 4, [], false, 'vertical');
    const newShip4 = Ship(4, 4, [], false, 'vertical');
    newGameboard.placeShip(newShip0, [1, 3]);
    newGameboard.placeShip(newShip1, [3, 1]);
    newGameboard.placeShip(newShip2, [5, 0]);
    newGameboard.placeShip(newShip3, [2, 5]);
    newGameboard.placeShip(newShip4, [4, 7]);
    const coords = [
      [2, 5],
      [3, 5],
      [4, 5],
      [5, 5],
    ];
    expect(newGameboard.getShip(3).ship).toMatchObject(newShip3);
    expect(newGameboard.getShip(3).coords).toMatchObject(coords);
  });
});

// Check if attacks are working
describe('Gameboard: receiveAttack() (Check if attack is valid)', () => {
  // Ship attacks
  test('Gameboard allows attack on a ship (1 attack)', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 3, [], false, 'horizontal');
    newGameboard.placeShip(newShip, [1, 3]);
    newGameboard.receiveAttack([1, 3]);
    expect(newShip.hits).toEqual([0]);
    expect(newGameboard.grid[1][3]).toBe('H');
  });
  test('Gameboard allows attack on a ship (2 attacks)', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 3, [], false, 'horizontal');
    newGameboard.placeShip(newShip, [1, 3]);
    newGameboard.receiveAttack([1, 3]);
    expect(newShip.hits).toEqual([0]);
    expect(newGameboard.grid[1][3]).toBe('H');
    newGameboard.receiveAttack([1, 4]);
    expect(newShip.hits).toEqual([0, 1]);
    expect(newGameboard.grid[1][4]).toBe('H');
  });
  test('Gameboard allows attack on a ship (3 attacks)', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'horizontal');
    newGameboard.placeShip(newShip, [1, 3]);
    newGameboard.receiveAttack([1, 3]);
    expect(newShip.hits).toEqual([0]);
    expect(newGameboard.grid[1][3]).toBe('H');
    newGameboard.receiveAttack([1, 4]);
    expect(newShip.hits).toEqual([0, 1]);
    expect(newGameboard.grid[1][4]).toBe('H');
    newGameboard.receiveAttack([1, 5]);
    expect(newShip.hits).toEqual([0, 1, 2]);
    expect(newGameboard.grid[1][5]).toBe('H');
  });

  // Check if ship has sunk
  test('Ship with 1 length is sunk after 1 attack received', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 1, [], false, 'horizontal');
    newGameboard.placeShip(newShip, [1, 3]);
    newGameboard.receiveAttack([1, 3]);
    expect(newShip.isSunk()).toBe(true);
    expect(newGameboard.grid[1][3]).toBe('S');
  });
  test('Ship with 3 length is sunk after 3 attacks received', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 3, [], false, 'horizontal');
    newGameboard.placeShip(newShip, [1, 3]);
    newGameboard.receiveAttack([1, 3]);
    newGameboard.receiveAttack([1, 4]);
    newGameboard.receiveAttack([1, 5]);
    expect(newShip.isSunk()).toBe(true);
    expect(newGameboard.grid[1][3]).toBe('S');
    expect(newGameboard.grid[1][4]).toBe('S');
    expect(newGameboard.grid[1][5]).toBe('S');
  });
  test('Ship with 4 length is sunk after 4 attacks received', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'horizontal');
    newGameboard.placeShip(newShip, [1, 3]);
    newGameboard.receiveAttack([1, 3]);
    newGameboard.receiveAttack([1, 4]);
    newGameboard.receiveAttack([1, 5]);
    newGameboard.receiveAttack([1, 6]);
    expect(newShip.isSunk()).toBe(true);
    expect(newGameboard.grid[1][3]).toBe('S');
    expect(newGameboard.grid[1][4]).toBe('S');
    expect(newGameboard.grid[1][5]).toBe('S');
    expect(newGameboard.grid[1][6]).toBe('S');
  });

  // Empty tile attacked
  test('Gameboard correctly records missed attack (no ships)', () => {
    const newGameboard = Gameboard(0, 8);
    newGameboard.receiveAttack([0, 0]);
    expect(newGameboard.grid[0][0]).toBe('X');
  });
  test('Gameboard correctly records missed attack (ship on board)', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 3, [], false, 'horizontal');
    newGameboard.placeShip(newShip, [1, 3]);
    newGameboard.receiveAttack([7, 0]);
    expect(newGameboard.grid[7][0]).toBe('X');
  });
});

// Check if ships are sunken after attacks and
//    all ships have sunk
describe('Gameboard: allShipsSunk() (Check if all ships have been sunk)', () => {
  // Ships all sunk
  test('Gameboard reports all ships sunk with 1 ship', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 3, [], false, 'vertical');
    newGameboard.placeShip(newShip, [1, 3]);
    newGameboard.receiveAttack([1, 3]);
    newGameboard.receiveAttack([2, 3]);
    newGameboard.receiveAttack([3, 3]);
    expect(newGameboard.allShipsSunk()).toEqual(true);
  });
  test('Gameboard reports all ships sunk with 2 ships', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip0 = Ship(0, 3, [], false, 'vertical');
    const newShip1 = Ship(1, 1, [], false, 'vertical');
    newGameboard.placeShip(newShip0, [1, 3]);
    newGameboard.placeShip(newShip1, [4, 3]);
    newGameboard.receiveAttack([1, 3]);
    newGameboard.receiveAttack([2, 3]);
    newGameboard.receiveAttack([3, 3]);
    newGameboard.receiveAttack([4, 3]);
    expect(newGameboard.allShipsSunk()).toEqual(true);
  });
  test('Gameboard reports all ships sunk with 4 ships', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip0 = Ship(0, 3, [], false, 'vertical');
    const newShip1 = Ship(1, 1, [], false, 'vertical');
    const newShip2 = Ship(2, 4, [], false, 'horizontal');
    const newShip3 = Ship(3, 4, [], false, 'horizontal');
    newGameboard.placeShip(newShip0, [1, 3]);
    newGameboard.placeShip(newShip1, [4, 3]);
    newGameboard.placeShip(newShip2, [5, 4]);
    newGameboard.placeShip(newShip3, [6, 0]);
    newGameboard.receiveAttack([1, 3]);
    newGameboard.receiveAttack([2, 3]);
    newGameboard.receiveAttack([3, 3]);
    newGameboard.receiveAttack([4, 3]);
    newGameboard.receiveAttack([5, 4]);
    newGameboard.receiveAttack([5, 5]);
    newGameboard.receiveAttack([5, 6]);
    newGameboard.receiveAttack([5, 7]);
    newGameboard.receiveAttack([6, 0]);
    newGameboard.receiveAttack([6, 1]);
    newGameboard.receiveAttack([6, 2]);
    newGameboard.receiveAttack([6, 3]);
    expect(newGameboard.allShipsSunk()).toEqual(true);
  });
});
