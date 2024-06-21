import { ContractApprovalWhereInput } from "./ContractApprovalWhereInput";
import { ContractApprovalOrderByInput } from "./ContractApprovalOrderByInput";

export type ContractApprovalFindManyArgs = {
  where?: ContractApprovalWhereInput;
  orderBy?: Array<ContractApprovalOrderByInput>;
  skip?: number;
  take?: number;
};
