import { Integration as TIntegration } from "../api/integration/Integration";

export const INTEGRATION_TITLE_FIELD = "systemName";

export const IntegrationTitle = (record: TIntegration): string => {
  return record.systemName?.toString() || String(record.id);
};
