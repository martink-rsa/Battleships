import { Gameboard } from '../game/gameboard/gameboard';
import { Ship } from '../game/ship/ship';
import { Player } from '../game/player/player';

// Player: Player Object Creation
describe('Player: Human player is created', () => {
  test('Basic Player 1 Human Player created', () => {
    const newPlayer1 = Player(0, 'human', 'default', 'blue');
    expect(newPlayer1).toMatchObject({
      id: 0,
      playerType: 'human',
      theme: 'default',
      color: 'blue',
    });
  });
  test('Basic Player 1 Computer Player created', () => {
    const newPlayer1 = Player(0, 'computer', 'default', 'blue');
    expect(newPlayer1).toMatchObject({
      id: 0,
      playerType: 'computer',
      theme: 'default',
      color: 'blue',
    });
  });
  test('Basic Player 1 Human and Player 2 Computer created', () => {
    const newPlayer1 = Player(0, 'human', 'default', 'blue');
    const newPlayer2 = Player(1, 'computer', 'default', 'red');

    expect(newPlayer1).toMatchObject({
      id: 0,
      playerType: 'human',
      theme: 'default',
      color: 'blue',
    });
    expect(newPlayer2).toMatchObject({
      id: 1,
      playerType: 'computer',
      theme: 'default',
      color: 'red',
    });
  });
});

// Player making an attack (makeAttack())
describe('Player: madeAttack() (Player makes attack to grid) ', () => {
  // Single attacks
  test('Player 1 makes an attack successfully to grid #1', () => {
    const newPlayer1 = Player(0, 'human', 'default', 'blue');
    const newGameboard2 = Gameboard(0, 8);
    newPlayer1.makeAttack(newGameboard2, [0, 0]);
    expect(newGameboard2.grid[0][0]).toBe('X');
    expect(newPlayer1.attacksMade).toEqual([[0, 0]]);
  });
  test('Player 1 makes an attack successfully to grid #2', () => {
    const newPlayer1 = Player(0, 'human', 'default', 'blue');
    const newGameboard2 = Gameboard(0, 8);
    newPlayer1.makeAttack(newGameboard2, [3, 6]);
    expect(newGameboard2.grid[3][6]).toBe('X');
    expect(newPlayer1.attacksMade).toEqual([[3, 6]]);
  });

  // Multiple attacks
  test('Player 1 makes attacks successfully to grid #1', () => {
    const newPlayer1 = Player(0, 'human', 'default', 'blue');
    const newGameboard2 = Gameboard(0, 8);
    newPlayer1.makeAttack(newGameboard2, [0, 0]);
    newPlayer1.makeAttack(newGameboard2, [1, 0]);
    newPlayer1.makeAttack(newGameboard2, [2, 0]);
    newPlayer1.makeAttack(newGameboard2, [3, 0]);
    const attacks = [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ];
    expect(newGameboard2.grid[0][0]).toBe('X');
    expect(newGameboard2.grid[1][0]).toBe('X');
    expect(newGameboard2.grid[2][0]).toBe('X');
    expect(newGameboard2.grid[3][0]).toBe('X');
    expect(newPlayer1.attacksMade).toEqual(attacks);
  });
  test('Player 1 makes attacks successfully to grid #2', () => {
    const newPlayer1 = Player(0, 'human', 'default', 'blue');
    const newGameboard2 = Gameboard(0, 8);
    newPlayer1.makeAttack(newGameboard2, [4, 3]);
    newPlayer1.makeAttack(newGameboard2, [4, 4]);
    newPlayer1.makeAttack(newGameboard2, [4, 5]);
    newPlayer1.makeAttack(newGameboard2, [4, 6]);
    const attacks = [
      [4, 3],
      [4, 4],
      [4, 5],
      [4, 6],
    ];
    expect(newGameboard2.grid[4][3]).toBe('X');
    expect(newGameboard2.grid[4][4]).toBe('X');
    expect(newGameboard2.grid[4][5]).toBe('X');
    expect(newGameboard2.grid[4][6]).toBe('X');
    expect(newPlayer1.attacksMade).toEqual(attacks);
  });

  // Multiple attacks from multiple players
  test('Player 1 makes attacks successfully to grid #2', () => {
    const newPlayer1 = Player(0, 'human', 'default', 'blue');
    const newPlayer2 = Player(1, 'computer', 'default', 'blue');
    const newGameboard1 = Gameboard(0, 8);
    const newGameboard2 = Gameboard(0, 8);
    newPlayer1.makeAttack(newGameboard2, [4, 3]);
    newPlayer2.makeAttack(newGameboard1, [0, 0]);
    newPlayer1.makeAttack(newGameboard2, [4, 4]);
    newPlayer2.makeAttack(newGameboard1, [0, 1]);
    newPlayer1.makeAttack(newGameboard2, [4, 5]);
    newPlayer2.makeAttack(newGameboard1, [0, 2]);
    newPlayer1.makeAttack(newGameboard2, [4, 6]);
    newPlayer2.makeAttack(newGameboard1, [0, 3]);
    const attacks1 = [
      [4, 3],
      [4, 4],
      [4, 5],
      [4, 6],
    ];
    const attacks2 = [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ];
    expect(newGameboard2.grid[4][3]).toBe('X');
    expect(newGameboard1.grid[0][0]).toBe('X');
    expect(newGameboard2.grid[4][4]).toBe('X');
    expect(newGameboard1.grid[0][1]).toBe('X');
    expect(newGameboard2.grid[4][5]).toBe('X');
    expect(newGameboard1.grid[0][2]).toBe('X');
    expect(newGameboard2.grid[4][6]).toBe('X');
    expect(newGameboard1.grid[0][3]).toBe('X');
    expect(newPlayer1.attacksMade).toEqual(attacks1);
    expect(newPlayer2.attacksMade).toEqual(attacks2);
  });
});
