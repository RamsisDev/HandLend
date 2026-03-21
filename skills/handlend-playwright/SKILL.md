---
name: handlend-playwright
description: >
  Verify HandLend UI, actor journeys, and browser flows using Playwright with the real UX contract.
  Trigger: When a task changes UI, navigation, forms, actor flows, or screen behavior and needs browser verification.
license: MIT
metadata:
  author: HandLend
  version: "1.0"
---

# HandLend Playwright Verification

Use this skill together with the global `playwright` skill. This project skill adds HandLend-specific rules for when and how browser testing must happen.

## When To Use

- Donor flow changes on `D-01` through `D-05`
- Coordinator flow changes on `C-01` through `C-04`
- Operator flow changes on `O-01` or `O-02`
- Any change to navigation, forms, timelines, wallet steps, sync feedback, or visible state transitions

## Required Inputs

Before running browser verification, identify:

- actor affected: `Donor`, `Coordinator`, or `Operator`
- screen IDs affected
- relevant slice from `SDD Handlend.md`
- UX expectations from `UX Spec _ Product Design Document.md`
- linked `openspec` change name and target `verify-report`

## Browser Verification Workflow

1. Load the global `playwright` skill first.
2. Open a real browser session.
3. Navigate through the affected actor flow.
4. Validate behavior against `UX Spec _ Product Design Document.md`, not only against implementation intent.
5. Check that any new UI uses `Ant Design` patterns and still matches the UX contract.
6. Record concise evidence for the `verify-report`:
   - actor
   - screen IDs
   - scenario executed
   - browser result
   - UX mismatches, if any
7. Update `progress.md` with the latest verification outcome.

## Minimum Assertions By Actor

### Donor

- Selected disaster context remains visible through funding
- Company selection and profile details remain understandable
- Funding state transitions are visible
- Timeline language stays product-readable

### Coordinator

- Registration, planning, operator CRUD, and dashboard states are understandable
- Alerts and operational data remain actionable
- Forms use clear validation and visible status feedback

### Operator

- Delivery capture is fast and legible
- GPS and sync states remain visible
- Offline queue states are understandable
- Settlement state remains sequential and product-readable

## Reporting Rules

- Treat broken navigation, blocked submission, missing critical feedback, or UX behavior that contradicts the UX spec as verification failures.
- If Playwright evidence fails for the changed flow, the slice cannot move forward.
- Reference the resulting evidence in `openspec/changes/{change-name}/verify-report.md` and `progress.md`.
