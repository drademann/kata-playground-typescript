export function sort(players: Player[]): Rank[] {
  players.sort((p1, p2) => p2.points - p1.points);
  let ranks: Rank[] = [];
  for (let index = 0; index < players.length; index++) {
    ranks.push(new Rank(players[index], ranks[index - 1]));
  }
  return ranks;
}

export class Player {
  constructor(readonly name: string, readonly points: number) {}
}

export class Rank {
  readonly position: number;

  constructor(readonly player: Player, readonly previousRank: Rank) {
    this.position = this.calculatePosition();
  }

  private calculatePosition(): number {
    if (this.isFirst()) {
      return 1;
    } else if (this.hasSameRank()) {
      return this.previousRank.position;
    }
    return this.previousRank.position + 1 + this.skippedPositions;
  }

  private isFirst() {
    return this.previousRank === undefined;
  }

  private hasSameRank() {
    return this.previousRank.player.points === this.player.points;
  }

  private get skippedPositions(): number {
    let skippedRanks = 0;
    let rp1 = this.previousRank;
    let rp2 = rp1.previousRank;
    while (rp2 && rp1.position === rp2.position) {
      skippedRanks++;
      rp1 = rp2;
      rp2 = rp2.previousRank;
    }
    return skippedRanks;
  }
}
