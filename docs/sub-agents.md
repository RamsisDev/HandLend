# Agent Workflow For HandLend

The skills in this repo are used as a disciplined SDD workflow for HandLend, not as a generic agent framework showcase.

## Phase Intent

| Phase | HandLend expectation |
|------|-----------------------|
| `sdd-explore` | Identify actor impact, screen impact, stack implications, and the slice position in `SDD Handlend.md` |
| `sdd-propose` | Define why the change exists and which MVP slice it belongs to |
| `sdd-spec` | Write requirements and scenarios tied to actors, screens, and product states |
| `sdd-design` | Define Next.js, Python, Avalanche, escrow, GenLayer, optional Aave responsibilities, and `Ant Design` UI choices validated against the UX spec |
| `sdd-tasks` | Break work into concrete implementation or documentation tasks, including test-first and verification tasks |
| `sdd-apply` | Implement one approved slice at a time, update tasks as work completes, and keep `progress.md` synchronized |
| `sdd-verify` | Check fidelity to PDFs, specs, design, task completion, and real execution evidence including Playwright when UI is affected |
| `sdd-archive` | Merge completed change knowledge back into the baseline docs |

## Minimum Context For Any Agent Task

Before a sub-agent writes or edits anything, it should know:

- which actor is affected
- which screen IDs are affected
- which vertical slice the change belongs to
- whether it changes escrow, validation, timeline, or offline behavior
- where the slice sits in `SDD Handlend.md`
- whether the UX decision must be validated against `UX Spec _ Product Design Document.md`
- whether Playwright browser verification is required

## Non-Negotiable Rules

- Do not introduce stack responsibilities that contradict the technical PDF.
- Do not turn Aave into a mandatory MVP dependency.
- Do not write user-facing text that exposes opaque blockchain mechanics without translation.
- Do not create disconnected tasks that fail to map back to a HandLend slice.
- Use `Ant Design` as the only UI library for implementation work unless the user explicitly changes the rule.
- Do not advance to a new feature slice until the current slice has a recorded `verify-report` with verdict `PASS`.
- For UI, navigation, form, and actor-flow changes, use Playwright to open a browser and collect execution evidence.
