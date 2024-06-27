import { SortOrder } from "../../util/SortOrder";

export type OpenSourceProjectOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  projectName?: SortOrder;
  projectUrl?: SortOrder;
  updatedAt?: SortOrder;
};
