# Design: Reporting Timeline

## Technical Approach

Build a backend-normalized event stream that maps mission, evidence, validation, and settlement data into UX-readable timeline objects consumed by donor, coordinator, and operator interfaces.

## Key Decisions

- Timeline entries are product events, not raw chain events.
- Reporting should unify data from backend records, validation decisions, and indexed settlement events.
- `O-02` focuses on comprehensible operational closure, not contract debugging.

## Data Flow

```text
delivery event
  -> sync to backend
  -> GenLayer validation decision
  -> escrow settlement event on Avalanche
  -> backend normalizes states
  -> D-05, C-04, and O-02 render timeline and closure context
```

## Interfaces

- timeline event object with actor, timestamp, status, evidence pointer, and mission context
- settlement milestone view for operator closure
- alert and inconsistency summary for coordinator dashboard
