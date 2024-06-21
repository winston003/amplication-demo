import { Kpi as TKpi } from "../api/kpi/Kpi";

export const KPI_TITLE_FIELD = "name";

export const KpiTitle = (record: TKpi): string => {
  return record.name?.toString() || String(record.id);
};
