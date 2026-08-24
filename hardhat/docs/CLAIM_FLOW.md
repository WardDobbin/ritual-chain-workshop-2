# Claim Flow

The payout design was easier for me to understand after looking at one
user at a time.

Instead of:

1. find every winner
2. calculate every payout
3. send everything in one transaction

the contract lets a winner claim their own share.

The calculation is based on:

user stake
     x
total pool
     /
winning pool

This also avoids a loop over all winners.

One thing I noticed is that integer division can leave a very small amount
of dust.
