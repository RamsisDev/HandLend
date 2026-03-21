# Design: Mission Funding and Proof

## Technical Approach

Use Next.js to render donor flow screens, Python backend to model mission funding commitments and normalized states, Avalanche escrow for locking and settlement, and GenLayer output as donor-readable company and validation context.

## Key Decisions

- Mission is the core aggregate joining disaster, logistics company, donor funding, and settlement state.
- Wallet confirmation does not become the frontend source of truth; backend publishes normalized mission state.
- Timeline language uses product milestones rather than raw contract state names.

## Data Flow

```text
D-01 disaster select
  -> D-02 company comparison
  -> D-03 company profile with GenLayer summary
  -> D-04 wallet contribution
  -> escrow lock on Avalanche
  -> backend indexes commitment
  -> D-05 timeline renders funding and downstream proof states
```

## Interfaces

- disaster list with urgency metadata
- company comparison view with trust and capacity summary
- mission funding commitment record
- donor timeline event feed
