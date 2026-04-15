# BOPE Routing Protocol

## Purpose

This document defines who enters a mission, which runtime and provider should be used first, when to escalate to paid API usage, and how external systems are orchestrated.

The goal is not maximum activity. The goal is precise deployment under doctrinal control.

## Core doctrine

- Every mission enters through John Rambo.
- Minimum force necessary.
- Subscription access comes before paid API usage when the subscription path is viable.
- Model selection follows mission type, not habit.
- Tool access must be explicit and justified.
- Winston records what path was used and why.

## Access order policy

For any mission, apply this order unless John authorizes an exception:

1. Existing paid subscription path already available
2. Local or zero-marginal-cost option if quality is sufficient
3. Paid API path if the mission requires higher reliability, speed, or integration
4. Additional providers only when they improve the mission materially

## Provider doctrine

### Claude Code
Use first when:
- the mission needs architectural reasoning
- the codebase is broad or unfamiliar
- multi-step debugging is needed
- a strong analyst-builder loop is useful
- parallel agent work provides a real advantage

Notes:
- Claude can work with parallel agent patterns
- it should be used under doctrinal supervision, not as unmanaged swarm behavior

### Codex
Use first when:
- the mission is implementation-heavy
- the task is concrete and code-facing
- the need is direct execution, refactor, or technical landing
- horizontal task flow is preferred over parallel agent fanout

Notes:
- Codex is treated as a strong builder path
- it should not be forced into pseudo-parallel doctrine it does not naturally fit

### Gemini
Use when:
- the mission benefits from external research or contrast
- the task requires alternate reasoning perspective
- the primary value is information gathering, comparison, or broader synthesis

Notes:
- Gemini is not the default command brain
- it is a support intelligence layer unless explicitly promoted by results

### Groq and other fast open-model backends
Use when:
- the mission is cost-sensitive
- speed matters more than maximum reasoning depth
- the task is repetitive, lightweight, or disposable
- a fallback is needed without burning premium paths

### Local models / Ollama
Use when:
- privacy is important
- the task is low risk
- zero-marginal-cost execution is acceptable
- the mission does not require top-tier reasoning

## Agent routing doctrine

### John Rambo
Always receives the mission first.
Determines objective, risk, minimum force, access path, and specialist routing.

### Winston Scribe
Does not open missions first.
Enters for closure, memory, handoff, doctrinal traceability, and reusable learning.

### Forge Back
Primary builder for backend-heavy, architecture-heavy, migration, and stabilization work.
Usually paired with Codex or Claude Code depending on mission character.

### Pixel Front
Primary for frontend, UX surface, interaction clarity, onboarding, and visible user flow.

### Nexus Wire
Primary when the problem exists between systems, layers, contracts, or flows.
Use when backend, frontend, auth, deployment, or tooling collide.

### Cerberus Guardian
Only enters when real sensitive surface exists:
- auth
- permissions
- secrets
- infra risk
- exposed settings
- security-sensitive deployment

### House Doctor
Use when there is something real to validate:
- regression risk
- release candidate
- post-fix validation
- stress, QA, stability confirmation

### Sicario Loco
Use only under pressure, urgency, resistant fronts, or hard tactical closure.
Not a default assignee.

## Tool routing doctrine

### GitHub
Use for:
- source control
- pull requests
- issues linked to code
- commit evidence
- repository inspection

### Vercel
Use for:
- deployment status
- preview checks
- environment-linked frontend release paths
- production or preview verification when frontend delivery matters

### Neon
Use for:
- database verification
- schema confirmation
- migration evidence
- production-like data structure checks

### Replit
Use only when:
- a lightweight external execution environment is materially helpful
- collaborative sandboxing is needed
- the mission is designed for that runtime

### OpenHands
Use when:
- a stronger autonomous coding environment is explicitly needed
- the mission requires a more independent execution surface
- BOPE decides the autonomy tradeoff is worth it

## Parallel vs horizontal doctrine

### Claude parallel mode
Allowed when:
- the mission benefits from parallel sub-analysis
- each sub-agent has a bounded role
- John remains the doctrinal coordinator
- outputs are merged, not blindly trusted

### Codex horizontal mode
Preferred when:
- the mission benefits from linear execution and direct implementation
- tasks are discrete and code-facing
- clarity beats fanout

## Decision matrix

### Architecture mission
Primary path: Claude Code subscription first
Support: Forge or Nexus
Escalate to paid API if subscription path is insufficient

### Backend implementation mission
Primary path: Codex subscription first
Support: Forge
Escalate to Claude or API if architecture uncertainty appears

### Frontend mission
Primary path: Claude Code or Codex depending on depth
Lead: Pixel Front
Use Vercel when deployment/preview validation matters

### Integration mission
Primary path: Claude Code or Codex depending on implementation ratio
Lead: Nexus
Use GitHub, Vercel, Neon as needed by surface

### Security-sensitive mission
Primary path: Claude Code or Codex under Cerberus supervision
Use Cerberus and only the necessary external systems

### QA / regression mission
Lead: House Doctor
Use the model/runtime best suited to evidence gathering and validation, not necessarily the same one that built the fix

### Urgent closure mission
Lead: John may authorize Sicario
Use the fastest path that still preserves doctrinal control

## Mandatory mission logging

For every meaningful mission, Winston must record:
- which provider was used
- which model was used
- whether the path was subscription, API, local, or hosted
- which tools were touched
- why that route was chosen
- what should be reused next time
