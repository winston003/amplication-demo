import { ContractTemplate as TContractTemplate } from "../api/contractTemplate/ContractTemplate";

export const CONTRACTTEMPLATE_TITLE_FIELD = "name";

export const ContractTemplateTitle = (record: TContractTemplate): string => {
  return record.name?.toString() || String(record.id);
};
