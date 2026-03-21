# HandLend Architecture

HandLend is organized around business capabilities, not vendor-first folders. The product has three linked capabilities:

- `Mission funding`
- `Field proof`
- `Reporting and settlement`

## Layer Responsibilities

### Frontend: Next.js

- Render donor, coordinator, and operator interfaces
- Support wallet connection and contribution flows
- Provide mobile-friendly operator capture UI
- Keep timeline and settlement states understandable
- Support offline queue interaction for field work

### Backend: Python

- Serve as the product-readable source of truth
- Manage users, roles, missions, companies, operators, deliveries, and evidence
- Persist synced events and audit trails
- Normalize onchain events into timeline-friendly product states
- Orchestrate validation decisions from GenLayer

### Onchain: Avalanche + Escrow

- Accept and lock funding commitments
- Maintain settlement-related state
- Release or transfer value after validated conditions are met
- Emit events that backend can index for product reporting

### Validation Layer: GenLayer

- Score logistics companies for donor-facing summaries
- Evaluate evidence bundles after sync
- Return `accepted`, `requires_review`, or `rejected`
- Support dispute or review paths without moving funds directly

### Optional Liquidity Layer: Aave

- May support an operational advance or liquidity backstop
- Must remain outside the critical MVP execution path

## End-to-End Flow

```text
Donor chooses disaster and logistics company
  -> wallet commit to mission
  -> escrow locks funds on Avalanche
  -> operator records delivery evidence
  -> event stored locally if offline
  -> sync reaches backend
  -> GenLayer evaluates evidence bundle
  -> backend normalizes decision
  -> escrow settles on Avalanche
  -> backend indexes settlement event
  -> donor and operator see timeline milestones
```

## Actor-to-Screen Map

### Donor

- `D-01` disaster selection
- `D-02` logistics comparison
- `D-03` company profile with GenLayer analysis
- `D-04` wallet and contribution
- `D-05` reporting timeline

### Coordinator

- `C-01` legal representative registration
- `C-02` operational planning
- `C-03` operator management
- `C-04` operational and financial dashboard

### Operator

- `O-01` field delivery capture
- `O-02` settlement and operational closure

## Architecture Constraints

- Backend, not the wallet, is the default read model for product UX.
- Timeline is a first-class product capability, not an analytics afterthought.
- Operator capture is offline-first.
- User-facing states must never rely on raw blockchain wording alone.
