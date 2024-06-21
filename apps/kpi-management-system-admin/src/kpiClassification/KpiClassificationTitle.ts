import { KpiClassification as TKpiClassification } from "../api/kpiClassification/KpiClassification";

export const KPICLASSIFICATION_TITLE_FIELD = "name";

export const KpiClassificationTitle = (record: TKpiClassification): string => {
  return record.name?.toString() || String(record.id);
};
