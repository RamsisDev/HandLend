# Artifact Source of Truth

HandLend uses repository files as the visible source of truth for product and implementation intent.

The standard persistence backend for ongoing work is `openspec`, with `progress.md` as the top-level human-readable execution summary.

## Primary Artifact Layers

### Product Baseline

- `docs/product/hackathon-vision.md`
- `docs/product/domain-glossary.md`
- `docs/product/system-context.md`
- `docs/product/architecture-decisions.md`

These files define the product model and must stay aligned with the PDFs.

### Active Change Sets

- `changes/mission-funding-and-proof/`
- `changes/logistics-operations/`
- `changes/reporting-timeline/`

These folders define current implementation slices through proposal, spec, design, and tasks artifacts.

### Openspec Runtime Artifacts

- `openspec/config.yaml`
- `openspec/changes/{change-name}/tasks.md`
- `openspec/changes/{change-name}/verify-report.md`

These files are the persisted workflow artifacts for interrupted and resumed implementation. They are the default working backend for apply and verify.

### Visible Progress

- `progress.md`

This file summarizes the current status of each slice, the actor and screen scope, the linked `openspec` artifact, and the latest verification evidence.

## Update Rules

- Update product docs when a change affects baseline product behavior.
- Update a change folder when refining how one MVP slice should be built.
- Update `openspec` artifacts as work progresses and verification completes.
- Update `progress.md` every time a slice changes implementation or verification state.
- Do not leave implementation intent only in chat or PR discussion.
- If a PDF-driven rule changes, mirror it in repo artifacts the same day.
- Do not open a new feature slice until the active slice has a recorded `verify-report` with verdict `PASS`.

## Conflict Resolution

If artifacts disagree:

1. The three PDFs win.
2. `SDD Handlend.md` and `UX Spec _ Product Design Document.md` guide sequence and UI behavior for implementation work.
3. Product docs win over slice-level artifacts.
4. `openspec` runtime artifacts and `progress.md` must be updated before implementation proceeds to the next slice.
5. Spec and design should be updated before implementation proceeds.
