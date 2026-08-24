export type ClaimInput = {
  userStake: bigint;
  totalPool: bigint;
  winningPool: bigint;
};

export function calculateClaim(
  input: ClaimInput,
): bigint {
  if (input.userStake <= 0n) {
    return 0n;
  }

  if (input.totalPool <= 0n) {
    return 0n;
  }

  if (input.winningPool <= 0n) {
    return 0n;
  }

  if (
    input.winningPool >
    input.totalPool
  ) {
    throw new Error(
      "invalid winning pool",
    );
  }

  return (
    input.userStake *
    input.totalPool /
    input.winningPool
  );
}

export function hasClaim(
  input: ClaimInput,
): boolean {
  return calculateClaim(input) > 0n;
}

export function claimRatio(
  input: ClaimInput,
): string {
  if (input.winningPool === 0n) {
    return "0";
  }

  return `${input.userStake}/${input.winningPool}`;
}
