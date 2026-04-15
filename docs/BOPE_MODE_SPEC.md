# BOPE Mode Spec v1

## Purpose

BOPE Mode is a doctrinal and operational layer on top of a managed-agents platform.

The platform provides execution.
BOPE provides command structure, mission semantics, operational economy, memory, and closure discipline.

## Non-negotiable principles

- Single command authority starts with Santiago.
- Every mission enters through John Rambo.
- Activate the minimum force necessary.
- No valid closure without evidence.
- No assumed shared memory across layers.
- Winston preserves operational memory and traceability.

## Canonical mission flow

1. Santiago emits the order.
2. John absorbs the mission.
3. John performs INTEL.
4. John defines objective, constraints, risks, success criteria, and minimum force.
5. John assigns the primary front.
6. Specialists report back to John.
7. Winston preserves closure, handoff, and reusable learning.
8. Mission closes only after evidence is complete.

## Canonical mission states

- New
- Intel
- Assigned
- In Progress
- Blocked
- In Review
- Ready for Closure
- Closed Local
- Closed Total

## Canonical agent roles

- Santiago Isbert Perlender: supreme commander
- John Rambo: operational command
- Winston Scribe: memory and traceability
- Forge Back: backend builder
- Pixel Front: frontend and user-facing surface
- Nexus Wire: cross-system integration
- Cerberus Guardian: security and permissions
- House Doctor: QA and diagnosis
- Sicario Loco: special operations under pressure
- Marco Aurelio Herald: doctrine and legitimacy
- Blade Killer: silent reconnaissance reserve

## Product requirements

The product must support:

- mission intake through John
- explicit doctrinal states
- typed communication events
- operational economy guardrails
- closure checklist
- evidence attachment and verification
- handoff visibility
- Winston memory ledger
- canonical roster view
- honors and records layer later

## Product language mapping

- Workspace -> Command Center
- Issues -> Missions
- Projects -> Campaigns
- Inbox -> COMMS
- Agents -> Battalion
- Runtimes -> Bases
- Skills -> Doctrines

## Initial build strategy

Phase 1:
- use the platform mostly as-is
- rename concepts in product docs and internal language
- define canonical prompts for agents
- test real mission flow manually

Phase 2:
- fork UI vocabulary
- add doctrinal mission template
- add routing and economy constraints
- add Winston closure/memory flows

Phase 3:
- add advanced memory
- add evaluations and benchmarks
- add honor board and historical records
