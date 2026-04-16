// BOPE Mission Brief — creation-time intake template.
// Injected as the default description for new top-level missions.
// Sub-missions receive no template: they are tactical, not doctrinal.
//
// Design intent: each section is a forcing function, not a form field.
// Short directives that make the creator think before John absorbs the mission.
//
// What is NOT here (belongs to execution, not intake):
//   Intel, Execution Plan, Handoffs, Evidence, Blockers,
//   Validation, Reusable Learning, Closure, Winston Record, Quality Gate.

export const BOPE_MISSION_BRIEF = `## Objective

State the real objective in one or two sentences.

## Context

Relevant background John needs to absorb this mission.

## Restrictions

What cannot be touched. Hard limits: files, services, scope, cost, access.

## Success Condition

How will we know this mission is closed. Be specific.

## Minimum Force

Which agents and tools are strictly necessary. No more.
`;
