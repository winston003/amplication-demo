import { SortOrder } from "../../util/SortOrder";

export type RankPromotionOrderByInput = {
  applicant?: SortOrder;
  applicationDate?: SortOrder;
  approvalStatus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rankId?: SortOrder;
  reviewCommittee?: SortOrder;
  updatedAt?: SortOrder;
};
