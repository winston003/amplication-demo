import { ContractVersion as TContractVersion } from "../api/contractVersion/ContractVersion";

export const CONTRACTVERSION_TITLE_FIELD = "id";

export const ContractVersionTitle = (record: TContractVersion): string => {
  return record.id?.toString() || String(record.id);
};
