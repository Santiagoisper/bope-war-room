// BOPE doctrinal configuration for the Battalion display layer.
// Source of truth: docs/ROSTER.md
// Zero backend dependency — pure UI configuration.
//
// Convention: agent.description is the doctrinal role string.
// This file provides visual config and helpers keyed on that string.

import type { Agent } from "@multica/core/types";

export type BopeRoleGroup = "command" | "specialists" | "reserve";

export interface BopeMemberConfig {
  role: string;
  group: BopeRoleGroup;
  /** Tailwind classes applied to the role badge */
  badgeClass: string;
}

// Canonical roles — must match docs/ROSTER.md exactly.
export const BOPE_ROLES: readonly BopeMemberConfig[] = [
  { role: "Operational Command",            group: "command",     badgeClass: "bg-primary/10 text-primary" },
  { role: "Traceability and Memory Officer", group: "command",    badgeClass: "bg-primary/10 text-primary" },
  { role: "Backend Builder",                group: "specialists", badgeClass: "bg-info/10 text-info" },
  { role: "Frontend and UX Surface",        group: "specialists", badgeClass: "bg-info/10 text-info" },
  { role: "Integration",                    group: "specialists", badgeClass: "bg-info/10 text-info" },
  { role: "Security",                       group: "specialists", badgeClass: "bg-warning/10 text-warning" },
  { role: "QA and Diagnosis",               group: "specialists", badgeClass: "bg-info/10 text-info" },
  { role: "Special Operations",             group: "specialists", badgeClass: "bg-destructive/10 text-destructive" },
  { role: "Doctrine and Legitimacy",        group: "reserve",     badgeClass: "bg-muted text-muted-foreground" },
  { role: "Silent Recon Reserve",           group: "reserve",     badgeClass: "bg-muted text-muted-foreground" },
];

const ROLE_INDEX = new Map(BOPE_ROLES.map((r) => [r.role, r]));

/**
 * Returns the canonical BOPE config if agent.description matches a doctrinal role.
 * Returns null for agents with no description or a non-canonical description.
 */
export function getBopeMemberConfig(agent: Agent): BopeMemberConfig | null {
  if (!agent.description) return null;
  return ROLE_INDEX.get(agent.description) ?? null;
}

/**
 * Returns Tailwind badge classes for the agent's role.
 * Falls back to muted style for non-canonical descriptions.
 */
export function getRoleBadgeClass(agent: Agent): string {
  if (!agent.description) return "";
  return getBopeMemberConfig(agent)?.badgeClass ?? "bg-muted text-muted-foreground";
}
