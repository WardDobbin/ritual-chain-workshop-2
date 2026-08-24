import { expect } from "chai";

import {
  calculateClaim,
  hasClaim,
  claimRatio,
} from "../utils/claim-calculator";

describe("Claim calculator", function () {
  it("calculates a normal claim", function () {
    expect(
      calculateClaim({
        userStake: 10n,
        totalPool: 100n,
        winningPool: 50n,
      }),
    ).to.equal(20n);
  });

  it("returns zero for zero stake", function () {
    expect(
      calculateClaim({
        userStake: 0n,
        totalPool: 100n,
        winningPool: 50n,
      }),
    ).to.equal(0n);
  });

  it("returns zero with no winning pool", function () {
    expect(
      calculateClaim({
        userStake: 10n,
        totalPool: 100n,
        winningPool: 0n,
      }),
    ).to.equal(0n);
  });

  it("rejects an impossible winning pool", function () {
    expect(() =>
      calculateClaim({
        userStake: 10n,
        totalPool: 50n,
        winningPool: 100n,
      }),
    ).to.throw();
  });

  it("detects a positive claim", function () {
    expect(
      hasClaim({
        userStake: 10n,
        totalPool: 100n,
        winningPool: 50n,
      }),
    ).to.equal(true);
  });

  it("returns a simple ratio", function () {
    expect(
      claimRatio({
        userStake: 25n,
        totalPool: 100n,
        winningPool: 50n,
      }),
    ).to.equal("25/50");
  });

  it("handles integer division", function () {
    expect(
      calculateClaim({
        userStake: 7n,
        totalPool: 101n,
        winningPool: 60n,
      }),
    ).to.equal(11n);
  });
});
