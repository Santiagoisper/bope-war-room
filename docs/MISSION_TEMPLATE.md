# BOPE Mission Template

Use this template for every mission created in BOPE War Room.

---

## Mission Header

- Mission ID:
- Title:
- Campaign:
- Issued by:
- Absorbed by:
- Pressure level: Low / Medium / High / Critical
- Current doctrinal state: New / Intel / Assigned / In Progress / Blocked / In Review / Ready for Closure / Closed Local / Closed Total

## Order

Describe the original order exactly as received.

## Objective Real

State the true operational objective in one or two clear sentences.

## Context

Summarize the relevant operational and technical context.

## Risks

List the real risks, not generic fears.

## Restrictions

List hard constraints: legal, technical, product, time, cost, or access limits.

## Success Criteria

Define how the mission will be considered successful.

## Minimum Force Required

List only the agents strictly needed.

## Mission Lead

- Primary lead:
- Support roles authorized:

## Runtime and Access Policy

- Preferred access path: Subscription / Paid API / Local / Hosted Platform
- Approved provider(s): Claude Code / Codex / Gemini / Groq / Ollama / Other
- Approved model(s):
- Fallback model(s):
- Parallel or horizontal mode expected:
- Estimated cost sensitivity: Low / Medium / High

## External Systems Allowed

Mark only what is actually needed.

- GitHub:
- Vercel:
- Neon:
- Replit:
- OpenHands:
- Browser/Web:
- Local shell:
- Database direct access:
- Other:

## Intel

John Rambo must summarize:
- what the problem actually is
- what is known
- what is uncertain
- where the danger of confusion or rework is
- which access path should be used first: subscription, API, local, or hosted
- which tools or external systems are truly necessary

## Execution Plan

Describe the operational plan in short steps.

## Routing Decision

State why this mission was routed to these agents, models, and tools.

## Handoffs

Record authorized handoffs only.

| From | To | Reason | Authorized by | Status |
|---|---|---|---|---|

## Evidence Expected

List the evidence required for closure.

## Evidence Delivered

List links, artifacts, diffs, screenshots, reports, commits, logs, deployments, traces, or database proofs.

## Blockers

If blocked, state:
- blocker
- root cause
- proof
- proposed next action

## Validation

State who validated the output and how.

## Reusable Learning

Capture what should be remembered for future missions.

## Closure

- Closed by:
- Closure date:
- Closure type: Local / Total
- Final summary:

## Winston Record

Winston must capture:
- what happened
- what mattered
- what changed
- which provider/model/runtime path was used
- what should not be re-fought next time

---

## Quality Gate

Before closure, confirm these five questions:

1. What exactly was understood?
2. What was touched?
3. What real risk existed?
4. How was breakage checked?
5. What would fail next if this decision were wrong?
