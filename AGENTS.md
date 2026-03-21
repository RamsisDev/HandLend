# HandLend Agent Instructions

When working on this project, load the relevant skill(s) before writing code or changing product documentation.

## Source Documents

These files are the authority for the repo:

1. `SDD Handlend.pdf`
2. `Stack HandLend.pdf`
3. `UX Spec _ Product Design Document.pdf`

If an artifact conflicts with one of these PDFs, update the artifact to match the PDFs unless the user explicitly asks to change the product definition.

## Required Documentation Contract

All proposals, specs, designs, task lists, implementations, bugs, and PRs must reflect HandLend directly.

- Every change must map to at least one actor: `Donor`, `Coordinator`, or `Operator`.
- When applicable, every change must name the affected screens:
  `D-01`, `D-02`, `D-03`, `D-04`, `D-05`, `C-01`, `C-02`, `C-03`, `C-04`, `O-01`, `O-02`.
- Use the official vocabulary from `docs/product/domain-glossary.md`.
- Respect the stack contract:
  `Avalanche` executes and settles, `escrow` locks and releases, `GenLayer` scores and validates, `Aave` is optional for MVP.
- Prefer product language over blockchain jargon in user-facing artifacts.

## How To Work In This Repo

1. Identify whether the task affects product vision, domain language, specs, design, tasks, implementation, or verification.
2. Load the relevant skill from the index below.
3. Read the HandLend artifacts that govern the affected area.
4. Make the change while preserving SDD, stack, and UX alignment.
5. Update affected documentation so the repo stays decision-complete.

## Skills

| Skill | Trigger | Path |
|-------|---------|------|
| `sdd-init` | When initializing HandLend SDD context or re-baselining project conventions. | [`skills/sdd-init/SKILL.md`](skills/sdd-init/SKILL.md) |
| `sdd-explore` | When investigating a HandLend feature, actor flow, screen, or domain ambiguity before proposing change. | [`skills/sdd-explore/SKILL.md`](skills/sdd-explore/SKILL.md) |
| `sdd-propose` | When creating or updating a HandLend change proposal with scope, actor impact, and MVP intent. | [`skills/sdd-propose/SKILL.md`](skills/sdd-propose/SKILL.md) |
| `sdd-spec` | When writing or updating HandLend requirements and scenarios tied to actors and screens. | [`skills/sdd-spec/SKILL.md`](skills/sdd-spec/SKILL.md) |
| `sdd-design` | When defining technical approach for Next.js, Python, Avalanche, escrow, GenLayer, and optional Aave integration. | [`skills/sdd-design/SKILL.md`](skills/sdd-design/SKILL.md) |
| `sdd-tasks` | When breaking a HandLend change into concrete implementation tasks. | [`skills/sdd-tasks/SKILL.md`](skills/sdd-tasks/SKILL.md) |
| `sdd-apply` | When implementing tasks in docs, frontend, backend, contracts, or workflow artifacts. | [`skills/sdd-apply/SKILL.md`](skills/sdd-apply/SKILL.md) |
| `sdd-verify` | When validating that implementation still matches the HandLend PDFs and repo artifacts. | [`skills/sdd-verify/SKILL.md`](skills/sdd-verify/SKILL.md) |
| `sdd-archive` | When archiving a completed HandLend change after implementation and verification. | [`skills/sdd-archive/SKILL.md`](skills/sdd-archive/SKILL.md) |
| `skill-registry` | When updating the project skill registry and conventions for HandLend work. | [`skills/skill-registry/SKILL.md`](skills/skill-registry/SKILL.md) |
| `issue-creation` | When creating a GitHub issue for a HandLend bug, flow gap, or feature. | [`skills/issue-creation/SKILL.md`](skills/issue-creation/SKILL.md) |
| `branch-pr` | When preparing HandLend documentation or implementation changes for review. | [`skills/branch-pr/SKILL.md`](skills/branch-pr/SKILL.md) |
