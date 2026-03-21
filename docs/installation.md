# Contributor Workspace Guide

This repository is documentation-led. Contributors are expected to align work with the HandLend PDFs before changing code or product artifacts.

## Before Changing Anything

Read, in order:

1. `README.md`
2. `AGENTS.md`
3. `docs/product/hackathon-vision.md`
4. `docs/product/domain-glossary.md`
5. the relevant `changes/*` artifact set

## How To Start Work

- Use `sdd-explore` for discovery and gap analysis.
- Use `sdd-propose`, `sdd-spec`, `sdd-design`, and `sdd-tasks` to extend the roadmap.
- Use `sdd-apply` only after proposal, spec, design, and tasks exist or are intentionally updated.

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
.github/             contribution templates and validation rules
skills/              SDD operating skills used by agents
```

## Review Standard

Documentation changes should be reviewed for:

- fidelity to the three PDFs
- actor and screen traceability
- consistent vocabulary
- correct stack responsibilities
- clear distinction between MVP and optional/future scope
