# Contributor Workspace Guide

This repository is documentation-led. Contributors are expected to align work with the HandLend PDFs before changing code or product artifacts.

## Before Changing Anything

Read, in order:

1. `README.md`
2. `AGENTS.md`
3. `SDD Handlend.md`
4. `UX Spec _ Product Design Document.md`
5. `docs/product/hackathon-vision.md`
6. `docs/product/domain-glossary.md`
7. `progress.md`
8. the relevant `changes/*` artifact set or `openspec/changes/*` artifact set

## How To Start Work

- Use `sdd-explore` for discovery and gap analysis.
- Use `sdd-propose`, `sdd-spec`, `sdd-design`, and `sdd-tasks` to extend the roadmap.
- Use `openspec/config.yaml` as the default persistence and workflow rules source.
- Use `sdd-apply` only after proposal, spec, design, and tasks exist or are intentionally updated.
- For UI work, plan with `Ant Design` only and verify the pattern against `UX Spec _ Product Design Document.md`.
- For UI, navigation, form, and actor-flow work, run Playwright verification before declaring the slice complete.
- Update `progress.md` when implementation or verification status changes.
- Do not start a new feature if the previous feature lacks a `PASS` `verify-report`.

## Required Inputs For Any Change

Every issue, proposal, or PR should identify:

- actor impacted
- affected flow
- affected screen IDs if relevant
- stack area touched
- whether the change touches escrow, validation, timeline, or offline behavior

## Repo Layout

```text
docs/product/        product source of truth
docs/*.md            supporting architecture and workflow rules
changes/             active SDD slices for HandLend MVP
openspec/            persisted SDD config and change artifacts
.github/             contribution templates and validation rules
skills/              SDD operating skills used by agents
progress.md          visible implementation progress scoreboard
```

## Review Standard

Documentation changes should be reviewed for:

- fidelity to the three PDFs
- actor and screen traceability
- consistent vocabulary
- correct stack responsibilities
- clear distinction between MVP and optional/future scope
- `Ant Design` and UX-spec alignment for any UI work
- Playwright evidence and `verify-report` status before approving the next slice
