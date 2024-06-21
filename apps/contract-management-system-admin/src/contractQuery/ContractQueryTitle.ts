import { ContractQuery as TContractQuery } from "../api/contractQuery/ContractQuery";

export const CONTRACTQUERY_TITLE_FIELD = "id";

export const ContractQueryTitle = (record: TContractQuery): string => {
  return record.id?.toString() || String(record.id);
};
