import { Player, sort } from "../src/sort-ranking";

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
    expect(rankings.map(r => r.player.name)).to.deep.equal([
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

    expect(rankings.map(r => r.position)).to.deep.equal([1, 2, 3]);
  });

  it("should apply same rank to players with same points", () => {
    let players = [
      new Player("Andy", 5),
      new Player("Bruno", 5),
      new Player("Carl", 10)
    ];

    let rankings = sort(players);

    expect(rankings.map(r => r.position)).to.deep.equal([1, 2, 2]);
  });

  it("should skip ranks after applying same rank", () => {
    let players = [
      new Player("Andy", 10),
      new Player("Bruno", 10),
      new Player("Carl", 20),
      new Player("Hans", 5)
    ];

    let rankings = sort(players);

    expect(rankings).to.be.length(4);
    expect(rankings[3].position).to.deep.equal(4);
  });
});
