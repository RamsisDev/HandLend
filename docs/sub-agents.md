# Agent Workflow For HandLend

The skills in this repo are used as a disciplined SDD workflow for HandLend, not as a generic agent framework showcase.

## Phase Intent

| Phase | HandLend expectation |
|------|-----------------------|
| `sdd-explore` | Identify actor impact, screen impact, and stack implications |
| `sdd-propose` | Define why the change exists and which MVP slice it belongs to |
| `sdd-spec` | Write requirements and scenarios tied to actors, screens, and product states |
| `sdd-design` | Define Next.js, Python, Avalanche, escrow, GenLayer, and optional Aave responsibilities |
| `sdd-tasks` | Break work into concrete implementation or documentation tasks |
| `sdd-apply` | Implement the approved slice and update tasks as work completes |
| `sdd-verify` | Check fidelity to PDFs, specs, design, and task completion |
| `sdd-archive` | Merge completed change knowledge back into the baseline docs |

## Minimum Context For Any Agent Task

Before a sub-agent writes or edits anything, it should know:

- which actor is affected
- which screen IDs are affected
- which vertical slice the change belongs to
- whether it changes escrow, validation, timeline, or offline behavior

## Non-Negotiable Rules

- Do not introduce stack responsibilities that contradict the technical PDF.
- Do not turn Aave into a mandatory MVP dependency.
- Do not write user-facing text that exposes opaque blockchain mechanics without translation.
- Do not create disconnected tasks that fail to map back to a HandLend slice.
