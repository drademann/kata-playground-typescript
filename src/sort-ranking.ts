export function sort(players: Player[]): Rank[] {
  players = players.sort((p1, p2) => p1.points - p2.points);
  return players.map(p => new Rank(p, 0));
}

export class Player {
  constructor(readonly name: string, readonly points: number) {}
}

export class Rank {
  constructor(readonly player: Player, readonly rank: number) {}
}
