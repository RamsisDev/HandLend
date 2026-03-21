# HandLend Hackathon Vision

## One-Liner

HandLend is a conditional funding protocol for humanitarian logistics where funds are committed to a mission, locked in escrow, validated through field evidence, and settled onchain only after proof conditions are met.

## Problem

In disaster response, donors rarely get a trustworthy link between contribution, operational execution, and verified last-mile delivery. Traditional donation flows provide weak transparency and delayed proof.

## Product Vision

HandLend enables donors to:

- select a disaster context
- compare logistics companies
- review an AI-generated operational summary
- fund a mission
- follow a readable timeline of delivery evidence and settlement

It enables coordinators to:

- register a logistics organization
- publish an operational plan
- manage field operators
- monitor progress, funds, and alerts

It enables operators to:

- record delivery proof quickly
- work under unstable connectivity
- sync later without losing evidence

## MVP Promise

A donor selects an active mission, chooses a logistics company, deposits funds into escrow, and follows the mission timeline. A field operator records QR, GPS, timestamp, and delivery identifiers. After validation, settlement is executed and surfaced in simple product language.

## Stack Role Summary

- `Next.js`: interface, wallet flow, operator capture UX, timeline, responsive/mobile behavior
- `Python backend`: domain API, persistence, sync processing, audit trail, onchain indexing
- `Avalanche`: escrow execution and settlement
- `GenLayer`: company scoring and evidence validation
- `Aave`: optional liquidity or operational-advance module
