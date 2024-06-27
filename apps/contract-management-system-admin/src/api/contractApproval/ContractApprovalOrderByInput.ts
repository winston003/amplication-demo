import { SortOrder } from "../../util/SortOrder";

export type ContractApprovalOrderByInput = {
  approvalDate?: SortOrder;
  approver?: SortOrder;
  contractId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
