import { Contract } from "../contract/Contract";

export type ContractApproval = {
  approvalDate: Date | null;
  approver: string | null;
  contract?: Contract | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
