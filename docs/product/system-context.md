# System Context

## Actors

1. Donor
2. Coordinator
3. Operator
4. Blockchain network
5. Validation layer
6. Wallet provider

## High-Level Journeys

### Donor Journey

1. Explore active disasters
2. Compare logistics companies
3. Review company profile and GenLayer summary
4. Connect wallet and commit funds
5. Follow reporting timeline and evidence trail

### Coordinator Journey

1. Register legal and company profile
2. Publish operational plan
3. Manage field operators
4. Monitor mission progress, evidence, and funds

### Operator Journey

1. Open field delivery screen
2. Enter or scan delivery data
3. Capture QR, GPS, and timestamp
4. Save locally if offline
5. Sync pending events later
6. Review validation and settlement status

## Responsibility By Layer

### Frontend

- present donor decision-making interfaces
- provide wallet interactions
- offer coordinator admin UX
- provide operator field UI
- support offline queue management
- render readable timeline and settlement states

### Backend

- manage users, roles, missions, deliveries, evidence, and timeline
- validate permissions and request integrity
- persist domain state
- accept synced delivery events
- orchestrate validation calls
- index onchain events into product-readable form

### Onchain

- lock funds in escrow
- record funding commitments
- emit settlement-related events
- release or transfer value according to validated state

### Validation Layer

- analyze logistics companies for donor-facing confidence summaries
- evaluate evidence plausibility after delivery sync
- return structured decisions consumable by backend rules

## Design Principle

Users should not need to understand blockchain terminology to understand mission status.
