import { SortOrder } from "../../util/SortOrder";

export type QueryOrderByInput = {
  createdAt?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  queryDate?: SortOrder;
  queryType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
