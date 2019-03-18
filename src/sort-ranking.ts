export function sort(players: Player[]): RankedPlayer[] {
  function byRankedPlayers(rp1: RankedPlayer, rp2: RankedPlayer): number {
    return rp1.compareTo(rp2);
  }

  let rankedPlayers = players
    .map(p => new RankedPlayer(p))
    .sort(byRankedPlayers);
  rankedPlayers.reduce(toApplyRank);
  return rankedPlayers;
}

export class Player {
  constructor(readonly name: string, readonly points: number) {}
}

export class RankedPlayer extends Player {
  rank: number = 1;

  constructor(player: Player) {
    super(player.name, player.points);
  }

  compareTo(other: RankedPlayer): number {
    if (this.points === other.points) {
      return this.name.localeCompare(other.name);
    }
    return other.points - this.points;
  }
}

function toApplyRank(
  rp1: RankedPlayer,
  rp2: RankedPlayer,
  position: number
): RankedPlayer {
  if (rp2.points === rp1.points) {
    rp2.rank = rp1.rank;
  } else {
    rp2.rank = position + 1;
  }
  return rp2;
}
