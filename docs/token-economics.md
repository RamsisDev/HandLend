# MVP Scope and Demo Economics

This file replaces the old generic delegation analysis with HandLend scope discipline.

## What Must Be Demoable

The MVP must prove this sequence end to end:

1. donor selects disaster and logistics company
2. donor commits funds
3. escrow locks funds on Avalanche
4. operator captures delivery evidence
5. offline queue preserves events when needed
6. sync sends evidence to backend
7. GenLayer validates or flags evidence
8. settlement state appears in readable product language

## What Is Optional For MVP

- deep Aave integration
- multi-step dispute governance beyond a clear review state
- non-core analytics beyond timeline and operational dashboard summaries

## Scope Guardrail

If a proposed change weakens the main demo loop above, it should be deferred or explicitly marked as future scope.
