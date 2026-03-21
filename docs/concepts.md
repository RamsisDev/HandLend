# HandLend Documentation Contracts

## Product-First Writing

HandLend documentation must describe what the product means to users before it explains the underlying technical mechanism.

- Prefer `mission`, `delivery`, `evidence`, and `settlement state`
- Avoid forcing readers to interpret raw contract or chain terminology

## Official Vocabulary

Use the terms defined in [`docs/product/domain-glossary.md`](product/domain-glossary.md) consistently.

The most important distinctions are:

- `Donation` is the donor-facing term.
- `Funding Commitment` is the domain/financial term.
- `Escrow` is conditional release logic, not a separate product.
- `Operational Advance` is optional and distinct from final settlement.
- `Margin Transfer` is the post-validation transfer outcome.

## UX Traceability Rule

Every artifact should be traceable to:

- at least one actor: `Donor`, `Coordinator`, `Operator`
- one or more screens when applicable: `D-*`, `C-*`, `O-*`

## Stack Traceability Rule

Every technical change should preserve these responsibilities:

- `Avalanche`: execution and settlement
- `Escrow`: funds locked and released by rule
- `GenLayer`: semantic analysis and validation
- `Aave`: optional liquidity support, not required for MVP

## Product State Language

Use these canonical milestone labels whenever a user-facing state is described:

- `delivery recorded`
- `evidence validated`
- `settlement in progress`
- `advance deducted`
- `margin transferred`
- `operation closed`

## MVP Scope Principle

The initial roadmap should stay within three vertical slices:

- mission funding and proof
- logistics operations
- reporting timeline

Anything beyond those slices should be called out as future work rather than silently folded into MVP.
