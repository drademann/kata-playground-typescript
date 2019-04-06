export function sort(players: Player[]): Rank[] {
  players.sort((p1, p2) => p2.points - p1.points);
  let ranks: Rank[] = [];
  let rank = 0;
  for (let i = 0; i < players.length; i++) {
    rank += 1;
    if (rank == 1 || players[i].points < players[i - 1].points) {
      ranks.push(new Rank(players[i], rank));
    } else {
      ranks.push(new Rank(players[i], ranks[ranks.length - 1].rank));
    }
  }
  return ranks;
}

export class Player {
  constructor(readonly name: string, readonly points: number) {}
}

export class Rank {
  constructor(readonly player: Player, readonly rank: number) {}
}
