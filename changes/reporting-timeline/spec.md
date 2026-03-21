# Spec: Reporting Timeline

## Requirements

### Requirement: Timeline as primary reporting surface

The system SHALL expose mission progress through chronological timeline events.

#### Scenario: Donor reviews mission history

- GIVEN a mission has at least one state transition
- WHEN the donor opens `D-05`
- THEN the system shows timeline entries with status, actor, time, and evidence access

### Requirement: Product-readable settlement language

The system MUST translate settlement logic into simple milestones.

#### Scenario: Operator reviews closure

- GIVEN a validated delivery has reached settlement processing
- WHEN the operator opens `O-02`
- THEN the system shows milestones such as `evidence validated` and `margin transferred`

### Requirement: Review-aware reporting

The system SHOULD expose review and exception states without hiding uncertainty.

#### Scenario: Evidence requires review

- GIVEN a delivery event receives `requires_review`
- WHEN reporting surfaces render the mission state
- THEN users see a review state instead of a false completion signal
