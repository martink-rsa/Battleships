import Game from '../game/game';
import Gameboard from '../game/gameboard/gameboard';
import Ship from '../game/ship/ship';
import Player from '../game/player/player';
import ComputerAI from '../game/computerAI/computerAI';

// Game should:
//
//  Have states: Placement and Game itself
//  Have Loading Screen, Placement Screen, Game Screen, Game over Screen
//
//  1.  Set the number of players playing a game (default this to 2, player can't choose)
//  2.  Allow the main player to choose:
//  1.1     If Player 1 is Human or Computer
//  1.2     If Player 2 is Human or Computer
//  3.  Take turns between players

describe('Game: A new game can be started', () => {
  test('New game with two human players', () => {
    const player1 = Player(0, 'human', 'default', 'blue');
    const player2 = Player(1, 'human', 'default', 'blue');
    const players = [player1, player2];
    const game = Game(players);
    expect(game.players).toStrictEqual([player1, player2]);
  });
});
