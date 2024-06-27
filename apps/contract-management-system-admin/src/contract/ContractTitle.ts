import { Contract as TContract } from "../api/contract/Contract";

export const CONTRACT_TITLE_FIELD = "title";

export const ContractTitle = (record: TContract): string => {
  return record.title?.toString() || String(record.id);
};
