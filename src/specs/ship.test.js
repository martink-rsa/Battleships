import { Ship } from '../game/ship/ship';

// Ship: Object creation tests
describe('Ship: Object creation', () => {
  test('Ship object is created (length: 4, no hits)', () => {
    const newShip = Ship(4, [], false);
    expect(newShip).toMatchObject({ length: 4, hits: [], sunk: false });
  });

  test('Ship object is created (length: 3, 1 hit', () => {
    const newShip = Ship(3, [2], false);
    expect(newShip).toMatchObject({ length: 3, hits: [2], sunk: false });
  });

  test('Ship object is created (length: 1, sunk', () => {
    const newShip = Ship(1, [0], true);
    expect(newShip).toMatchObject({ length: 1, hits: [0], sunk: true });
  });
});

// Ship: Hit() tests
describe('Ship: hit() (successful hits to vessel)', () => {
  test('Ship object can get hit', () => {
    const newShip = Ship(3, [], false);
    newShip.hit(1);
    expect(newShip.hits).toEqual([1]);
  });

  test('Ship object can get hit twice', () => {
    const newShip = Ship(3, [], false);
    newShip.hit(0);
    newShip.hit(1);
    expect(newShip.hits).toEqual([0, 1]);
  });

  test('Ship object can get hit four times', () => {
    const newShip = Ship(4, [], false);
    newShip.hit(0);
    newShip.hit(1);
    newShip.hit(2);
    newShip.hit(3);
    expect(newShip.hits).toEqual([0, 1, 2, 3]);
  });

  test('Ship object will sort its hits in ascending order #1', () => {
    const newShip = Ship(3, [], false);
    newShip.hit(2);
    newShip.hit(0);
    expect(newShip.hits).toEqual([0, 2]);
  });

  test('Ship object will sort its hits in ascending order #2', () => {
    const newShip = Ship(4, [], false);
    newShip.hit(3);
    newShip.hit(1);
    expect(newShip.hits).toEqual([1, 3]);
  });
});

// Ship: isSunk() tests
describe('Ship: isSunk() (Correct number of hits to vessel))', () => {
  test('Ship object will sink on correct number of hits', () => {
    const newShip = Ship(3, [0, 1, 2], false);
    expect(newShip.isSunk()).toBe(true);
  });

  test('Ship object will not sink on incorrect number of hits', () => {
    const newShip = Ship(3, [0, 1], false);
    expect(newShip.isSunk()).toBe(false);
  });

  test('Ship object will result in being sunk after manual shots #1 (length 1)', () => {
    const newShip = Ship(1, [], false);
    newShip.hit(0);
    expect(newShip.sunk).toBe(true);
  });

  test('Ship object will result in being sunk after manual shots #2 (length 2)', () => {
    const newShip = Ship(2, [], false);
    newShip.hit(0);
    newShip.hit(1);
    expect(newShip.sunk).toBe(true);
  });

  test('Ship object will result in being sunk after manual shots #3 (length 4)', () => {
    const newShip = Ship(4, [], false);
    newShip.hit(0);
    newShip.hit(2);
    newShip.hit(1);
    newShip.hit(3);
    expect(newShip.sunk).toBe(true);
  });
});
