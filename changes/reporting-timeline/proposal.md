# Proposal: Reporting Timeline

## Intent

Define the reporting slice that converts validation and settlement into readable timeline events for donors, coordinators, and operators.

## In Scope

- donor reporting screen `D-05`
- operator closure screen `O-02`
- timeline event vocabulary
- validation and settlement state translation

## Out of Scope

- generic analytics dashboards not tied to mission status
- chain-native event viewers exposed directly to end users

## Actor and Screen Coverage

- `Donor`, `Operator`, `Coordinator`
- `D-05`, `O-02`, `C-04`

## Success Criteria

- timeline events explain what happened, who acted, when it happened, and what evidence exists
- settlement states are understandable without raw contract terms
- coordinator and operator views can act on alerts or review states
