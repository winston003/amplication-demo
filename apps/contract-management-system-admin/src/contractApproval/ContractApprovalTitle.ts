import { ContractApproval as TContractApproval } from "../api/contractApproval/ContractApproval";

export const CONTRACTAPPROVAL_TITLE_FIELD = "approver";

export const ContractApprovalTitle = (record: TContractApproval): string => {
  return record.approver?.toString() || String(record.id);
};
