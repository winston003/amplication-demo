import { ContractReport as TContractReport } from "../api/contractReport/ContractReport";

export const CONTRACTREPORT_TITLE_FIELD = "reportName";

export const ContractReportTitle = (record: TContractReport): string => {
  return record.reportName?.toString() || String(record.id);
};
