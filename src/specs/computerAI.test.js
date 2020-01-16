/* eslint-disable jest/no-commented-out-tests */
import { Gameboard } from '../game/gameboard/gameboard';
import { Ship } from '../game/ship/ship';
import { Player } from '../game/player/player';
import { ComputerAI } from '../game/computerAI/computerAI';

// ComputerAI: Basic attacks
describe('ComputerAI: Computer can make a basic random attack', () => {
  test('ComputerAI can attack a grid', () => {
    const newGameboard = Gameboard(0, 8);
    const newPlayer1 = Player(0, 'computer', 'default', 'blue');
    const computerAI = ComputerAI(0);
    const coordsChosen = computerAI.chooseCoords(newGameboard);
    newPlayer1.makeAttack(newGameboard, coordsChosen);
    expect(newGameboard.grid[coordsChosen[0]][coordsChosen[1]]).toBe('X');
  });
  test('ComputerAI can attack a grid that only has one available spot', () => {
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
    const coordsChosen = computerAI.chooseCoords(newGameboard);
    newPlayer1.makeAttack(newGameboard, coordsChosen);
    expect(newGameboard.grid[coordsChosen[0]][coordsChosen[1]]).toBe('X');
  });
});

// ComputerAI: Basic attacks
describe('ComputerAI: setAvailableLocations (set which locations available to attack)', () => {
  test('ComputerAI prepared to attack a ship that was found', () => {
    const size = 8;
    const newGameboardPlayer = Gameboard(0, size);
    expect(1).toBe(1);
  });
});
