import { SortOrder } from "../../util/SortOrder";

export type RankOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  requirements?: SortOrder;
  responsibilities?: SortOrder;
  updatedAt?: SortOrder;
};
