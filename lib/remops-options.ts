/* Option lists for the remOPS signup form (app/portfolio/remops/signup).
   Kept separate from form-options.ts (the Get Started contact form) because the
   qualifying questions are product-specific, but the `Option` shape and the
   value→label lookup are shared, so the submitted values still render as
   readable labels in the notification email. */

import type { Option } from "@/lib/form-options";

export const INDUSTRY_OPTIONS: Option[] = [
  { value: "distribution", label: "Distribution & Wholesale" },
  { value: "logistics", label: "Logistics, 3PL & Freight" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "retail", label: "Retail & E-commerce" },
  { value: "fmcg", label: "FMCG & Food" },
  { value: "pharma", label: "Pharma & Healthcare" },
  { value: "agri", label: "Agriculture & Produce" },
  { value: "construction", label: "Construction & Building Supply" },
  { value: "automotive", label: "Automotive & Spare Parts" },
  { value: "other", label: "Other" },
];

/* Multi-select: what the customer wants to run on WhatsApp. */
export const USE_CASE_OPTIONS: Option[] = [
  { value: "ordering", label: "Customer ordering & reordering" },
  { value: "tracking", label: "Order & shipment tracking" },
  { value: "support", label: "Customer support & complaints" },
  { value: "sales", label: "Sales, quotes & follow-up" },
  { value: "supply-chain", label: "Supply chain co-pilot" },
  { value: "internal", label: "Internal co-pilot for managers" },
  { value: "approvals", label: "In-chat approvals & escalations" },
  { value: "alerts", label: "Proactive alerts & daily briefings" },
  { value: "field", label: "Field & warehouse reporting" },
  { value: "payments", label: "Invoices, payments & documents" },
];

/* Multi-select: the systems we'd be integrating against. */
export const SYSTEM_OPTIONS: Option[] = [
  { value: "sap", label: "SAP" },
  { value: "odoo", label: "Odoo" },
  { value: "zoho", label: "Zoho" },
  { value: "dynamics", label: "Microsoft Dynamics" },
  { value: "netsuite", label: "NetSuite / Oracle" },
  { value: "quickbooks", label: "QuickBooks / Xero" },
  { value: "salesforce", label: "Salesforce" },
  { value: "hubspot", label: "HubSpot" },
  { value: "wms-tms", label: "WMS / TMS" },
  { value: "sheets", label: "Excel / Google Sheets" },
  { value: "custom", label: "Custom / in-house system" },
  { value: "none", label: "Nothing yet" },
];

export const VOLUME_OPTIONS: Option[] = [
  { value: "under-1k", label: "Under 1,000 conversations / month" },
  { value: "1k-10k", label: "1,000 – 10,000 / month" },
  { value: "10k-50k", label: "10,000 – 50,000 / month" },
  { value: "over-50k", label: "Over 50,000 / month" },
  { value: "not-sure", label: "Not sure yet" },
];

/* Map a list of stored values back to readable labels (used by the email). */
export function getLabelsForValues(options: Option[], values: string[]): string[] {
  return values.map(
    (v) => options.find((o) => o.value === v)?.label ?? v
  );
}
