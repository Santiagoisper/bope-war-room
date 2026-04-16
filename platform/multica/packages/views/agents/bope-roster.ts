// BOPE doctrinal identity layer for the Battalion UI.
// Source of truth: docs/ROSTER.md and docs/BOPE_MODE_SPEC.md
//
// This is a pure frontend config — no backend dependency.
// resolveBopeAgent() returns null for non-canonical agents: all existing
// display code stays unaffected.
//
// Key stability: agent.name is the canonical identifier at this layer.
// When a DB migration lands, swap the ROSTER_BY_NAME lookup for a DB query
// without touching any consuming component.
//
// ---------------------------------------------------------------------------
// NOTE ON EL COMANDANTE — Santiago Isbert Perlender
// ---------------------------------------------------------------------------
// Santiago is the Supreme Commander and final authority of BOPE.
// He is NOT included in BOPE_ROSTER and does NOT appear in the Battalion view.
// Reason: Battalion lists AI agents only. Santiago operates as a workspace
// member (human), not as an agent entry. His authority is implicit in the
// command structure — the roster exists to serve him, not to represent him.
// If a "Command" view is added in a future phase, his entry would live there,
// keyed to his workspace member record, not to an Agent row.
// ---------------------------------------------------------------------------

import type { Agent } from "@multica/core/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type BopeGroup = "command" | "specialists" | "reserve";

export interface BopeAgentMeta {
  /**
   * Discriminator: always true for entries in this roster.
   * Allows safe narrowing when mixing canonical and non-canonical agent data.
   */
  isCanonical: true;
  /**
   * Doctrinal display order within the full roster.
   * Used by resolveRoster() and any sorted Battalion view.
   * Command group: 1–2 · Specialists: 3–8 · Reserve: 9–10.
   */
  sortOrder: number;
  /** Full canonical name — matches agent.name exactly. */
  canonicalName: string;
  /** Short operative handle used in badges, mentions, and headers. */
  operativeName: string;
  /** Doctrinal role label — matches agent.description when set. */
  doctrinalRole: string;
  /** Full function description from docs/ROSTER.md. */
  doctrinalFunction: string;
  /** Operational group within the battalion structure. */
  group: BopeGroup;
  /**
   * Rank — null until formally defined.
   * Future: populated from runtime_config.bope_rank or DB field.
   */
  rank: string | null;
  /**
   * Active medal — null until earned and recorded.
   * Future: populated from runtime_config.bope_medal or honors DB table.
   */
  medal: string | null;
}

// ---------------------------------------------------------------------------
// Canonical roster — docs/ROSTER.md
// 10 agents · sortOrder 1–10 · El Comandante excluded (see note above)
// ---------------------------------------------------------------------------

export const BOPE_ROSTER: readonly BopeAgentMeta[] = [
  // -- Operational command (sortOrder 1–2) ----------------------------------
  {
    isCanonical: true,
    sortOrder: 1,
    canonicalName: "John Rambo",
    operativeName: "John",
    doctrinalRole: "Operational Command",
    doctrinalFunction:
      "Receives all missions, performs intel, assigns fronts, corrects execution, closes operations.",
    group: "command",
    rank: null,
    medal: null,
  },
  {
    isCanonical: true,
    sortOrder: 2,
    canonicalName: "Winston Scribe",
    operativeName: "Winston",
    doctrinalRole: "Traceability and Memory Officer",
    doctrinalFunction:
      "Closure records, handoffs, post-mortems, institutional memory, doctrinal continuity.",
    group: "command",
    rank: null,
    medal: null,
  },

  // -- Specialists (sortOrder 3–8) ------------------------------------------
  {
    isCanonical: true,
    sortOrder: 3,
    canonicalName: "Forge Back",
    operativeName: "Forge",
    doctrinalRole: "Backend Builder",
    doctrinalFunction:
      "Architecture, reconstruction, migrations, stabilization under pressure.",
    group: "specialists",
    rank: null,
    medal: null,
  },
  {
    isCanonical: true,
    sortOrder: 4,
    canonicalName: "Pixel Front",
    operativeName: "Pixel",
    doctrinalRole: "Frontend and UX Surface",
    doctrinalFunction:
      "User-facing flows, clarity, onboarding, visible interaction quality.",
    group: "specialists",
    rank: null,
    medal: null,
  },
  {
    isCanonical: true,
    sortOrder: 5,
    canonicalName: "Nexus Wire",
    operativeName: "Nexus",
    doctrinalRole: "Integration",
    doctrinalFunction:
      "End-to-end consistency, contracts, cross-layer flow integrity.",
    group: "specialists",
    rank: null,
    medal: null,
  },
  {
    isCanonical: true,
    sortOrder: 6,
    canonicalName: "Cerberus Guardian",
    operativeName: "Cerberus",
    doctrinalRole: "Security",
    doctrinalFunction:
      "Permissions, secrets, settings, defensive hardening, perimeter control.",
    group: "specialists",
    rank: null,
    medal: null,
  },
  {
    isCanonical: true,
    sortOrder: 7,
    canonicalName: "House Doctor",
    operativeName: "House",
    doctrinalRole: "QA and Diagnosis",
    doctrinalFunction:
      "Regression checks, release validation, failure diagnosis, stability confirmation.",
    group: "specialists",
    rank: null,
    medal: null,
  },
  {
    isCanonical: true,
    sortOrder: 8,
    canonicalName: "Sicario Loco",
    operativeName: "Sicario",
    doctrinalRole: "Special Operations",
    doctrinalFunction:
      "Rapid execution under pressure, high-friction closures, surgical intervention.",
    group: "specialists",
    rank: null,
    medal: null,
  },

  // -- Doctrinal and reserve roles (sortOrder 9–10) -------------------------
  {
    isCanonical: true,
    sortOrder: 9,
    canonicalName: "Marco Aurelio Herald",
    operativeName: "Marco",
    doctrinalRole: "Doctrine and Legitimacy",
    doctrinalFunction:
      "Ethical and doctrinal review, sanctions, medals, symbolic structure.",
    group: "reserve",
    rank: null,
    medal: null,
  },
  {
    isCanonical: true,
    sortOrder: 10,
    canonicalName: "Blade Killer",
    operativeName: "Blade",
    doctrinalRole: "Silent Recon Reserve",
    doctrinalFunction:
      "Reconnaissance, silent isolation of critical problems, narrow tactical intervention.",
    group: "reserve",
    rank: null,
    medal: null,
  },
];

// ---------------------------------------------------------------------------
// Resolver
// ---------------------------------------------------------------------------

const ROSTER_BY_NAME = new Map(BOPE_ROSTER.map((m) => [m.canonicalName, m]));

/**
 * Returns doctrinal metadata for a canonical BOPE agent.
 * Returns null for any agent whose name doesn't match the roster —
 * all non-BOPE agents render with their existing generic display unchanged.
 */
export function resolveBopeAgent(agent: Agent): BopeAgentMeta | null {
  return ROSTER_BY_NAME.get(agent.name) ?? null;
}

/**
 * Returns true if the agent is part of the canonical BOPE roster.
 */
export function isBopeAgent(agent: Agent): boolean {
  return ROSTER_BY_NAME.has(agent.name);
}

/**
 * Returns canonical roster members matched against the provided agent list,
 * sorted by sortOrder ascending (doctrinal order).
 * Unmatched roster entries are omitted — agents not yet created are invisible.
 * Non-canonical agents in the list are also omitted from this result.
 */
export function resolveRoster(agents: Agent[]): Array<{ agent: Agent; meta: BopeAgentMeta }> {
  const agentByName = new Map(agents.map((a) => [a.name, a]));
  const result: Array<{ agent: Agent; meta: BopeAgentMeta }> = [];
  for (const meta of BOPE_ROSTER) {
    const agent = agentByName.get(meta.canonicalName);
    if (agent) result.push({ agent, meta });
  }
  // BOPE_ROSTER is already in sortOrder — no re-sort needed.
  return result;
}
