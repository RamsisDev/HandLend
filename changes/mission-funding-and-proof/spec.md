# Spec: Mission Funding and Proof

## Requirements

### Requirement: Disaster selection context

The system SHALL let a donor choose a disaster context before selecting a logistics company.

#### Scenario: Donor enters the flow

- GIVEN the donor opens the funding journey
- WHEN the donor lands on `D-01`
- THEN the system shows active disasters with urgency and location context

### Requirement: Comparable logistics choice

The system SHALL present logistics companies in a donor-readable comparison flow.

#### Scenario: Donor reviews companies

- GIVEN a disaster has been selected
- WHEN the donor opens `D-02`
- THEN the system shows company trust, capacity, coverage, and summary context

### Requirement: Mission-bound funding commitment

The system MUST attach a contribution to one disaster and one logistics company.

#### Scenario: Donor confirms funding

- GIVEN the donor selected a company on `D-03`
- WHEN the donor confirms amount and wallet action on `D-04`
- THEN the system records a mission funding commitment bound to that mission

### Requirement: Post-funding transparency

The system SHALL expose a readable timeline after funding.

#### Scenario: Donor opens reporting

- GIVEN the donor completed a contribution
- WHEN the donor opens `D-05`
- THEN the system shows timeline events and evidence access using product language
