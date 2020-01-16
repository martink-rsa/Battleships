import { sortArrAsc, sortArrDesc, genRandNum } from '../game/utility/utility';

describe('Utility: Sort array values', () => {
  test('Sort Ascending: Sorts numbers in ascending order', () => {
    expect(sortArrAsc([-1, 0, -11, 11, 1, 5, 25, 10])).toStrictEqual([
      -11,
      -1,
      0,
      1,
      5,
      10,
      11,
      25,
    ]);
  });

  test('Sort Descending: Sorts numbers in descending order', () => {
    expect(sortArrDesc([-1, 0, -11, 11, 1, 5, 25, 10])).toStrictEqual([
      25,
      11,
      10,
      5,
      1,
      0,
      -1,
      -11,
    ]);
  });
});

describe('Utility: Generate random number', () => {
  test('Generates a random number between 1 and 2', () => {
    const randNum = genRandNum(1, 2);
    expect(randNum).toBeGreaterThanOrEqual(1);
    expect(randNum).toBeLessThanOrEqual(2);
  });
  test('Generates a random number between 1 and 3', () => {
    const randNum = genRandNum(1, 3);
    expect(randNum).toBeGreaterThanOrEqual(1);
    expect(randNum).toBeLessThanOrEqual(3);
  });
});
