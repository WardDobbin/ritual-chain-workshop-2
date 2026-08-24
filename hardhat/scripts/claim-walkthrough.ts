import {
  calculateClaim,
  ClaimInput,
} from "../utils/claim-calculator";

const users: ClaimInput[] = [
  {
    userStake: 10n,
    totalPool: 100n,
    winningPool: 50n,
  },
  {
    userStake: 20n,
    totalPool: 100n,
    winningPool: 50n,
  },
  {
    userStake: 5n,
    totalPool: 100n,
    winningPool: 50n,
  },
];

console.log("Claim walkthrough");
console.log("=================");

let calculatedTotal = 0n;

users.forEach(
  (user, index) => {
    const claim =
      calculateClaim(user);

    calculatedTotal += claim;

    console.log(
      `user ${index + 1}`,
    );

    console.log(
      "stake:",
      user.userStake.toString(),
    );

    console.log(
      "claim:",
      claim.toString(),
    );

    console.log("");
  },
);

console.log(
  "calculated claims:",
  calculatedTotal.toString(),
);
