# Artifact Source of Truth

HandLend uses repository files as the visible source of truth for product and implementation intent.

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

## Update Rules

- Update product docs when a change affects baseline product behavior.
- Update a change folder when refining how one MVP slice should be built.
- Do not leave implementation intent only in chat or PR discussion.
- If a PDF-driven rule changes, mirror it in repo artifacts the same day.

## Conflict Resolution

If artifacts disagree:

1. The three PDFs win.
2. Product docs win over slice-level artifacts.
3. Spec and design should be updated before implementation proceeds.
