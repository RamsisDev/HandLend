# Design: Logistics Operations

## Technical Approach

Use coordinator-facing Next.js forms and dashboards for registration, planning, and team management, plus a mobile-friendly operator UI backed by a local sync queue and backend ingestion pipeline.

## Key Decisions

- Registration and planning data are product records managed by backend APIs.
- Operator capture favors short forms, scan actions, and persistent connection status.
- Offline queue state is visible and actionable from the capture screen.

## Data Flow

```text
C-01 register company
  -> C-02 publish plan
  -> C-03 manage operators
  -> operator uses O-01
  -> local queue stores pending event
  -> sync submits delivery event to backend
  -> backend persists event and routes validation
```

## Interfaces

- representative verification status
- structured planning form
- operator roster and state controls
- delivery capture form with QR, GPS, and sync queue indicators
