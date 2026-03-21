# Spec: Logistics Operations

## Requirements

### Requirement: Coordinator onboarding

The system SHALL support legal representative onboarding for logistics companies.

#### Scenario: Coordinator registers company

- GIVEN a company wants to operate in HandLend
- WHEN the coordinator completes `C-01`
- THEN the platform stores a representative registration state with verification status

### Requirement: Operational planning

The system SHALL allow a coordinator to publish an operational plan.

#### Scenario: Coordinator submits plan

- GIVEN the coordinator is eligible to proceed
- WHEN the coordinator completes `C-02`
- THEN the platform stores planning inputs tied to a disaster and company

### Requirement: Operator management

The system SHALL let a coordinator manage field operators.

#### Scenario: Coordinator maintains operator roster

- GIVEN the coordinator is in `C-03`
- WHEN the coordinator creates, edits, activates, or disables an operator
- THEN the operator roster updates without ambiguity about state

### Requirement: Offline-safe field capture

The system MUST let operators register delivery evidence under poor connectivity.

#### Scenario: Operator records while offline

- GIVEN the operator is on `O-01` without network
- WHEN the operator captures QR, GPS, timestamp, and lot data
- THEN the event is stored in the sync queue until transmission is available
