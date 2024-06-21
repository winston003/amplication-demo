import { SortOrder } from "../../util/SortOrder";

export type RankAdjustmentOrderByInput = {
  adjustmentReason?: SortOrder;
  createdAt?: SortOrder;
  effectiveDate?: SortOrder;
  id?: SortOrder;
  rankId?: SortOrder;
  updatedAt?: SortOrder;
};
