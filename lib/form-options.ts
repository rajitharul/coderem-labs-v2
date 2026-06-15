/* Shared option lists for the Get Started contact form.
   Used by both the client form (GetStartedContent.tsx) and the API route /
   email templates, so the submitted `value` always maps back to a readable
   `label` in the notification email. */

export type Option = { value: string; label: string };

export const BUDGET_OPTIONS: Option[] = [
  { value: "under-25k", label: "Under $25,000" },
  { value: "25k-50k", label: "$25,000 – $50,000" },
  { value: "50k-100k", label: "$50,000 – $100,000" },
  { value: "100k-250k", label: "$100,000 – $250,000" },
  { value: "over-250k", label: "Over $250,000" },
  { value: "not-sure", label: "Not sure yet" },
];

export const TIMELINE_OPTIONS: Option[] = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "1 to 3 months" },
  { value: "3-6-months", label: "3 to 6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "flexible", label: "Flexible" },
];

export const PROJECT_TYPE_OPTIONS: Option[] = [
  { value: "web-app", label: "Web Application" },
  { value: "mobile-app", label: "Mobile Application" },
  { value: "enterprise", label: "Enterprise System" },
  { value: "ai-ml", label: "AI/ML Solution" },
  { value: "cloud-devops", label: "Cloud & DevOps" },
  { value: "other", label: "Other" },
];

/* Map a stored value back to its human-readable label (falls back to the raw
   value if it isn't a known option). */
export function getLabelForValue(options: Option[], value: string): string {
  return options.find((o) => o.value === value)?.label ?? value;
}
