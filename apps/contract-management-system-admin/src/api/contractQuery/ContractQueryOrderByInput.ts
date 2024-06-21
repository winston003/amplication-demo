import { SortOrder } from "../../util/SortOrder";

export type ContractQueryOrderByInput = {
  contractId?: SortOrder;
  createdAt?: SortOrder;
  criteria?: SortOrder;
  id?: SortOrder;
  queryDate?: SortOrder;
  queryType?: SortOrder;
  updatedAt?: SortOrder;
};
