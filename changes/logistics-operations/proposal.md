# Proposal: Logistics Operations

## Intent

Define the coordinator and operator operational slice that governs company registration, operational planning, operator management, field capture, and offline-safe sync behavior.

## In Scope

- coordinator flow `C-01` to `C-04`
- operator flow `O-01`
- legal/company registration and operational planning
- operator CRUD and field capture
- sync queue and offline-safe event handling

## Out of Scope

- final settlement dashboard analytics beyond MVP needs
- non-essential workforce optimization features

## Actor and Screen Coverage

- `Coordinator`, `Operator`
- `C-01`, `C-02`, `C-03`, `C-04`, `O-01`

## Success Criteria

- a coordinator can define the company and mission execution context
- an operator can capture delivery data with minimal friction
- offline queue behavior is explicit and trustworthy
