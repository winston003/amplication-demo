import { ContractPerformance as TContractPerformance } from "../api/contractPerformance/ContractPerformance";

export const CONTRACTPERFORMANCE_TITLE_FIELD = "milestone";

export const ContractPerformanceTitle = (
  record: TContractPerformance
): string => {
  return record.milestone?.toString() || String(record.id);
};
