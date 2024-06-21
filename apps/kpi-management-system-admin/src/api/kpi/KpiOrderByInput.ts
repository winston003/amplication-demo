import { SortOrder } from "../../util/SortOrder";

export type KpiOrderByInput = {
  classification?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  targetValue?: SortOrder;
  updatedAt?: SortOrder;
  weight?: SortOrder;
};
