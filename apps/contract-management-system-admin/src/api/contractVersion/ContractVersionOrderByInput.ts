import { SortOrder } from "../../util/SortOrder";

export type ContractVersionOrderByInput = {
  changes?: SortOrder;
  contractId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  modificationDate?: SortOrder;
  updatedAt?: SortOrder;
  versionNumber?: SortOrder;
};
