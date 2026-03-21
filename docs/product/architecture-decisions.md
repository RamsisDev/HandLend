# Architecture Decisions

## ADR-001: Organize around business capabilities

HandLend is structured around mission funding, field proof, and reporting rather than around blockchain vendors or framework folders.

## ADR-002: Backend is the product-readable source of truth

Onchain data is authoritative for settlement, but the frontend should read normalized state from the backend.

## ADR-003: Operator experience is offline-first

Field delivery must work under unstable connectivity and support sync after capture.

## ADR-004: GenLayer does not move funds

Validation intelligence produces decisions or recommendations, while financial execution remains in escrow logic on Avalanche.

## ADR-005: Aave is optional in MVP

Aave may support an operational advance or liquidity narrative, but the MVP demo path must succeed without deep Aave coupling.

## ADR-006: Timeline is a first-class product capability

Every meaningful domain state should map to a timeline event visible to the donor or operator.

## ADR-007: Use product language for settlement

The UI should expose understandable milestones instead of raw contract states.
