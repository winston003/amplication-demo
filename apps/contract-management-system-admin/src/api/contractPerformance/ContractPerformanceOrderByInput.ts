import { SortOrder } from "../../util/SortOrder";

export type ContractPerformanceOrderByInput = {
  contractId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  milestone?: SortOrder;
  recordedDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
