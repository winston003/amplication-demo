import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type ContractApprovalUpdateInput = {
  approvalDate?: Date | null;
  approver?: string | null;
  contract?: ContractWhereUniqueInput | null;
  status?: "Option1" | null;
};
