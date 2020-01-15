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
    expect(newGameboard.ships);
  });
  test('Ship can be placed vertically #2', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'vertical');
    const { id } = newShip;
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
  });
  test('Ship can be placed horizontally #1', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'horizontal');
    const { id } = newShip;
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
  });
  test('Ship can be placed horizontal #2', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'horizontal');
    const { id } = newShip;
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
    expect(newGameboard.getShip(0)).toMatchObject(newShip);
  });
  test('Gameboard returns the correct ship (3 ships)', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip0 = Ship(0, 1, [], false, 'horizontal');
    const newShip1 = Ship(1, 2, [], false, 'horizontal');
    const newShip2 = Ship(2, 4, [], false, 'horizontal');
    newGameboard.placeShip(newShip0, [1, 3]);
    newGameboard.placeShip(newShip1, [3, 1]);
    newGameboard.placeShip(newShip2, [5, 0]);
    expect(newGameboard.getShip(1)).toMatchObject(newShip1);
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
    expect(newGameboard.getShip(3)).toMatchObject(newShip3);
  });
});

// Check if attacks are working
describe('Gameboard: receiveAttack() (Check if attack is valid)', () => {
  // Legal placements
  test('Gameboard allows attack on a ship', () => {
    const newGameboard = Gameboard(0, 8);
    const newShip = Ship(0, 4, [], false, 'horizontal');
    newGameboard.placeShip(newShip, [1, 3]);
    const hitFn = jest.fn();
    newGameboard.receiveAttack([1, 3]);
    expect(hitFn).toBeCalledTimes(1);
    // expect(newGameboard.receiveAttack([1, 2])).toBe(true);
  });
});
