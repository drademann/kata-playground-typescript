import { sort, Player, Rank } from "../src/sort-ranking";

import { expect } from "chai";
import "mocha";

/*
 * Requirements
 *
 * Provide a function that sorts rankings by points.
 * - Equal points get the same rank
 * - Equal ranks are sorted by name
 */

describe.only("sorting players by points", () => {
  it("should sort by points", () => {
    let players = [
      new Player("Andy", 10),
      new Player("Bruno", 5),
      new Player("Carl", 20)
    ];

    let rankings = sort(players);

    expect(rankings).to.be.of.length(3);
    expect(rankings.map(r => r.player.name)).to.deep.equal([
      "Bruno",
      "Andy",
      "Carl"
    ]);
  });
});

describe.only("applying rank", () => {
  it("should apply rank after sorting", () => {
    let players = [
      new Player("Andy", 10),
      new Player("Bruno", 5),
      new Player("Carl", 20)
    ];

    let rankings = sort(players);

    expect(rankings.map(r => r.rank)).to.deep.equal([1, 2, 3]);
  });
});
