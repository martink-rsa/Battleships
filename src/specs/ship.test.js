import { Ship } from '../game/ship/ship';

// Ship: Object creation tests
describe('Ship: Object creation', () => {
  test('Ship object is created (length: 4, no hits)', () => {
    const newShip = Ship(0, 4, [], false, 'vertical');
    expect(newShip).toMatchObject({
      length: 4,
      hits: [],
      sunk: false,
      alignment: 'vertical',
    });
  });

  test('Ship object is created (length: 3, 1 hit', () => {
    const newShip = Ship(0, 3, [2], false, 'vertical');
    expect(newShip).toMatchObject({
      length: 3,
      hits: [2],
      sunk: false,
      alignment: 'vertical',
    });
  });

  test('Ship object is created (length: 1, sunk', () => {
    const newShip = Ship(0, 1, [0], true, 'vertical');
    expect(newShip).toMatchObject({
      length: 1,
      hits: [0],
      sunk: true,
      alignment: 'vertical',
    });
  });
});

// Ship: Hit() tests
describe('Ship: hit() (successful hits to vessel)', () => {
  test('Ship object can get hit', () => {
    const newShip = Ship(0, 3, [], false, 'vertical');
    newShip.hit(1);
    expect(newShip.hits).toEqual([1]);
  });

  test('Ship object can get hit twice', () => {
    const newShip = Ship(0, 3, [], false, 'vertical');
    newShip.hit(0);
    newShip.hit(1);
    expect(newShip.hits).toEqual([0, 1]);
  });

  test('Ship object can get hit four times', () => {
    const newShip = Ship(0, 4, [], false, 'vertical');
    newShip.hit(0);
    newShip.hit(1);
    newShip.hit(2);
    newShip.hit(3);
    expect(newShip.hits).toEqual([0, 1, 2, 3]);
  });

  test('Ship object will sort its hits in ascending order #1', () => {
    const newShip = Ship(0, 3, [], false, 'vertical');
    newShip.hit(2);
    newShip.hit(0);
    expect(newShip.hits).toEqual([0, 2]);
  });

  test('Ship object will sort its hits in ascending order #2', () => {
    const newShip = Ship(0, 4, [], false, 'vertical');
    newShip.hit(3);
    newShip.hit(1);
    expect(newShip.hits).toEqual([1, 3]);
  });
});

// Ship: isSunk() tests
describe('Ship: isSunk() (Correct number of hits to vessel))', () => {
  test('Ship object will sink on correct number of hits', () => {
    const newShip = Ship(0, 3, [0, 1, 2], false, 'vertical');
    expect(newShip.isSunk()).toBe(true);
  });

  test('Ship object will not sink on incorrect number of hits', () => {
    const newShip = Ship(0, 3, [0, 1], false, 'vertical');
    expect(newShip.isSunk()).toBe(false);
  });

  test('Ship object will result in being sunk after manual shots #1 (length 1)', () => {
    const newShip = Ship(0, 1, [], false, 'vertical');
    newShip.hit(0);
    expect(newShip.sunk).toBe(true);
  });

  test('Ship object will result in being sunk after manual shots #2 (length 2)', () => {
    const newShip = Ship(0, 2, [], false, 'vertical');
    newShip.hit(0);
    newShip.hit(1);
    expect(newShip.sunk).toBe(true);
  });

  test('Ship object will result in being sunk after manual shots #3 (length 4)', () => {
    const newShip = Ship(0, 4, [], false, 'vertical');
    newShip.hit(0);
    newShip.hit(2);
    newShip.hit(1);
    newShip.hit(3);
    expect(newShip.sunk).toBe(true);
  });
});

// Ship: Alignment tests
describe('Ship: Ship alignment', () => {
  test('Ship is initialized with vertical alignment', () => {
    const newShip = Ship(0, 4, [0], false, 'vertical');
    expect(newShip.alignment).toBe('vertical');
  });

  test('Ship is initialized with horizontal alignment', () => {
    const newShip = Ship(0, 4, [0], false, 'horizontal');
    expect(newShip.alignment).toBe('horizontal');
  });

  test('Ship will change alignment from vertical to horizontal', () => {
    const newShip = Ship(0, 1, [], false, 'vertical');
    newShip.changeAlignment();
    expect(newShip.alignment).toBe('horizontal');
  });

  test('Ship will change alignment from horizontal to vertical', () => {
    const newShip = Ship(0, 1, [], false, 'horizontal');
    newShip.changeAlignment();
    expect(newShip.alignment).toBe('vertical');
  });
});
