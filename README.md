# BOPE War Room

BOPE War Room is the product implementation repo for the BOPE operating system.

This repository is separate from the historical and doctrinal BOPE repositories.

Its purpose is to turn BOPE into a real multi-agent operational product built on top of a forkable managed-agents platform.

## Core idea

Multica provides the operational base:
- agents
- issues
- projects
- runtimes
- skills
- execution tracking

BOPE provides the doctrine:
- single command authority
- all missions enter through John Rambo
- operational economy
- evidence-first closures
- Winston as memory and traceability layer
- explicit routing, handoff, and closure

## Product direction

The target is a BOPE Mode layered over a Multica-based system.

This repo will contain:
- product specs
- BOPE mission model
- canonical roster
- prompts and agent doctrine
- UI vocabulary mapping
- implementation plan for the fork

## Initial documents

- `docs/BOPE_MODE_SPEC.md`
- `docs/ROSTER.md`
- `docs/UI_VOCABULARY.md`

## Rules for this repo

- This repo is for product implementation, not ritualized mission logging.
- Historical BOPE doctrine is a source of truth, but not every legacy artifact should be copied here.
- The product should encode doctrine into workflows, templates, permissions, and UI.
- Keep the implementation clean, pragmatic, and reversible.
