import { sort, Player } from "../src/sort-ranking";

import { expect } from "chai";
import "mocha";

/*
 * Requirements
 *
 * Provide a function that sorts rankings by points.
 * - Equal points get the same rank
 * - Equal ranks are sorted by name
 */

describe("sorting players by points", () => {
  it("should sort by points", () => {
    let players = [
      new Player("Andy", 10),
      new Player("Bruno", 5),
      new Player("Carl", 20)
    ];

    let rankings = sort(players);

    expect(rankings).to.be.of.length(3);
    expect(rankings.map(rp => rp.name)).to.deep.equal([
      "Carl",
      "Andy",
      "Bruno"
    ]);
  });
});

describe("applying rank", () => {
  it("should apply rank after sorting", () => {
    let players = [
      new Player("Andy", 10),
      new Player("Bruno", 5),
      new Player("Carl", 20)
    ];

    let rankings = sort(players);

    expect(rankings.map(r => r.rank)).to.deep.equal([1, 2, 3]);
  });
  it("should apply same rank to players having same points", () => {
    let players = [
      new Player("Andy", 10),
      new Player("Anne", 10),
      new Player("Bruno", 5),
      new Player("Carl", 20)
    ];

    let rankings = sort(players);

    expect(rankings.map(r => r.rank)).to.deep.equal([1, 2, 2, 4]);
  });
  it("should sort players given same rank by name", () => {
    let players = [
      new Player("Anne", 10),
      new Player("Andy", 10),
      new Player("Bruno", 5),
      new Player("Carl", 20),
      new Player("Ben", 20)
    ];

    let rankings = sort(players);

    expect(rankings.map(r => r.name)).to.deep.equal([
      "Ben",
      "Carl",
      "Andy",
      "Anne",
      "Bruno"
    ]);
  });
});
