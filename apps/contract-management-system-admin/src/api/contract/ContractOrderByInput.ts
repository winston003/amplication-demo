import { SortOrder } from "../../util/SortOrder";

export type ContractOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  template?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
};
