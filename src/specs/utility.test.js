import { sortArrAsc, sortArrDesc } from '../game/utility';

describe('Utility', () => {
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
